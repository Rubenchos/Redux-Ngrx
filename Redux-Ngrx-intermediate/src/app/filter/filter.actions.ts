import { createAction, props } from "@ngrx/store";

export type validFilters = 'todos' | 'completados' | 'pendientes';

export const filterAction = createAction('[Filter] Set Filter',
    props<{ setFilter: validFilters }>()
);

