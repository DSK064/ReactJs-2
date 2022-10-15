const val = 5
let init = window.prompt("enter the initial value")
const countReducer=(state=init,action)=>
{
    
    switch(action.type)
    {
        case "INCREASE":
             return state+val;
        case "DECREASE":
             return state-val;
        default: return state;
    }
}

export default countReducer;