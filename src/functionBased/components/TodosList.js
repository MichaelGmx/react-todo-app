import React from "react";

import ToDoItem from "./TodoItem";

const ToDosList = props => {
  return (
    <ul>
      {props.todos.map(todo => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          handleCompleteStatusProps={props.handleCompleteStatusProps}
          deleteTodoProps={props.deleteTodoProps}
          updateTitleProps={props.updateTitleProps}
        />
      ))}
    </ul>
  );
}

export default ToDosList