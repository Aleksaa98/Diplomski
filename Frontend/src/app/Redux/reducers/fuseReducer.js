import { ActionTypes } from "../constants/actions-types";

const initialState = {
    fuses: []
}


export const fuseReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_FUSE:
            const newFuse = [
                ...state.fuses,
                action.payload
            ]

            return {
                fuses: newFuse,
            };
        case ActionTypes.ALL_FUSE:
            return {
                fuses: action.payload,
            }
        case ActionTypes.REMOVE_SELECTED_FUSE:
            const newFuse2 = state.fuses.filter((item) => item.id !== action.payload)
            return {
                fuses: newFuse2,
            }
        case ActionTypes.UPDATE_FUSE:
            const changeId = state.fuses.findIndex(
                (item) => item.id === action.payload.id
            );
            state.fuses[changeId] = action.payload;
            return {
                fuses: state.fuses,
            }
        default:
            return state;
    }
}
