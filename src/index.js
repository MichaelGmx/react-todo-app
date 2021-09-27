import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import ToDoContainer from './functionBased/components/TodoContainer';

import "./functionBased/App.css"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ToDoContainer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
