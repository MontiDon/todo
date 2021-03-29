import React from 'react'
import './TodoListItem.css'

const TodoListItem = ({ important, done,
                          label, onToggleImportant, onToggleDone, onDelete }) => {

    let classNames = 'todo-list-item';
    if (important) {
        classNames += ' important';
    }

    if (done) {
        classNames += ' done';
    }


    return (
        <span className={classNames}>
            <span
              className="todo-list-item-label"
              onClick={onToggleDone}>{label}</span>
            <span className="float">
                <button type="button"
                      className="btn btn-outline-success btn-sm"
                      onClick={onToggleImportant}>
                <i className="bi bi-exclamation"></i>
                </button>

                <button type="button"
                      className="btn btn-outline-danger btn-sm"
                      onClick={onDelete}>
                <i className="bi bi-archive-fill"></i>
                </button>
            </span>
        </span>
        );
};

export default TodoListItem;

