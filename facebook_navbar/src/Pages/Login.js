import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const Login=(props)=>
{
    const navigate = useNavigate();
    
    const login=()=>
    {
        localStorage.setItem('login',true);
        navigate('/');

    }
    useEffect(()=>
    {
        let login = localStorage.getItem('login');
        if(login)
        {
            navigate('/')
        }
    });
    

    return(
        <div>
            <input type="text"></input>
            <button onClick={login}>Login</button>
            
        </div>
    );

}

export default Login;