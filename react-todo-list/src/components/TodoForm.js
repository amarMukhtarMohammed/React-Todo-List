import React, { useState } from 'react';
import uuid from "uuid"; 

function TodoForm({ addTodo }) {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    });

    function handleTaskInputChange(e) {
        setTodo({ ...todo, task: e.target.value });
    }

    function handleSubmit(e) {
        e.prevenetDefault();
        if (todo.task.trim()) {
            addTodo({ ...todo, id: uuid.v4() })
            setTodo({ ...todo, task: "" })
        }
    }

    return(
    <form onSubmit={handleSubmit}>
        <input
            name="type"
            type="text"
            value={todo.task}
            onChange={handleTaskInputChange}
        />
        <button type="submit"/>
    </form>
    )
}


export default TodoForm;