import {combineReducers} from 'redux';
import {substationReducer} from './substationReducer'
import {disconnectorReducer} from './disconnectorReducer'
import {fuseReducer} from './fuseReducer'
import {breakerReducer} from './breakerReducer'
import {loadReducer} from './loadReducer'
import { persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import persistReducer from 'redux-persist/es/persistReducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['allSubstations']
};

const reducers = combineReducers({
    allSubstations : substationReducer,
    allDisconnectors : disconnectorReducer,
    allFuses : fuseReducer,
    allBreakers : breakerReducer,
    allLoadBreakSwitches : loadReducer
});

export default persistReducer(persistConfig, reducers);