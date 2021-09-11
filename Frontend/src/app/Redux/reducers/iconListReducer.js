import { ActionTypes } from "../constants/actions-types";

const initialState = {
    todos: [],
    icon: true
}


export const iconListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TODO:
            const newTodo = [
                ...state.todos,
                action.payload
            ]
            return {
                todos: newTodo,
                icon:state.icon
            };
        case ActionTypes.REMOVE_TODO:
            const newTodos = state.todos.filter((item) => item.id !== action.payload)
            return {
                todos: newTodos,
                icon:state.icon
            }
        case ActionTypes.UPDATE_TODO:
            const changeId = state.todos.findIndex(
                (item) => item.id === action.payload.id
            );
            state.todos[changeId] = action.payload;
            return {
                todos: state.todos,
                icon:state.icon
            }
        case ActionTypes.CHANGE_ICON:
            state.icon = !state.icon;
            return {
                todos: state.todos,
                icon:state.icon
            }
        default:
            return state;
    }
}

