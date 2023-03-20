import { Action, createReducer, on } from "@ngrx/store";
import { filterAction, validFilters } from "./filter.actions";

export const initialState: validFilters = 'todos';

export const filterReducer = createReducer<validFilters, Action>(
    initialState,
    on(filterAction, (state, { setFilter }) => setFilter),
);
