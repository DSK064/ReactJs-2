import profile from './facebook-profile.jpg'
import { useNavigate } from "react-router-dom";

const Page2=()=>
{
    const navigate = useNavigate();
    const logout=()=>
    {
        localStorage.clear();
        navigate('/Login');
    }
    return(
        <div>
            <img id='pic2' src={profile} alt=''></img>
            <button id='btn7' onClick={logout}>Logout</button>
        </div>
    );
}

export default Page2;