import { useState } from "react";
import { useSelector } from "react-redux";

export const Add=()=>
{
    const [value,setValue] = useState(true);
    const message=useSelector((state)=>state.message);
    
    document.getElementById('para').innerHTML=message;

    const remove=()=>
    {
        setValue(false);
    }

    return(
        <div>
            {value?
            <><p id="para"></p><button id='btn' onClick={remove}>DELETE</button></>
            : <div/>}
        </div>
    );
}