import React from "react";
import { useNavigate,useParams } from "react-router-dom";

export const Profile=()=>
{
    let navigate=useNavigate();
    let {username,userId}=useParams();
    return(
        <div>
            <h1>this profile is of {username}</h1><h1>ID:{userId}</h1>
            <button onClick={()=>{navigate('/ElectronicsPage')}}>Return to Electronics</button>
        </div>
    );
}