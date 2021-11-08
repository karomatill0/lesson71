import { combineReducers } from "redux";
import { counterReducer } from "../modules/counter/counterReducer";
import { modeReducer } from "../modules/mode/madeReducer";

export const rootReducer = combineReducers({
    counter:counterReducer,
    mode:modeReducer,
})