import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = (props) => {
    return (
        <div>
            <TodoListItem todoData={props.todoData}/>
        </div>
    )
};

export default TodoList;