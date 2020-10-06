import {createStore} from "redux";
import reducer from './reducers/reducer';
import {devToolsEnhancer} from 'redux-devtools-extension';
import initialState from "./initialState";
import {IStore} from "../interfaces/interfaces";

const persistedState: IStore = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState') as string) : initialState

const store = createStore(reducer, persistedState, devToolsEnhancer({}));

store.subscribe(()=>{
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

export default store;
