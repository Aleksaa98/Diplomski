import {ActionTypes} from "../constants/actions-types";


export const addSubstationCreator = (substation) => {
    return {
        type: ActionTypes.ADD_SUBSTATION,
        payload: substation
    };
};


export const allSubstations = (substations) => {
    return{
        type:ActionTypes.ALL_SUBSTATIONS,
        payload: substations
    };
};

export const updateSubstationCreator = (substation) => {
    return{
        type:ActionTypes.UPDATE_SUBSTATION,
        payload: substation
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

export const getByNameSubCreator = (substution) => {
    return{
        type:ActionTypes.GET_BY_NAME,

        payload: substution
    }
}

