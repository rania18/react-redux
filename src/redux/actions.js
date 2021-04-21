import { ADD_TODO, DELETE_TODO, DONE_TODO, UPDATE_TODO } from "./typeAction";

export function addTodo(todo){
    return{
        type: ADD_TODO,
        payload: todo,
    }
}
export function deleteTodo(todoId){
    return{
        type: DELETE_TODO,
        payload: todoId,
    }
}
export function updateTodo(todo){
    return{
        type: UPDATE_TODO,
        payload: todo,
    }
}
export function doneTodo(id){
    return{
        type: DONE_TODO,
        payload: id,
    }
}