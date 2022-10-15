import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement,increment } from './Actions/counter';
import { signIn,signOut } from './Actions/Signin';


function App() {

const  counter=useSelector((state)=>state.counter);
  const sign1 = useSelector((state)=>state.sign);
const dispatch = useDispatch();

const inc=()=>
{
  dispatch(increment());
}
const dec=()=>
{
  dispatch(decrement());
}

const signOn=()=>
{
  dispatch(signIn());
}

const signOff=()=>
{
  dispatch(signOut());
}


  return (
    <div className="App">
      <h1>Redux counter</h1>
      <input id="num" placeholder="enter number"></input>
      <h3>counter: {counter}</h3>
      <button onClick={inc}>Increase</button>
      <button onClick={dec}>Decrease</button><br></br>
      <h3>{sign1}</h3>
      <button onClick={signOn}>Signin</button>
      <button onClick={signOff}>Signout</button>
    </div>
  );
}

export default App;
