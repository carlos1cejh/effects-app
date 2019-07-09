import { Component, OnInit, OnDestroy } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as fromActions from '../../store/actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit, OnDestroy {

  usuarios: Usuario[] = [];
  loading: boolean;
  error: any;
  subscription: Subscription = new Subscription();

  constructor( private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new fromActions.CargarUsuariosActions());

    this.subscription = this.store.select('usuarios').subscribe (usuarios => {
      this.usuarios = usuarios.users;
      this.loading = usuarios.loading;
      this.error = usuarios.error;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
