import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const Login=()=>
{
const navigate = useNavigate();
const logFunction=()=>
{
    localStorage.setItem('value',true);
    navigate('/');
}
    useEffect(()=>
    {
        let value = localStorage.getItem('value');
        if(value === "true")
        {
            navigate('/');
        }
    })

    return(
        <div>
            <input type="text"></input><br/><br/>
            <button onClick={logFunction}>Login</button>
        </div>
    );
}