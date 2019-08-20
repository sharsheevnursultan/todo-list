import React from "react";
import TodoListItem from '../to-do-list-item/todo-list-item';

const TodoList = ({todos, onAppDeleted, onToggleImportant, onToggleDone}) => {
    return (
        <ul className="list-group todo-list">
            {todos.map(function (item) {
                const {id, ...itemProps} = item;

                return (
                    <li key={item.id} className="list-group-item">
                        <TodoListItem
                            {...itemProps}
                            onDeleted={() => onAppDeleted(id)}
                            onTogImportant={() => onToggleImportant(id)}
                            onTogDone={() => onToggleDone(id)}
                        />
                    </li>
                )
            })}
        </ul>)
};

export default TodoList;