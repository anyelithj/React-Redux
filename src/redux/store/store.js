import { combineReducers, createStore } from "redux";
import { productoReducers } from "../reducers/productReducers";


const reducers = combineReducers({
   productos: productoReducers 
})

export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)