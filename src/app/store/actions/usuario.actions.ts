import { Action } from '@ngrx/store';
import { Usuario } from '../../models/usuario.model';

export const CARGAR_USUARIO = '[Usuario] Cargar usuario';
export const CARGAR_USUARIO_FAIL = '[Usuario] Cargar usuario FAIL';
export const CARGAR_USUARIO_SUCCESS = '[Usuario] Cargar usuario SUCCESS';

export class CargarUsuarioAction implements Action {
  readonly type = CARGAR_USUARIO;
  constructor( public payload: string) {}
}

export class CargarUsuarioFailAction implements Action {
  readonly type = CARGAR_USUARIO_FAIL;
  constructor( public payload: any) {}
}

export class CargarUsuarioSuccessAction implements Action {
  readonly type = CARGAR_USUARIO_SUCCESS;
  constructor( public payload: Usuario) {}
}

export type UsuarioActions =   CargarUsuarioAction
                             | CargarUsuarioFailAction
                             | CargarUsuarioSuccessAction;
