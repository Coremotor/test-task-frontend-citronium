import { createStore } from "redux";
import reducerCourses from './reducers/reducer';
import { devToolsEnhancer } from 'redux-devtools-extension';

const store = createStore(reducerCourses, devToolsEnhancer);

export default store;