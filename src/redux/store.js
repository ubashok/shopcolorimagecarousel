import { createStore, combineReducers } from "redux";
import StepsReducer from "./reducers";
import cartReducer from "./cartReducer";
const rootReducer = combineReducers({
    StepsReducer,
    cartReducer
})

const store = createStore(rootReducer)
export default store