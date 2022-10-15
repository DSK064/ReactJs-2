import countReducer from "./CountReducer";
import signReducer from './SignReducer';
import { combineReducers} from "redux";

export const allReducers = combineReducers(
    {
        counter:countReducer,
        sign:signReducer,
    }
)
