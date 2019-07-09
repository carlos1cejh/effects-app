import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as fromActions from '../../store/actions';
import { Usuario } from 'src/app/models/usuario.model';
import { Subscription } from 'rxjs';
import * as fromSelectors from '../../store/Selectors';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit, OnDestroy {

  usuario: Usuario;
  error: any;
  loading: boolean;
  subscription: Subscription = new Subscription();

  constructor(  private router: ActivatedRoute,
                private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.router.params
    .subscribe( params => {
      const id = params.id;
      this.store.dispatch(new fromActions.CargarUsuarioAction(id));
    });

    // this.subscription = this.store.select('usuario').subscribe( usuario => {
    //   this.usuario = usuario.user;
    //   this.error = usuario.error;
    //   this.loading = usuario.loading;
    // });

    this.subscription = this.store.select(fromSelectors.selectGetUsuario).subscribe( usuario => {
      this.usuario = usuario;
    });

    this.subscription = this.store.select(fromSelectors.selectUsuarioError).subscribe( error => {
      this.error = error;
    });

    this.subscription = this.store.select(fromSelectors.selectUsuarioLoading).subscribe( loading => {
      this.loading = loading;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
