import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';

import * as fromActions from '../actions';
import { UsuarioService } from 'src/app/services/usuario.service';

// import { MoviesService } from './movies.service';


@Injectable()
export class UsuariosEffects {

  constructor(
    private actions$: Actions,
    private usuariosService: UsuarioService
  ) {}



  cargarUsuarios$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.CARGAR_USUARIOS),
    switchMap(() => this.usuariosService.getUsers()
      .pipe(
        map(users => new fromActions.CargarUsuariosSuccessActions(users)),
        catchError(error => of(new fromActions.CargarUsuariosFailActions(error)))
      ))
    )
  );


}
