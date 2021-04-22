import {
  ADD_TODO,
  DELATE_TODO,
  UPDATE_TODO,
  DONE_TODO,
  FILTER_TODO,
} from "./Action";

import { initState } from "./State";

export const reducer = (state = initState, action) => {
  let newTodos;
  switch (action.type) {
    case ADD_TODO:
      newTodos = [...state.todos];
      newTodos.push(action.payload);
      return {...state,todos:newTodos};
    case DONE_TODO:
      return {...state,todos:state.todos.map((el) => {
        if (el.id === action.payload) {
          el.done = !el.done;
        }
        return el;
      })
      };

    case DELATE_TODO:
      newTodos = [...state.todos];
      newTodos = newTodos.filter((todo) => todo.id !== action.payload);
      return  {...state,todos:newTodos};
    case UPDATE_TODO:
      newTodos = [...state.todos];
      return {...state,todos:state.todos.map((el) => {
        if (el.id === action.payload.id) {
          return action.payload
        }
        return el;
      })
      };

      // let index = -1;
      // for (let i = 0; i < newTodos.length; i++) {
      //   index++;
      //   if (newTodos[i].id === action.payload.id) {
      //     break;
      //   }
      // }
      // if (index !== -1) {
      //   newTodos[index] = action.payload;
      //   return newTodos;
      // }
    case FILTER_TODO:
      return {
        ...state,
        filter: action.payload,
      };
  }

  return state;
};
