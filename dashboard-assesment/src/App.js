import './App.css';
import {Login} from './components/Actions/LoginPage.js'
import {useSelector} from 'react-redux';
import {NavBar} from './components/Actions/NavBar'
function App() {
  const value = useSelector((state)=>state.value);
  return (
    <div className="App">
      {value? <NavBar/> : <Login/>}
    </div>
  );
}

export default App;
