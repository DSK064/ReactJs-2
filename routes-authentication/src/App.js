import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {Home} from './components/Home';
import {About} from './components/About';
import {Login} from './components/Login';
import Protected from './components/Protected'

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <nav>
      <Link to="/" >Home</Link>
      <Link to="/AboutUs">About us</Link>
      <Link to="/Login">profile</Link>
      </nav>
      <Routes>
      <Route path="/" element={<Protected Component = {Home} />}/>
      <Route path="/AboutUs" element={<Protected Component = {About} />}/>
      <Route path="/Login" element={<Login/>}/>
     </Routes>
  </Router>
    </div>
  );
}

export default App;
