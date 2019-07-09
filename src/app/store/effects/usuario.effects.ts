import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';

import * as fromActions from '../actions';
import { UsuarioService } from 'src/app/services/usuario.service';



@Injectable()
export class UsuarioEffects {

  constructor(
    private actions$: Actions,
    private usuariosService: UsuarioService
  ) {}


  cargarUsuario$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.CARGAR_USUARIO),
    switchMap( ( action: fromActions.CargarUsuarioAction ) => {
      return this.usuariosService.getUser(action.payload)
              .pipe(
                map(user => new fromActions.CargarUsuarioSuccessAction(user)),
                catchError(error => of(new fromActions.CargarUsuarioFailAction(error)))
              );
    })
  ));

  // cargarUsuario2$ = createEffect( () => {
  //   return this.actions$.pipe(
  //     ofType(fromActions.CARGAR_USUARIO),
  //     switchMap( ( action: fromActions.CargarUsuarioAction ) => {
  //       return this.usuariosService.getUser(action.payload)
  //               .pipe(
  //                 map(user => {
  //                   return new fromActions.CargarUsuarioSuccessAction(user)
  //                 }),
  //                 catchError(error => {
  //                   return of(new fromActions.CargarUsuarioFailAction(error))
  //                 })
  //               );
  //     })
  //   )
  // });



}
