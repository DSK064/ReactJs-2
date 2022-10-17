import { useNavigate } from "react-router-dom";
const SignUp=()=>
{
    const navigate = useNavigate();
    const signUp=()=>
    {
        localStorage.setItem('login',true)
        navigate('/');
    }
    return(
        <>
        <h1>Sign up Page</h1>
        <button onClick={signUp}>signUp</button>
        </>
    );
}

export default SignUp;