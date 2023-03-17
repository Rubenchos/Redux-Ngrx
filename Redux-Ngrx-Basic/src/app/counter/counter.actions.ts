import { createAction, props } from '@ngrx/store'

export const increase = createAction('[Counter] increase');
export const decrease = createAction('[Counter] decrease');
export const multiplication = createAction(
    '[Counter] multiplication',
    props<{ numero: number }>()
);
export const division = createAction('[Counter] division',
    props<{ numero: number }>());
export const reset = createAction('[Counter] reset');