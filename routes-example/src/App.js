import {BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom';
import  Home from './Pages/Home';
import BackeryPage from './Pages/BackeryPage';
import  ElectronicsPage  from './Pages/ElectronicsPage';
import PageNotFound from './Pages/PageNotFound';
import './App.css';
import { Profile } from './Pages/Profile';

function App() {
  return (
    <div id="app">
      <Router>
      <nav id='navBar'>
      <button className='bar'><Link  to="/">Home</Link></button>
      <button className='bar'><Link  to="/BackeryPage">BackeryPage</Link></button>
      <button className='bar'><Link  to="/ElectronicsPage">ElectronicsPage</Link></button>
      <button className='bar'><Link  to="/Profile">Profile</Link></button>
    </nav>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/ElectronicsPage' element={<ElectronicsPage/>}></Route>
        <Route path='/BackeryPage'element={<BackeryPage/>}></Route>
        
        <Route path='/Profile' element={<Profile/>}></Route>
        <Route path='/Profile/:username/:userId' element={<Profile/>}></Route>
        <Route path='*' element={<PageNotFound/>}></Route>
        
      </Routes>
    </Router>
    </div>
    
  );
}

export default App;
