import { Action, createReducer, on } from "@ngrx/store";
import { decrease, division, increase, multiplication, reset } from "./counter.actions";


// Reference how to works an reducer manually 
// export function counterReducer(state: number = 10, action: Action) {
//     switch (action.type) {
//         case increase.type:
//             return state + 1;
//         case decrease.type:
//             return state - 1;
//         default:
//             return state;
//     }
// }

// How works the reducer by NGRX
export const initialState = 20;

export const counterReducer = createReducer(
    initialState,
    on(increase, (state) => state + 1),
    on(decrease, (state) => state - 1),
    on(multiplication, (state, props) => state * props.numero),
    on(division, (state, { numero }) => state / numero),
    on(reset, state => state = 0),
);