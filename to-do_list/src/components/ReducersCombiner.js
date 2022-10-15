import { ToDo } from "./ToDoReducer"
import { combineReducers } from "redux"

export const allReducers=()=>combineReducers(
    {
        message: ToDo,
    }
)