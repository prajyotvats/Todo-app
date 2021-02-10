import { React,useState, useContext } from "react";
import { 
    FormGroup,
    Input,
    Button,
    Form,
    InputGroup,
    InputGroupAddon
 } from "reactstrap";

import { v4 } from "uuid";
import { TodoContext } from "../context/TodoContext";
import { ADD_TODO } from "../context/action.types";

const  TodoForm = () => {
    const [todoString, setTodoString] = useState("");
    const { dispatch } = useContext(TodoContext);

    const handleSubmit = e => {
        e.preventDefault();
        if (todoString === "") {
            return alert("Please Add a TODO");
        }

        const todo = {
            todoString,
            id: v4()
        };
        // dispatch is a big object and we can pass multiple values in it
        dispatch({
            type: ADD_TODO,
            payload: todo
        });

        setTodoString("");
    }

    return(
        <Form  onSubmit={handleSubmit}>
        {/* wecan put onSubmit in any button or in Form etc. */}
            <FormGroup>
            <InputGroup>
                <Input 
                    type="text"
                    name="todo"
                    id="todo"
                    placeholder="Your next TODO"
                    value={todoString}
                    onChange={e => setTodoString(e.target.value)}
                />
                <InputGroupAddon addonType="prepend">
                    <Button 
                    color="warning"
                    //TODO: onClick
                    >ADD</Button>
                </InputGroupAddon>
            </InputGroup>
            </FormGroup>
        </Form>
    )
}
export default TodoForm;
