import React, { useContext } from 'react';
import { List, ListItem, Typography } from '@mui/material';
import TodoItem from './TodoItem';
import { TodoContext } from '../context/TodoContext'; // Adjust the path according to your project structure

const TodoList = () => {
  const { state } = useContext(TodoContext);
  const { todos, filter, searchTerm } = state;

  const filteredTodos = todos.filter((todo) => {
    const matchesFilter = (filter === 'COMPLETED' && todo.completed) ||
      (filter === 'INCOMPLETE' && !todo.completed) ||
      filter === 'ALL';

    const matchesSearch = todo.text.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });
  
  if (!filteredTodos.length) {
    return <p>No todos to display.</p>;
  }

  return (
    <List>
      <ListItem style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <Typography variant="subtitle1" sx={{ fontStyle: 'italic', my: 2 }}>
          All Your Todos Here...
        </Typography>
        {filteredTodos.map((todo, index) => (
          <TodoItem key={index} todo={todo} index={index} />
        ))}
      </ListItem>
    </List>
  );
};

export default TodoList;
