import AppHeader from "./components/Header/AppHeader";
import SearchPanel from "./components/SearchPanel/SearchPanel";
import ItemStatusFilter from "./components/ItemStatusFilter/ItemStatusFilter";
import TodoList from "./components/TodoList/TodoList";
import React from "react";

const App = () => {
    let todoData = [
        {id: 1, label: 'Drink Coffee', important: false},
        {id: 2, label: 'Drink Tea', important: false},
        {id: 3, label: 'Learn React', important: true}
    ];


    return (
        <div className="todo-app">
            <AppHeader toDo={1} done={3}/>
            <span className="top-panel d-flex">
                <SearchPanel/>
                <ItemStatusFilter/>
            </span>
            <TodoList todoData={todoData}/>
        </div>
    )
};

export default App;