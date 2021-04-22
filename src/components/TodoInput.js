import { addTodo,  filtertodo} from '../redux/Action'
import {v4 as uuid} from 'uuid'
import {useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import button, { Button } from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css';

const Todoinput = () => {
  const filter = useSelector(state => state.filter)
    const [name, setName] = useState();
    let  dispatch = useDispatch();
    return (
        <div>
      <div className='row m-2'>
          
          <input
           value={name}
           onChange={(e)=>setName(e.target.value)}
           type="text" className="col form-control"/>
          <button
             onClick={()=>{
                 dispatch(addTodo(
                    {
                        id:uuid(),
                        name:name,
                        done:false
                   }       
        ));      
    setName('');
}}
            className="btn btn-primary mx-2">Add</button>
              

            <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown button
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item"  onClick={()=>dispatch( filtertodo(null))} >ALL</a>
              <a class="dropdown-item" onClick={()=>dispatch( filtertodo(false))} >UNDONE</a>
              <a class="dropdown-item" onClick={()=>dispatch( filtertodo(true))} >DONE</a>
            </div>
          </div>
             
      </div>
        </div>
    )
}

export default Todoinput
