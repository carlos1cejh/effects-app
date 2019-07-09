import { Action } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';


export const CARGAR_USUARIOS = '[Usuarios] Cargar usuarios';
export const CARGAR_USUARIOS_FAIL = '[Usuarios] Cargar usuarios FAIL';
export const CARGAR_USUARIOS_SUCCESS = '[Usuarios] Cargar usuarios SUCCESS';

export class CargarUsuariosActions implements Action {
  readonly type = CARGAR_USUARIOS;
}

export class CargarUsuariosFailActions implements Action {
  readonly type = CARGAR_USUARIOS_FAIL;
  constructor( public payload: any ) {}
}

export class CargarUsuariosSuccessActions implements Action {
  readonly type = CARGAR_USUARIOS_SUCCESS;
  constructor( public payload: any ) {}
}

export type usuariosAcciones =   CargarUsuariosActions
                               | CargarUsuariosFailActions
                               | CargarUsuariosSuccessActions;
