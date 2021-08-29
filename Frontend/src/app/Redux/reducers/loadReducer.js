import { ActionTypes } from "../constants/actions-types";

const initialState = {
    loadBreakSwitches: []
}


export const loadReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_LOAD:
            const newLoad = [
                ...state.loadBreakSwitches,
                action.payload
            ]

            return {
                loadBreakSwitches: newLoad,
            };
        case ActionTypes.ALL_LOAD:
            return {
                loadBreakSwitches: action.payload,
            }
        case ActionTypes.REMOVE_SELECTED_LOAD:
            const newLoad2 = state.loadBreakSwitches.filter((item) => item.id !== action.payload)
            return {
                loadBreakSwitches: newLoad2,
            }
        case ActionTypes.UPDATE_LOAD:
            const changeId = state.loadBreakSwitches.findIndex(
                (item) => item.id === action.payload.id
            );
            state.loadBreakSwitches[changeId] = action.payload;
            return {
                loadBreakSwitches: state.loadBreakSwitches,
            }
        default:
            return state;
    }
}
