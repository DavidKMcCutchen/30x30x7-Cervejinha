import { Injectable } from "@angular/core";
import { Cerveja } from "@cerveja/api-interfaces";
import { Action, ActionsSubject, select, Store } from "@ngrx/store";
import { map, filter } from "rxjs/operators";
import * as CervejaActions from './cerveja.actions';
import * as CervejaSelectors from './cerveja.selectors';
import * as fromCervejas from './cerveja.reducer';


@Injectable({
    providedIn: 'root'
})

export class CervejaFacade {
    allCervejas$ = this.store.pipe(
        map((state) => CervejaSelectors.getAllCervejas(state)),
    )
    selectedCervejas$ = this.store.pipe(select(CervejaSelectors.getSelectedCerveja));
    loaded$ = this.store.pipe(select(CervejaSelectors.getCervejasLoaded));

    mutations$ = this.actions$.pipe(
        filter((action: Action) =>
        action.type === CervejaActions.createCerveja({} as any) .type ||
        action.type === CervejaActions.updateCerveja({} as any) .type ||
        action.type === CervejaActions.deleteCerveja({} as any) .type
        ))

        selectCerveja(cervejaId: string) {
            this.dispatch(CervejaActions.selectCerveja({ cervejaId }));
        };

        loadCervejas() {
            this.dispatch(CervejaActions.loadCervejas())
        };

        loadCerveja(cervejaId: string) {
            this.dispatch(CervejaActions.loadCerveja({ cervejaId }))
        };

        saveCerveja(cerveja: Cerveja) {
            cerveja.id ? this.updateCerveja(cerveja) : this.createCerveja(cerveja)
        };

        createCerveja(cerveja: Cerveja) {
            this.dispatch(CervejaActions.createCerveja({ cerveja }))
        };

        updateCerveja(cerveja: Cerveja) {
            this.dispatch(CervejaActions.updateCerveja({ cerveja }))
        };

        deleteCerveja(cerveja: Cerveja) {
            this.dispatch(CervejaActions.deleteCerveja({ cerveja }))
        };

        dispatch(action: Action) {
            this.store.dispatch(action)
        };

        constructor(
            private store: Store<fromCervejas.CervejaPartialState>,
            private actions$: ActionsSubject
        ) {}
}