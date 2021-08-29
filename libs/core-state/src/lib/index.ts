import { ActionReducerMap } from "@ngrx/store";
import * as fromCervejas from './cerveja/cerveja.reducer';

export interface AppState {
    [fromCervejas.CERVEJA_FEATURE_KEY]: fromCervejas.CervejaState
};

export const reducers: ActionReducerMap<AppState> = {
    [fromCervejas.CERVEJA_FEATURE_KEY]: fromCervejas.cervejaReducer
};