import {createStore, applyMiddleware} from 'redux';
import reducers from "./reducers/index";
import { composeWithDevTools } from 'redux-devtools-extension';
import  thunkMiddleware  from 'redux-thunk';


const store = createStore(reducers,composeWithDevTools( applyMiddleware(thunkMiddleware) ));

export default store;