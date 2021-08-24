import { ActionTypes } from "../constants/actions-types";

const initialState = {
    substations: [],
    active: { name: '', mrid: '', description: '', breakers: [], fuses: [], loadBreakSwitches: [], disconnector: [] }
}


export const substationReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_SUBSTATION:
            const newSubstations = [
                ...state.substations,
                action.payload
            ]
            state.substations = newSubstations;
            console.log(state.substations);
            return {
                substations: state.substations,
                active: state.active
            };
        case ActionTypes.ALL_SUBSTATIONS:
            console.log(action.payload);
            return {
                substations: action.payload,
                active: state.active
            }
        case ActionTypes.REMOVE_SELECTED_SUBSTATION:
            const newSubs = state.substations.filter((item) => item.id !== action.payload)
            return {
                substations: newSubs,
                active: { name: '', breakers: [] }
            }
        case ActionTypes.UPDATE_SUBSTATION:
            const changeId = state.substations.findIndex(
                (item) => item.id === action.payload.id
            );
            state.substations[changeId] = action.payload;
            return {
                substations: state.substations,
                active: action.payload
            }
        case ActionTypes.CHANGE_STATE:
            const changeName = state.substations.findIndex(
                (item) => item.name === action.payload
            );

            state.substations[changeName].state = action.state;

            return {
                substations: state.substations,
                active: state.active
            }
        case ActionTypes.GET_BY_NAME:
            console.log(action.payload);
            return {
                substations: state.substations,
                active: action.payload
            }

        default:
            return state;
    }
}

