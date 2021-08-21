import { ActionTypes } from "../constants/actions-types";

const initialState = {
    substations: [
        {id:1,name:'prvi',description:'prvi sub',mrId:'asd',dissCount:15,fuseCount:32,switchBreakCount:12,breakerCount:22,state:false},
        {id:2,name:'drugi',description:'drugi sub',mrId:'dsa',dissCount:23,fuseCount:13,switchBreakCount:42,breakerCount:52,state:false},
        {id:3,name:'treci',description:'treci sub',mrId:'sda',dissCount:123,fuseCount:23,switchBreakCount:51,breakerCount:76,state:false}
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

