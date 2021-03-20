import React from 'react'
import './TodoListItem.css'

class TodoListItem extends React.Component {

    state = {
        done: false
    }

    onLabelClick = () => {
        this.setState({
            done: true
        })
    }

    render() {
        let {label, important = false} = this.props;

        let classNames = 'todo-list-item'
        if(this.state.done) {
            classNames += ' done'
        }
        const style = {
            color: important ? 'steelblue' : 'black',
            fontWeight: important ? 'bold' : 'normal'
        };

        return (
            <span className={classNames}>
                <span className="todo-list-item-label" style={style} onClick={this.onLabelClick}>
                {label}
                </span>
                <button type="button" className="btn btn-outline-danger btn-sm float-right">
                <i className="bi bi-archive-fill"/>
                </button>
                <button type="button" className="btn btn-outline-success btn-sm float-right">
                <i className="bi bi-exclamation"/>
            </button>
        </span>
        );
    }
}

export default TodoListItem;
