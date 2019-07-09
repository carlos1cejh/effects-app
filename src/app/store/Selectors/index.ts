import { createSelector } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { UsuarioState, UsuariosState } from '../reducers';

// ---------------------------------------------------
// Usuarios

export const selectFeatureUsuarios = (state: AppState) => state.usuarios;

export const selectGetUsuarios = createSelector(
  selectFeatureUsuarios,
  (state: UsuariosState) => state.users
);

export const selectUsuariosError = createSelector(
  selectFeatureUsuarios,
  (state: UsuariosState) => state.error
);

export const selectUsuariosLoading = createSelector(
  selectFeatureUsuarios,
  (state: UsuariosState) => state.loading
);



// ---------------------------------------------------
// Usuario

export const selectFeatureUsuario = (state: AppState) => state.usuario;

export const selectGetUsuario = createSelector(
  selectFeatureUsuario,
  (state: UsuarioState) => state.user
);

export const selectUsuarioError = createSelector(
  selectFeatureUsuario,
  (state: UsuarioState) => state.error
);

export const selectUsuarioLoading = createSelector(
  selectFeatureUsuario,
  (state: UsuarioState) => state.loading
);



