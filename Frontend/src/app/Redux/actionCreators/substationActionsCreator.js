import {ActionTypes} from "../constants/actions-types";


export const addSubstationCreator = (substations) => {
    return {
        type: ActionTypes.ADD_SUBSTATION,
        payload: substations
    };
};


export const allSubstations = (substations) => {
    return{
        type:ActionTypes.ALL_SUBSTATIONS,
        payload: substations
    };
};

export const updateSubstationCreator = (substations) => {
    return{
        type:ActionTypes.UPDATE_SUBSTATION,
        payload: substations
    }
}

export const deleteSubstationCreator = (substations) => {
    return{
        type:ActionTypes.REMOVE_SELECTED_SUBSTATION,
        payload: substations
    }
}

export const changeStateCreator = (subName,state) => {
    return{
        type:ActionTypes.CHANGE_STATE,
        
        payload: subName,state
    }
}

