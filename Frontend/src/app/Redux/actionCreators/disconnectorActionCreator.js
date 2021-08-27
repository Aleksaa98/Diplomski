import {ActionTypes} from "../constants/actions-types";


export const addDisconnectorCreator = (disconnector) => {
    
    return {
        type: ActionTypes.ADD_DISCONNECTOR,
        payload: disconnector
    };
}

export const allDisconnector = (disconnectors) => {
    return{
        type:ActionTypes.ALL_DISCONNECTORS,
        payload: disconnectors
    };
}

export const updateDisconnectorCreator = (disconnector) => {
    return{
        type:ActionTypes.UPDATE_DISCONNECTOR,
        payload: disconnector
    }
}

export const deleteDisconnectorCreator = (disconnectors) => {
    return{
        type:ActionTypes.REMOVE_SELECTED_DISCONNECTOR,
        payload: disconnectors
    }
}

