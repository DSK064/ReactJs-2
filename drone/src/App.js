import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { Aboutus } from './pages/Aboutus';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <nav id="navBar">
          <h1 id='title'>Drone dynamics</h1>
          <div id="btn-div">
          <button className='btn'><Link to='/' >Home</Link></button>
          <button className='btn'><Link to='/Aboutus'>Aboutus</Link></button>
          </div>
          
        </nav>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Aboutus' element={<Aboutus/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
