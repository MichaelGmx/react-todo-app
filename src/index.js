import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import ToDoContainer from './functionBased/components/TodoContainer';

import "./functionBased/App.css"

ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <ToDoContainer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
