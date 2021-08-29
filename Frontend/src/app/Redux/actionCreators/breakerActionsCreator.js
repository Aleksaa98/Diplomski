import {ActionTypes} from "../constants/actions-types";


export const addBreakerCreator = (breaker) => {
    
    return {
        type: ActionTypes.ADD_BREAKER,
        payload: breaker
    };
}

export const allBreakers = (breakers) => {
    return{
        type:ActionTypes.ALL_BREAKERS,
        payload: breakers
    };
}

export const updateBreakerCreator = (breaker) => {
    return{
        type:ActionTypes.UPDATE_BREAKER,
        payload: breaker
    }
}

export const deleteBreakerCreator = (breaker) => {
    return{
        type:ActionTypes.REMOVE_SELECTED_BREAKER,
        payload: breaker
    }
}

