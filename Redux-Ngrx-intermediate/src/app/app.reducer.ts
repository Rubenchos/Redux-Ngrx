//this reducer is to know the state of the application

import { ActionReducerMap } from "@ngrx/store"
import { Todo } from "./to-Dos/models/todo.model"
import { todoReducer } from "./to-Dos/to-do.reducer"
import { filterReducer } from "./filter/filter.reducer"
import { validFilters } from "./filter/filter.actions"

export interface AppState {
    todos: Todo[],    
    filter: validFilters
}

// space for all reducers

export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filter: filterReducer
}