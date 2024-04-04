/*
Reducer
----
  * is function that must take in two params (state, action)
  * this fn must return state
  * we will never execute this fn directly
  * This fn can be executed ONLY by dispatching an action from component
 
*/

import { ITodo } from "../models/TodoTypes";

// We identify the possible action types for TODO app
type Action =
  | { type: "GET_TODOS"; payload: ITodo[] }
  | { type: "ADD_TODO"; payload: ITodo };

function todoReducer(state: ITodo[], action: Action): ITodo[] {
  // based on the action type this must return state
  switch(action.type){
    case "GET_TODOS":
        return action.payload;
    case "ADD_TODO":
        return [...state, action.payload];
    default:
        return state;
  }
}

export default todoReducer;
