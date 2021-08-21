import {combineReducers} from 'redux';
import {substationReducer} from './substationReducer'

const reducers = combineReducers({
    allSubstations : substationReducer,
});

export default reducers;