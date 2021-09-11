import React, { Component, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, updateTodo,changeIcon } from '../Redux/actions/iconListActions'

export class TodoList extends Component {

    render() {
        return (
            <div>
                <div className="page-header">
                    <h3 className="page-title">
                        Todo List
                    </h3>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="!#" onClick={evt => evt.preventDefault()}>Apps</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Todo List</li>
                        </ol>
                    </nav>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card px-3">
                            <div className="card-body">
                                <h4 className="card-title">Todo List</h4>
                                <TodoListComponent />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export const TodoListComponent = () => {
    const tasks = useSelector((state) => state.allIconLists.todos);
    const dispatch = useDispatch();
    const [idCount,setIdCount] = useState(tasks.length);
    const [activeTask, setActive] = useState({
        id: 0,
        task: "Task can be added here",
        isCompleted: false
    })

    // todos: [
    //     {
    //         id: 1,
    //         task: 'Pick up kids from school',
    //         isCompleted: false

    const statusChangedHandler = (index) => {

        const changeId = tasks.findIndex(
            (item) => item.id === index
        );
        if(tasks[changeId].isCompleted){
            tasks[changeId].isCompleted = false;
        }
        else{
            tasks[changeId].isCompleted = true;
        }
        dispatch(updateTodo(tasks[changeId]));
        setActive({
            id: 0,
            task: "",
            isCompleted: false
        });

    }

    const addTodoInput = () => {
        activeTask.id = idCount;
        setIdCount(idCount+1);
        
        dispatch(addTodo(activeTask));
        setActive({
            id: 0,
            task: "",
            isCompleted: false
        });
    }

    const removeTodo = (index) => {
        const changeId = tasks.findIndex(
            (item) => item.id === index
        );
        dispatch(deleteTodo(tasks[changeId]));
    }

    const inputChangeHandler = (event) => {
        setActive({
            ...activeTask,
            [event.target.name]: event.target.value,
        });
    }

    return (
        <>
            <form className="add-items d-flex" onSubmit={addTodoInput}>
                <input
                    type="text"
                    className="form-control h-auto"
                    placeholder="What do you need to do today?"
                    name="task"
                    value={activeTask.task}
                    id="task"
                    onChange={(e) => inputChangeHandler(e)}
                    required />
                <button type="button" disabled={!activeTask.task} onClick={addTodoInput} className="btn btn-primary">Add</button>
            </form>
            <div className="list-wrapper">
                <ul className="d-flex flex-column todo-list">
                    {tasks.map((todo) => {
                        return <ListItem
                            isCompleted={todo.isCompleted}
                            task = {todo.task}
                            changed={(event) => statusChangedHandler(todo.id)}
                            key={todo.id}
                            remove={(e) => removeTodo(todo.id)}
                        >{todo.task}</ListItem>
                    })}
                </ul>
            </div>
        </>
    )
}


const ListItem = (props) => {

    return (
        <li className={(props.isCompleted ? 'completed' : null)}>
            <div className="form-check">
                <label htmlFor="" className="form-check-label">
                    <input className="checkbox" type="checkbox"
                        checked={props.isCompleted}
                        onChange={props.changed}
                    /> {props.children} <i className="input-helper"></i>
                </label>
            </div>
            <i className="remove mdi mdi-close-box" onClick={props.remove}></i>
        </li>
    )
};

export default TodoList
