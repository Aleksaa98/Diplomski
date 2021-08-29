import {ActionTypes} from "../constants/actions-types";


export const addLoadCreator = (load) => {
    
    return {
        type: ActionTypes.ADD_LOAD,
        payload: load
    };
}

export const allLoad = (load) => {
    return{
        type:ActionTypes.ALL_LOAD,
        payload: load
    };
}

export const updateLoadCreator = (load) => {
    return{
        type:ActionTypes.UPDATE_LOAD,
        payload: load
    }
}

export const deleteLoadCreator = (load) => {
    return{
        type:ActionTypes.REMOVE_SELECTED_LOAD,
        payload: load
    }
}

