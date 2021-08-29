import { createAction, props } from "@ngrx/store";
import {  Cerveja } from "@cerveja/api-interfaces";

// Select Entity

export const selectCerveja = createAction(
    '[CERVEJA] Select Cerveja',
    props<{ cervejaId: string }>()
);

// Load all Entities

export const loadCervejas = createAction(
    '[CERVEJA] Load Cervejas'
);

export const loadCervejasSuccess = createAction(
    '[CERVEJA] Load Cervejas Success',
    props<{ cervejas: Cerveja[]}>()
);

export const loadCervejasFailed = createAction(
    '[CERVEJA] Load Cervejas Failed',
    props<{ error: any }>()
);

// Load Single Entity

export const loadCerveja = createAction(
    '[CERVEJA] Load Cerveja',
    props<{ cervejaId: string}>()
);

export const loadCervejaSuccess = createAction(
    '[CERVEJA] Load Cerveja Success',
    props<{ cerveja: Cerveja}>()
);

export const loadCervejaFailed = createAction(
    '[CERVEJA] Load Cerveja Failed',
    props<{ error: any}>()
);

// Load Create Entity

export const createCerveja = createAction(
    '[CERVEJA] Create Cerveja',
    props<{ cerveja: Cerveja}>()
);

export const createCervejaSuccess = createAction(
    '[CERVEJA] Create Cerveja Success',
    props<{ cerveja: Cerveja}>()
);

export const createCervejaFailed = createAction(
    '[CERVEJA] Create Cerveja Failed',
    props<{ error: any}>()
);

// Load Update Entity

export const updateCerveja = createAction(
    '[CERVEJA] Update Cerveja',
    props<{ cerveja: Cerveja}>()
);

export const updateCervejaSuccess = createAction(
    '[CERVEJA] Update Cerveja Success',
    props<{ cerveja: Cerveja}>()
);

export const updateCervejaFailed = createAction(
    '[CERVEJA] Create Cerveja Failed',
    props<{ error: any}>()
);

// Load Delete Entity

export const deleteCerveja = createAction(
    '[CERVEJA] Delete Cerveja',
    props<{ cerveja: Cerveja}>()
);

export const deleteCervejaSuccess = createAction(
    '[CERVEJA] Delete Cerveja Success',
    props<{ cerveja: Cerveja}>()
);

export const deleteCervejaFailed = createAction(
    '[CERVEJA] Create Cerveja Failed',
    props<{ error: any}>()
);