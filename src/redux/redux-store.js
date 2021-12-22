import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";

let reducers = combineReducers({
    movies: dialogsReducer,
});

let store = createStore(reducers);

window.store = store;


export default store;