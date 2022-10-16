import { Routes, Route, Link} from "react-router-dom";
import { Products } from "./Pages/Products";
import { Statistics } from "./Pages/Statistics";
import { Clients } from "./Pages/Clients";
import { Revenue } from "./Pages/Revenue";
import { Login } from "./LoginPage";
import {TbLogout} from 'react-icons/tb'
import {AiFillShopping} from 'react-icons/ai'
import {FcStatistics} from 'react-icons/fc'
import {GiReceiveMoney} from 'react-icons/gi'
import {FaPeopleArrows} from 'react-icons/fa'



export const NavBar=()=>
{
    return(
        <div>
            <div id='navbar'>
                <h2 id='dashboard'>Dashboard</h2>
            <nav>
                <button id='navbar-btn1'><Link to='/Products'><AiFillShopping/></Link></button>
                <button id='navbar-btn2'><Link to='/statistics'><FcStatistics/></Link></button>
                <button id='navbar-btn3'><Link to='/Revenue'><GiReceiveMoney/></Link></button>
                <button id='navbar-btn4'><Link to='/Clients'><FaPeopleArrows/></Link></button>
                <button id='navbar-btn5'><Link to='/Login'><TbLogout/></Link></button>
            </nav>
            </div>
            <Routes>
                <Route path="/Products" element={<Products/>}></Route>
                <Route path='/Statistics' element={<Statistics/>}></Route>
                <Route path='/Revenue' element={<Revenue/>}></Route>
                <Route path='/Clients' element={<Clients/>}></Route>
                <Route path='/Login' element={<Login/>}></Route>
            </Routes>
        </div>
        
        
            
    );
}