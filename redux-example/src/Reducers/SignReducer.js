const signReducer=(state = "please login", action)=>
{
    switch(action.type)
    {
        case "SIGNIN":
            state = "signed-in"
            return (state);
        case "SIGNOUT":
            state = "signed-out"
            return (state);
        default: return(state);
    }
}

export default signReducer;