import loginReducer from "./LoginReducer";
import { combineReducers } from "redux";

export const allReducers = combineReducers(
    {
    value : loginReducer,
    }
)