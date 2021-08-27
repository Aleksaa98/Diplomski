import {combineReducers} from 'redux';
import {substationReducer} from './substationReducer'
import {disconnectorReducer} from './disconnectorReducer'

const reducers = combineReducers({
    allSubstations : substationReducer,disconnectorReducer
});

export default reducers;