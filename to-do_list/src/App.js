import './App.css';
import { Add } from './components/Add';
import {add} from './components/ToDoReducer'
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const display=()=>
  {
    dispatch(add());
    
    <Add/>
  }
  return (
    <div className="App">
      <input id='input' type='text' placeholder='add your task'></input>
      <button id='add-btn' onClick={display} >ADD</button>
    </div>
  );
}

export default App;
