import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { Cerveja } from "@cerveja/api-interfaces";
import { CervejasService } from "@cerveja/core-data";
import * as CervejaActions from './cerveja.actions';
import { map } from "rxjs/operators";
import { fetch, pessimisticUpdate } from "@nrwl/angular";

@Injectable()
export class CervejaEffects{
    loadCerveja$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CervejaActions.loadCerveja),
            fetch({
                run: (action) =>
                    this.cervejasService
                        .find(action.cervejaId)
                        .pipe(map((cerveja: Cerveja) => CervejaActions.loadCervejaSuccess({ cerveja }))),
                    onError: (action, error) => CervejaActions.loadCervejaFailed({ error })    
            })
        ));
    loadCervejas$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CervejaActions.loadCervejas),
            fetch({
                run: () =>
                    this.cervejasService
                    .all()
                    .pipe(
                        map((cervejas: Cerveja[]) => CervejaActions.loadCervejasSuccess({ cervejas }))
                    ),
                onError: (action, error) => CervejaActions.loadCervejasFailed({ error })    
            })
        ));
        createCerveja$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CervejaActions.createCerveja),
            pessimisticUpdate({
                run: (action) =>
                    this.cervejasService
                        .create(action.cerveja)
                        .pipe(map((cerveja: Cerveja) => CervejaActions.createCervejaSuccess({ cerveja }))),
                    onError: (action, error) => CervejaActions.createCervejaFailed({ error })    
            })
    ));

    updateCerveja$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CervejaActions.updateCerveja),
            pessimisticUpdate({
                run: (action) =>
                    this.cervejasService
                        .update(action.cerveja)
                        .pipe(map((cerveja: Cerveja) => CervejaActions.updateCervejaSuccess({ cerveja}))),
                    onError: (action, error) => CervejaActions.updateCervejaFailed({ error })    
            })
    ));

    deleteCerveja$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CervejaActions.deleteCerveja),
            pessimisticUpdate({
                run: (action) =>
                    this.cervejasService
                        .delete(action.cerveja)
                        .pipe(
                            map(() => CervejaActions.deleteCervejaSuccess({ cerveja: action.cerveja }))
                        ),
                    onError: (action, error) => CervejaActions.deleteCervejaFailed({ error })
            })
        ));


    constructor(
        private actions$: Actions,
        private cervejasService: CervejasService
    ) {}
}