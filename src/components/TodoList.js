import React from 'react'
import Todoitem from './Todoitem'
import { useSelector } from "react-redux";


const Todolist = ({todos}) => {
  
    //console.log(todos.todos)
    //const filter = useSelector(state => state.filter)
    return (
        <div className="my-3">
              {todos.map(todo=>{
                 return <Todoitem key={todo.id} todo={todo}/>
             })} 
            
        </div>
    )
}

export default Todolist
