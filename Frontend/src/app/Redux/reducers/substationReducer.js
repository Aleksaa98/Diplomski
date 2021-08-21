import { ActionTypes } from "../constants/actions-types";

const initialState = {
    substations: [
        {name:'prvi',description:'prvi sub',mrId:'asd',state:false},
        {name:'drugi',description:'drugi sub',mrId:'dsa',state:false},
        {name:'treci',description:'treci sub',mrId:'sda',state:false}
    ],
}


export const substationReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_SUBSTATION:
            return {
                substations: action.payload,
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

