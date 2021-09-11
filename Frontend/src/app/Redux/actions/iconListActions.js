import { addTodoCreator, deleteTodoCreator, updateTodoCreator,changeIconCreator} from "../actionCreators/iconsListActionsCreator";


export const deleteTodo = (todo) => async(dispatch) =>
{
    dispatch(deleteTodoCreator(todo.id));
}

export const addTodo = (todo) => async(dispatch) => {
    dispatch(addTodoCreator(todo));
    
}

export const updateTodo = (todo) => async(dispatch) => {
    dispatch(updateTodoCreator(todo));
    
}

export const changeIcon = () => async(dispatch) => {
    dispatch(changeIconCreator());
    
}