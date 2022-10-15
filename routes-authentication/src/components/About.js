import { useNavigate } from "react-router-dom";

export const About=()=>
{
    const navigate = useNavigate();
    const logout=()=>
    {
        localStorage.clear();
        navigate('./Login');
    }
    return(
        <div>
            <h1>About page</h1>
            <br/><br/>
            <button onClick={logout}>Log out</button>
        </div>
    );
}