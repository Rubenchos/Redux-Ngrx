import { createReducer, on } from '@ngrx/store';
import * as actions from './to-do.actions';
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [
    new Todo('Save the world'),
    new Todo('get power stone'),
    new Todo('get soul stone')
];

export const todoReducer = createReducer(
    initialState,
    on(actions.createToDo, (state, { text }) => [...state, new Todo(text)]),
    on(actions.isTodoCompleted, (state, { id }) => {
        return state.map(itemTodo => {
            if (itemTodo.id === id) {
                return {
                    ...itemTodo,
                    isCompleted: !itemTodo.isCompleted
                }
            }
            else {
                return itemTodo;
            }
        })
    }),
    on(actions.editToDo, (state, { id, text }) => {
        return state.map(itemTodo => {
            if (itemTodo.id === id) {
                return {
                    ...itemTodo,
                    text
                }
            }
            else {
                return itemTodo;
            }
        })
    }),
    on(actions.deleteToDo, (state, { id }) => {
        return state.filter(itemTodo => itemTodo.id !== id)
    }),
    on(actions.changeAllToDo, (state, { changeValue }) => {
        return state.map(itemTodo => {
            return {
                ...itemTodo,
                isCompleted: changeValue
            }
        })
    }),
    on(actions.clearCompleteAction, (state) => {
        return state.filter(itemTodo => !itemTodo.isCompleted)
    })
);