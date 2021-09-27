import React from "react";
import { v4 as uuidv4 } from 'uuid';

import Header from "./Header";
import ToDosList from "./TodosList";
import InputToDo from "./InputTodo";

class ToDoContainer extends React.Component {
  state = {
    // todos: [
    //   { id: uuidv4(), title: "Setup development environment",   completed: true },
    //   { id: uuidv4(), title: "Develop website and add content", completed: false },
    //   { id: uuidv4(), title: "Deploy to live server",           completed: false }
    // ]
    todos: []
  };

  handleChange = id => {
    // this.setState({
    //   todos: this.state.todos.map(todo => {
    //     if (todo.id === id) {
    //       todo.completed = !todo.completed;
    //     }
    //     return todo;
    //   })
    // });

    // this.setState(prevState => ({
    //   todos: prevState.todos.map(todo => {
    //     if (todo.id === id) {
    //       return {
    //         ...todo,
    //         completed: !todo.completed
    //       }
    //     }
    //     return todo;
    //   })
    // }));

    this.setState(prevState => {
      return {
        todos: prevState.todos.map(todo => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed
            }
          }
          return todo;
        })
      }
    });
  };

  delTodo = id => {
    this.setState({
      todos: [
        ...this.state.todos.filter(todo => {
          return todo.id !== id;
        })
      ]
    })
  };

  addTodoItem = title => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }

  setUpdate = (updateedTitle, id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.title = updateedTitle;
        }
        return todo;
      })
    });
  }

  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
    //   .then(response => response.json())
    //   .then(data => this.setState({ todos: data }));

    const temp = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(temp);
    if (loadedTodos) {
      this.setState({
        todos: loadedTodos
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      const temp = JSON.stringify(this.state.todos);
      localStorage.setItem("todos", temp);
    }
  }

  render() {
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputToDo addTodoProps={this.addTodoItem} />
          <ToDosList
            todos={this.state.todos}
            handleChangeProps={this.handleChange}
            deleteTodoProps={this.delTodo}
            setUpdate={this.setUpdate}
          />
        </div>
      </div>
    );
  }
}

export default ToDoContainer