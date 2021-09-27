import React from "react";

import styles from "./TodoItem.module.scss";

class ToDoItem extends React.Component {
  state = {
    editing: false
  };

  handleEditing = () => {
    this.setState({ editing: true });
  };

  handleChange = e => {
    this.props.setUpdate(e.target.value, this.props.todo.id);
  };

  handleUpdatedDone = e => {
    if (e.key === "Enter") {
      this.setState({ editing: false });
    }
  }

  componentWillUnmount() {
    console.log("Cleaning up...");
  }

  render() {
    const { completed, id, title } = this.props.todo;

    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    };

    let viewMode = {};
    let editMode = {};

    if (this.state.editing) {
      viewMode.display = "none";
    } else {
      editMode.display = "none";
    }

    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={completed}
            onChange={() => this.props.handleChangeProps(id)}
          />
          <button onClick={() => this.props.deleteTodoProps(id)}>Delete</button>
          <span style={completed ? completedStyle : null}>
            {title}
          </span>
        </div>

        <input
          type="text"
          style={editMode}
          className={styles.textInput}
          value={title}
          onChange={this.handleChange}
          onKeyDown={this.handleUpdatedDone}
        />
      </li>
    );
  }
}
// function ToDoItem(props) {
//   return <li>{props.todo.title}</li>
// }

export default ToDoItem