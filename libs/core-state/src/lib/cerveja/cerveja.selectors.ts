import { emptyCerveja } from "@cerveja/api-interfaces";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { cervejaAdapter, CervejaState, CERVEJA_FEATURE_KEY } from "./cerveja.reducer";

export const getCervejaState = createFeatureSelector<CervejaState>(CERVEJA_FEATURE_KEY);

const { selectAll, selectEntities } = cervejaAdapter.getSelectors();

export const getCervejasLoaded = createSelector(
    getCervejaState,
    (state: CervejaState) => state.loaded
);

export const getCervejaError = createSelector(
    getCervejaState,
    (state: CervejaState) => state.error
);

export const getAllCervejas = createSelector(
    getCervejaState,
    (state: CervejaState) => selectAll(state)
);

export const getCervejaEntities = createSelector(
    getCervejaState,
    (state: CervejaState) => selectEntities(state)
);

export const getSelectedCervejaId = createSelector(
    getCervejaState,
    (state: CervejaState) => state.selectedId
);

export const getSelectedCerveja = createSelector(
    getCervejaEntities,
    getSelectedCervejaId,
    (entities, selectedId) => (selectedId && entities[selectedId]) || emptyCerveja
);