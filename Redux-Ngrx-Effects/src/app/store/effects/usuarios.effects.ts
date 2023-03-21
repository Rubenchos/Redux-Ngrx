import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as usuariosActions from '../actions/usuarios.actions';
import { tap, mergeMap, map, catchError } from 'rxjs/operators';
import { UsuarioService } from '../../services/usuario.service';
import { of } from 'rxjs';



@Injectable()
export class UsuariosEffects {

    constructor(
        private actions$: Actions,
        private usuarioService: UsuarioService
    ){}


    cargarUsuarios$ = createEffect(
        () => this.actions$.pipe(
            ofType( usuariosActions.cargarUsuarios ),// comando(ofType) de ngrx para decir a que action esta asociado el effect
            mergeMap( // operador de rxjs para unir dos observable
                () => this.usuarioService.getUsers() // servicio o endpoint a consultar
                    .pipe(
                        map( users => usuariosActions.cargarUsuariosSuccess({ usuarios: users }) ), // operador map necesario ya que los effect deben retornar un action que es un observable
                        catchError( err => of(usuariosActions.cargarUsuariosError({ payload: err })) ) // of necesario para devolver un observable
                    )
            )
        )
    );

}