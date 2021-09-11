import {combineReducers} from 'redux';
import {substationReducer} from './substationReducer'
import {disconnectorReducer} from './disconnectorReducer'
import {fuseReducer} from './fuseReducer'
import {breakerReducer} from './breakerReducer'
import {loadReducer} from './loadReducer'
import {iconListReducer} from './iconListReducer'
import { persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import persistReducer from 'redux-persist/es/persistReducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['allSubstations','allIconLists','allDisconnectors']
};

const reducers = combineReducers({
    allSubstations : substationReducer,
    allDisconnectors : disconnectorReducer,
    allFuses : fuseReducer,
    allBreakers : breakerReducer,
    allLoadBreakSwitches : loadReducer,
    allIconLists : iconListReducer
});

export default persistReducer(persistConfig, reducers);