export const ADD_TODO = "ADD_TODO"
export const DELATE_TODO = "DETALE_TODO"
export const UPDATE_TODO = "UPDATE_TODO"
export const DONE_TODO="DONE_TODO"
export const FILTER_TODO="FILTER_TODO"


export const filtertodo=(filtervalue)=>{
    return{
        type:FILTER_TODO,
        payload:filtervalue,
    }
}


export const addTodo = (todo) => {
    return{ 
       type: ADD_TODO,
       payload:todo,
    }
}

export const delatetodo = (todoId) => {
    return {
       type: DELATE_TODO,
       payload:todoId ,
    }
}


export const updateTodo = (todo) => {
    return {
        type: UPDATE_TODO,
       payload:todo ,
    }
}
export const donetodo =(id)=>{
    return {
        type:DONE_TODO,
        payload:id,
    }

}
