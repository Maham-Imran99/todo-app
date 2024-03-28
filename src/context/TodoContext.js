import React, { createContext, useReducer } from 'react';
import {todoReducer, initialState}  from './reducer';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  // The value prop is where you define what data and functions you want to expose to any descendants that consume this context.
  const value = { state, dispatch };

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );
};
