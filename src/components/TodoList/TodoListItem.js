import React from 'react'
import './TodoListItem.css'

const TodoListItem = ({todoData}) => {

    const Elements = todoData.map(el => {
        const style = {color: el.important ? 'tomato' : 'black',
                       fontWeight: el.important ? 'bold' : 'normal'}
        return (
            <div style={style} key={el.id} className={'list-group-item'}>
                <span className="todo-list-item-label" style={style}>
                    {el.label}
                </span>
                <span className={'padding'}>
                    <button type="button"
                            className="btn btn-outline-danger btn-sm float-right">
                        <i className="bi bi-archive-fill"/>
                    </button>
                    <button type="button"
                            className="btn btn-outline-success btn-sm float-right">
                        <i className="bi bi-exclamation"/>
                    </button>
                </span>
            </div>
        )
    })

    return (
        <div className={'list-group-todo'}>
            {Elements}
        </div>
    )
}

export default TodoListItem;

