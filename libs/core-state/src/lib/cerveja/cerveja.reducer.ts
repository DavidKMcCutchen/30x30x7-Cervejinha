import { Cerveja } from "@cerveja/api-interfaces";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import * as CervejaActions from './cerveja.actions';

export const CERVEJA_FEATURE_KEY = 'cervejas';

export interface CervejaState extends EntityState<Cerveja> {
    selectedId?: string | number;
    loaded: boolean;
    error?: string | null;
};

export interface CervejaPartialState {
    readonly [CERVEJA_FEATURE_KEY]: CervejaState
};

export const cervejaAdapter: EntityAdapter<Cerveja> = createEntityAdapter<Cerveja>();

export const initialCervejaState: CervejaState = cervejaAdapter.getInitialState(
    {
        loaded: false
    }
);

const onFailed = (state, { error }): CervejaState => ({ ...state, error});

const onDispatch = (state, action): CervejaState => ({
    ...state,
    loaded: false,
    error: null
});

const _cervejaReducer = createReducer(
    initialCervejaState,
    on(
        CervejaActions.loadCervejaFailed,
        CervejaActions.loadCervejasFailed,
        CervejaActions.createCervejaFailed,
        CervejaActions.updateCervejaFailed,
        CervejaActions.deleteCervejaFailed,
        onFailed
    ),
    on(
        CervejaActions.loadCerveja,
        CervejaActions.loadCervejas,
        CervejaActions.createCerveja,
        CervejaActions.updateCerveja,
        CervejaActions.deleteCerveja,
        onDispatch
    ),
    on(
        CervejaActions.loadCervejaSuccess, (state, { cerveja }) =>
        cervejaAdapter.upsertOne(cerveja, {...state, loaded: true})
    ),
    on(
        CervejaActions.selectCerveja, (state, { cervejaId }) => ({
            ...state,
            selectedId: cervejaId
        })
    ),
    on(
        CervejaActions.loadCervejasSuccess, (state, { cervejas }) =>
        cervejaAdapter.setAll(cervejas, {...state, loaded: true})
    ),
    on(
        CervejaActions.deleteCervejaSuccess, (state, { cerveja }) =>
        cervejaAdapter.removeOne(cerveja.id, {...state, loaded: true})
    ),
    on(
        CervejaActions.updateCervejaSuccess, (state, { cerveja }) =>
        cervejaAdapter.updateOne(
            {id: cerveja.id, changes: cerveja},
            {...state, loaded: true}
        )
    ),
    on(
        CervejaActions.createCervejaSuccess, (state, {cerveja }) =>
        cervejaAdapter.addOne(cerveja, {...state, loaded: true})
    ),
)

export function cervejaReducer(
    state: CervejaState | undefined,
    action: Action
) {
    return _cervejaReducer(state, action)
}