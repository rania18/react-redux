import { ADD_TODO, UPDATE_TODO, DELETE_TODO,DONE_TODO } from './typeAction';
import { todos } from './states';

export let reducer = (state = todos, action)=>{
    let newTodos;
    switch (action.type) {
        case ADD_TODO:
            newTodos = [...state];
            newTodos.push(action.payload);
            return newTodos;
        case DELETE_TODO:
            newTodos = [...state];
            newTodos = newTodos.filter(todo => todo.id != action.payload);
            return newTodos;
        case DONE_TODO:
            return state.map(el=>{
                if (el.id===action.payload){
                el.done=!el.done
                }
                return el
            })            
        case UPDATE_TODO:
            newTodos = [...state];
            let index = -1;
            for (let i = 0; i < newTodos.length; i++) {
                index++;
                if (newTodos[i].id == action.payload.id) {
                    break;
                }

            }
            if (index != -1) {
                newTodos[index] = action.payload;
                return newTodos;
            }

    }
    return state;
}