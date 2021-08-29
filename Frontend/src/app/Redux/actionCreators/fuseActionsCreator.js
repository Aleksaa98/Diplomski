import {ActionTypes} from "../constants/actions-types";


export const addFuseCreator = (fuse) => {
    
    return {
        type: ActionTypes.ADD_FUSE,
        payload: fuse
    };
}

export const allFuses = (fuses) => {
    return{
        type:ActionTypes.ALL_FUSE,
        payload: fuses
    };
}

export const updateFuseCreator = (fuse) => {
    return{
        type:ActionTypes.UPDATE_FUSE,
        payload: fuse
    }
}

export const deleteFuseCreator = (fuse) => {
    return{
        type:ActionTypes.REMOVE_SELECTED_FUSE,
        payload: fuse
    }
}

