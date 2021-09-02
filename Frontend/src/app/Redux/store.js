import {createStore, applyMiddleware} from 'redux';
import reducers from "./reducers/index";
import { composeWithDevTools } from 'redux-devtools-extension';
import  thunkMiddleware  from 'redux-thunk';
import {persistStore} from 'redux-persist';

export const store = createStore(reducers,composeWithDevTools( applyMiddleware(thunkMiddleware) ));

export const persistor = persistStore(store); 

export default {store, persistor};