import React from "react";
import TodoListItem from "./TodoListItem/TodoListItem";
import './TodoList.css'

const TodoList = ({ todoData }) => {

    const elements = todoData.map((item) => {
        const { id, ...itemProps } = item;

        return (
            <li key={id} className="list-group-item">
                <TodoListItem {...itemProps } />
            </li>
        );
    });

    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    );
};

export default TodoList;