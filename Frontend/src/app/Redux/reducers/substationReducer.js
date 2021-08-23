import { ActionTypes } from "../constants/actions-types";

const initialState = {
    substations: [],
}


export const substationReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_SUBSTATION:
            const newSubstations = [
                ...state.substations,
                action.payload
            ]
            console.log(newSubstations);
            state.substations = newSubstations;
            return {
                substations: state.substations,
            };
        case ActionTypes.ALL_SUBSTATIONS:
            return{
                substations: action.payload,
            }
        case ActionTypes.REMOVE_SELECTED_SUBSTATION:
            return{
                substations: action.payload,
            }
        case ActionTypes.UPDATE_SUBSTATION:
            return{
                substations: action.payload,
            }
        case ActionTypes.CHANGE_STATE:
            const changeId = state.substations.findIndex(
                (item) => item.name === action.payload
            );
            
            state.substations[changeId].state = action.state;

            return{
                substations: state.substations,
            }
        default:
            return state;
    }
}

