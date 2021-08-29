import { ActionTypes } from "../constants/actions-types";

const initialState = {
    breakers: []
}


export const breakerReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_BREAKER:
            const newBreaker = [
                ...state.breakers,
                action.payload
            ]

            return {
                breakers: newBreaker,
            };
        case ActionTypes.ALL_BREAKERS:
            return {
                breakers: action.payload,
            }
        case ActionTypes.REMOVE_SELECTED_BREAKER:
            const newBreaker2 = state.breakers.filter((item) => item.id !== action.payload)
            return {
                breakers: newBreaker2,
            }
        case ActionTypes.UPDATE_BREAKER:
            const changeId = state.breakers.findIndex(
                (item) => item.id === action.payload.id
            );
            state.breakers[changeId] = action.payload;
            return {
                breakers: state.breakers,
            }
        default:
            return state;
    }
}
