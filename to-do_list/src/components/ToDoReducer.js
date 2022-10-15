export const ToDo=(state = false,action)=>
{
    switch(action.type)
    {
        case "ADD":
             state=true;
             return state;
        case "DELETE":
            state= false;
            return state;
        default: return state;
    }
}