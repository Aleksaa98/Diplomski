import { ActionTypes } from "../constants/actions-types";

const initialState = {
    substations: [],
    active: { name: '', mrid: '',id:'', description: '', breakers: [], fuses: [], loadBreakSwitches: [], disconnector: [] },
}


export const substationReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_SUBSTATION:
            const newSubstations = [
                ...state.substations,
                action.payload
            ]
            state.substations = newSubstations;
            
            return {
                substations: state.substations,
                active: state.active
            };
        case ActionTypes.ALL_SUBSTATIONS:
            var active = state.active;
            if(state.active != null)
            {
                console.log(state.active.id);
                const updateActiveInfoId = state.substations.findIndex(
                    (item) => item.id ===  state.active.id
                );
               
                active = action.payload[updateActiveInfoId];
            }
           
            return {
                substations: action.payload,
                active: active
            }
        case ActionTypes.REMOVE_SELECTED_SUBSTATION:
            //const newSubs = state.substations.filter((item) => item.id !== action.payload)
            return {
                substations: action.payload,
                active: { name: '', mrid: '',id:'', description: '', breakers: [], fuses: [], loadBreakSwitches: [], disconnector: [] }
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
            const activeId = state.substations.findIndex(
                (item) => item.id === action.payload.id
            );
            return {
                substations: state.substations,
                active: state.substations[activeId]
            }
        case ActionTypes.UPDATE_ACTIVE:
            
            return {
                substations: state.substations,
                active: { name: '', mrid: '',id:'', description: '', breakers: [], fuses: [], loadBreakSwitches: [], disconnector: [] }
            }

        default:
            return state;
    }
}

