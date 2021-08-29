import {combineReducers} from 'redux';
import {substationReducer} from './substationReducer'
import {disconnectorReducer} from './disconnectorReducer'
import {fuseReducer} from './fuseReducer'
import {breakerReducer} from './breakerReducer'
import {loadReducer} from './loadReducer'

const reducers = combineReducers({
    allSubstations : substationReducer,
    allDisconnectors : disconnectorReducer,
    allFuses : fuseReducer,
    allBreakers : breakerReducer,
    allLoadBreakSwitches : loadReducer
});

export default reducers;