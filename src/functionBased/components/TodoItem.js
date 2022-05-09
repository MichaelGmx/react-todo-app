import React, { useState, useEffect } from "react";
import { FaTrash } from 'react-icons/fa';

import styles from "./TodoItem.module.css";

const ToDoItem = props => {
  const [editing, setEditing] = useState(false);

  const handleEditing = () => {
    setEditing(true);
  };

  const handleValueChange = e => {
    props.updateTitleProps(e.target.value, props.todo.id);
  };

  const handleEditDone = e => {
    if (e.key === "Enter") {
      setEditing(false);
    }
  }

  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  };

  const { completed, id, title } = props.todo;

  let viewMode = {};
  let editMode = {};

  if (editing) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }

  useEffect(() => {
    return () => {
      console.log("Cleaning up...");
    }
  }, []);  // 仅在挂载、卸载时，调用一次

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={completed}
          onChange={() => props.handleCompleteStatusProps(id)}
        />
        <button onClick={() => props.deleteTodoProps(id)} className="input-submit">
          <FaTrash color="orangered" fontSize="16px" />
        </button>
        <span style={completed ? completedStyle : null}>
          {title}
        </span>
      </div>

      <input
        type="text"
        style={editMode}
        className={styles.textInput}
        value={title}
        onChange={handleValueChange}
        onKeyDown={handleEditDone}
      />
    </li>
  );
}

export default ToDoItem