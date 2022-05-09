import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';

import Header from '../components/Header';
import InputTodo from '../components/InputTodo';
import ToDosList from '../components/TodosList';

// 初始化Init
function getInitialTodos() {
  const temp = localStorage.getItem("todos");
  const savedTodos = JSON.parse(temp);
  return savedTodos || [];
}

const Home = () => {
  // const [todos, setTodos] = useState([]);
  const [todos, setTodos] = useState(getInitialTodos());

  const handleCompleteStatus = id => {
    setTodos([
      ...todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo;
      })
    ]);
    // setTodos(prevState => 
    //   prevState.map(todo => {
    //     if (todo.id === id) {
    //       return {
    //         ...todo,
    //         completed: !todo.completed
    //       }
    //     }
    //     return todo;
    //   })
    // );
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

  const updateTitle = (updateedTitle, id) => {
    // setTodos(
    //   todos.map(todo => {
    //     if (todo.id === id) {
    //       todo.title = updateedTitle;
    //     }
    //     return todo;
    //   })
    // );
    setTodos(prevState => 
      prevState.map(todo => {
        if (todo.id === id) {
          todo.title = updateedTitle;
        }
        return todo;
      })
    )
  }

  useEffect(() => {
    const temp = JSON.stringify(todos);
    localStorage.setItem("todos", temp);
  }, [todos]);

  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo addTodoProps={addTodoItem} />
        <ToDosList
          todos={todos}
          handleCompleteStatusProps={handleCompleteStatus}
          deleteTodoProps={delTodo}
          updateTitleProps={updateTitle}
        />
      </div>
    </div>
  );
}

export default Home