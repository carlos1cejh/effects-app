import { Usuario } from 'src/app/models/usuario.model';
import * as fromActions from '../actions';

export interface UsuarioState {
  user: Usuario;
  loaded: boolean;
  loading: boolean;
  error: any;
}

const estadoInicial: UsuarioState = {
  user: null,
  loaded: false,
  loading: false,
  error: null
}

export function usuarioReducer( state = estadoInicial, action: fromActions.UsuarioActions ): UsuarioState {

  switch ( action.type ) {

    case fromActions.CARGAR_USUARIO:
      return {
        ...state,
        loaded: false,
        loading: true,
        error: null,
        user: null
      };

    case fromActions.CARGAR_USUARIO_FAIL:
      return {
        ...state,
        loading: false,
        loaded: true,
        error: {
          status: action.payload.status,
          message: action.payload.message,
          url: action.payload.url
        },
        user: null
      };

    case fromActions.CARGAR_USUARIO_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        user: {...action.payload}
      };

    default:
      return state;
  }
}
