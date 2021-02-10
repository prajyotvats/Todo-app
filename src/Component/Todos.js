import { React, useContext } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { FaTimesCircle } from "react-icons/fa";
import { TodoContext } from "../context/TodoContext";
import { REMOVE_TODO } from "../context/action.types";

const TodoList = () => {
    const{todos, dispatch} =useContext(TodoContext);

    return (
        <ListGroup className="mt-5 mb-2 items">
            {todos.map(todo => (
                <ListGroupItem key={todo.id}>
                    {todo.todoString}
                    <span className="float-right"
                    onClick={() => {
                        dispatch({
                            type:REMOVE_TODO,
                            payload:todo.id
                        })
                    }}
                    ><FaTimesCircle /></span>
                </ListGroupItem>
            ))}
        </ListGroup>
    )
}

export default TodoList;