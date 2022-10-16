import { useState } from "react";

export const Clients=()=>
{
    const [clients,setClients] = useState([])
    const getClients=()=>
    {
        fetch('https://jsonplaceholder.typicode.com/todos/')
  .then(response => response.json())
  .then(json =>{setClients(json)});
    }
    return(
        <div id='clients1'>
            <div className="middle">
            <h3> Please click below for Clients details..</h3>
            <button id='client-btn' onClick={getClients}>Show Clients</button>
            </div>
            
            <div >
                <ul>{clients.map(item=>
                
                 <h3>{"Client Id: "+item.id+",  Name: "+item.title}</h3>
                )}
                </ul>
            </div>
        </div>
    );
}