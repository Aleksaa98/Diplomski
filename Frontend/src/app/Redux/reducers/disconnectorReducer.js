import { ActionTypes } from "../constants/actions-types";

const initialState = {
    disconnectors: []
}


export const disconnectorReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_DISCONNECTOR:
            const newDisconnectors = [
                ...state.disconnectors,
                action.payload
            ]
            return {
                disconnectors: newDisconnectors,
            };
        case ActionTypes.ALL_DISCONNECTORS:
            return {
                disconnectors: action.payload,
            }
        case ActionTypes.REMOVE_SELECTED_DISCONNECTOR:
            const newDisc = state.disconnectors.filter((item) => item.id !== action.payload)
            return {
                disconnectors: newDisc,
            }
        case ActionTypes.UPDATE_DISCONNECTOR:
            const changeId = state.disconnectors.findIndex(
                (item) => item.id === action.payload.id
            );
            state.disconnectors[changeId] = action.payload;
            return {
                disconnectors: state.disconnectors,
            }
        default:
            return state;
    }
}

