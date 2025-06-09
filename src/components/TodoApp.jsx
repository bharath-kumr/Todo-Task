import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login/Login.jsx';
import SignUp from './Signup/SignUp.jsx';
import TodoList from './Todo/TodoList.jsx';

const TodoApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/todo" element={<TodoList />} />
    </Routes>
  );
};

export default TodoApp;
