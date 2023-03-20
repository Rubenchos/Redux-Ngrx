import { createAction, props } from "@ngrx/store";

export const createToDo = createAction('[TODO] createTodo',
    props<{ text: string }>()
);

export const isTodoCompleted = createAction('TODO isTodoCompleted',
    props<{ id: number }>()
);

export const editToDo = createAction('TODO editToDo',
    props<{ id: number, text: string }>()
);

export const deleteToDo = createAction('TODO deleteToDo',
    props<{ id: number }>()
);

export const changeAllToDo = createAction('TODO changeAllToDo',
    props<{ changeValue : boolean }>()
);

export const clearCompleteAction = createAction('[Filter] Clear completed task');