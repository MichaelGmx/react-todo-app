import React, { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import Navbar from "./Navbar";
import Header from "./Header";
import ToDosList from "./TodosList";
import InputTodo from "./InputTodo";

import About from "../pages/About";
import NotMatch from "../pages/NotMatch";

function getInitialTodos() {
  const temp = localStorage.getItem("todos");
  const savedTodos = JSON.parse(temp);
  return savedTodos || [];
}

const ToDoContainer = () => {
  // const [todos, setTodos] = useState([]);
  const [todos, setTodos] = useState(getInitialTodos());

  const handleChange = id => {
    // setTodos([
    //   ...todos.map(todo => {
    //     if (todo.id === id) {
    //       return {
    //         ...todo,
    //         completed: !todo.completed
    //       }
    //     }
    //     return todo;
    //   })
    // ]);
    setTodos(prevState => 
      prevState.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo;
      })
    );
  };

  const delTodo = id => {
    setTodos([
      ...todos.filter(todo => {
        return todo.id !== id;
      })
    ]);
  };

  const addTodoItem = title => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false
    };
    setTodos([
      ...todos,
      newTodo
    ]);
  }

  const setUpdate = (updateedTitle, id) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.title = updateedTitle;
        }
        return todo;
      })
    );
  }

  useEffect(() => {
    const temp = JSON.stringify(todos);
    localStorage.setItem("todos", temp);
  }, [todos]);

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <div className="container">
            <div className="inner">
              <Header />
              <InputTodo addTodoProps={addTodoItem} />
              <ToDosList
                todos={todos}
                handleChangeProps={handleChange}
                deleteTodoProps={delTodo}
                setUpdate={setUpdate}
              />
            </div>
          </div>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="*">
          <NotMatch />
        </Route>
      </Switch>
    </>
  );
}

export default ToDoContainer