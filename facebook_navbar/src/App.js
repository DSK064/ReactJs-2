import './App.css';
import {Routes, Route,Link} from 'react-router-dom';
import Page1 from './Pages/Page1';
import Page2 from './Pages/page2';
import Page3 from './Pages/Page3';
import Page4 from './Pages/Page4';


import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Protected from './Pages/Protected';

function App() {
  return (
    <div className="App">
      <div id='navBar'>
        <img id='logo' src={logo} alt=''></img>
        <input type='text' id='search' placeholder='search'></input>
        <nav id='navBar'>
          
          <button id='btn1'><Link to="/">Home</Link></button>
          <button id='btn2'><Link to="/Page4">shop</Link></button>
          <button id='btn3'><Link to="/Page3">Video</Link></button>
          <button id='btn4'><Link to="/page2">profile</Link></button>
          <button id='btn5'><Link to='/Login'>Login</Link></button>
          <button id='btn6'><Link to='/SignUp'>Signup</Link></button>
          
        </nav>
      </div>
      <br></br>
      <br></br>
      <Routes>
        
          <Route path='/' element={<Protected Component={Page1}/>}></Route>
          <Route path='/Page2' element={<Protected Component={Page2}/>}></Route>
          <Route path='/Page3' element={<Protected Component={Page3}/>}></Route>
          <Route path='/Page4' element={<Protected Component={Page4}/>}></Route>
          <Route path='/Login' element={<Login/>}></Route>
          <Route path='/Signup' element={<SignUp/>}></Route>
          
        </Routes>
      {/* <div id='footerBackground'>
      <p id='footer'>
        Copyright © 2022 . All rights reserved.
      </p>
      </div> */}
      
    </div>
  );
}

export default App;
