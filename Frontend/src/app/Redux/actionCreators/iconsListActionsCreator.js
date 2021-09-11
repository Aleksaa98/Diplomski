import {ActionTypes} from "../constants/actions-types";


export const addTodoCreator = (todo) => {
    
    return {
        type: ActionTypes.ADD_TODO,
        payload: todo
    };
}

export const deleteTodoCreator = (todo) => {
    return{
        type:ActionTypes.REMOVE_TODO,
        payload: todo
    }
}

export const updateTodoCreator = (todo) => {
    return{
        type:ActionTypes.UPDATE_TODO,
        payload: todo
    }
}

export const changeIconCreator = () => {
    return{
        type:ActionTypes.CHANGE_ICON
    }
}




