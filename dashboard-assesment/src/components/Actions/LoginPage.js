import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login, logout} from "./Reducers/LoginHandler";
import { useEffect } from "react";
export const Login=()=>
{
    const value = useSelector((state)=>state.value);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const log=()=>
    {
        dispatch(login());
        navigate('/Products')
    }
    useEffect(()=>
    {
        navigate('/');
        dispatch(logout())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return(
        <div id="login-page">
            <h1 id='title'>Technocrats pvt ltd</h1>
            <div id="login-main">
                <h1>*CEO Login*</h1><br/>
                <h2>Hello Mr. Anuj Bajaj</h2>
                <h3>Please Login</h3>
                <input className="login-input" type="text" placeholder="username"></input><br/><br/>
                <input className="login-input" type="password" placeholder="password"></input><br/><br/><br/>
                <button id="login-btn" onClick={log}>Login</button>
                {console.log(value)}
            </div>
        </div>
    );
}