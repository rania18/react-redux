import React from 'react'
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo,doneTodo } from '../redux/actions';
import {useState} from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

function TodoItem({todo}) {
    const [editable, setEditable] = useState()
    const [name, setName] = useState(todo.name)
    
    let  dispatch = useDispatch();
    return (
        <div className="row mx-2 align-items-center">
        
                <div>#{todo.id.length > 1 ? todo.id[2] : todo.id}</div>

                <div className="col">
                    {editable ? <input type="text" className="from-control"
                     value={name}
                     
                     onChange={
                        (e)=>setName(e.target.value)
                     }                    
                    />: <h4   style={{textDecoration: todo.done? "line-through":"none"}}>{todo.name}</h4>} 
                </div>
                <button 
                
                onClick={()=>{
                    dispatch(updateTodo(
                        {
                            ...todo,
                            name:name,
                        }
                    ));
                     if (editable){
                        setName(todo.name);
                    }
                    
                  setEditable(!editable)
                }}
                 className="btn btn-primary m-2"
                > {editable?"upadate" : "edit"}</button>
        

<Button
                onClick={()=>dispatch(deleteTodo(todo.id))}
        variant="contained"
        color="secondary"
      startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
      <button
      className="btn btn-dark m-2"
      
      onClick={()=>dispatch (doneTodo(todo.id))}>{todo.done?"undone":"done"}</button>

                
            
        </div>
    )
}

export default TodoItem
