import React, { createContext, useReducer } from 'react';
import {todoReducer, initialState}  from './reducer';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const value = { state, dispatch };

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );
};