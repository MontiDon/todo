import React from 'react';
import ReactDOM from 'react-dom';

const AppHeader = () => {
    return <h1>My Todo List</h1>
}

const SearchPanel = () => {
    return <input placeholder={'search'}/>
}

const TodoList = () => {
    return (
        <div>
            <div>Learn react</div>
            <div>I`m best</div>
        </div>
    )
}

const App = () => {
    return(
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList />
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root'));


