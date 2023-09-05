import { createStore, combineReducers } from "redux";
import StepsReducer from "./reducers";

const rootReducer = combineReducers({
    StepsReducer:StepsReducer
})

const store = createStore(rootReducer)
export default store