import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { filter, todos } from './redux/State';
import Todoinput from './components/Todoinput';
import Todolist from './components/Todolist';
import { useSelector } from "react-redux";

function App() {
  const todos = useSelector(state => state.todos)
  const filter = useSelector(state => state.filter)
  return (
    <div className="App my-4">
        <Todoinput/>

    

        <Todolist todos={filter===null? todos:todos.filter(todo=>todo.done===filter)} ></Todolist>
    </div>
  );
}

export default App;
