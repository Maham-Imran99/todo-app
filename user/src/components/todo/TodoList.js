import { useQuery } from '@apollo/client';
import { List, ListItem, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { TodoContext } from '../../context/todo/TodoContext';
import { setTodos } from '../../context/todo/todoActions';
import { TODO_LIST } from '../../graphQl/todo/queries';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { state, dispatch } = useContext(TodoContext);
  const { todos, filter, searchTerm } = state;

  const { loading, error } = useQuery(TODO_LIST, {
    onCompleted: (data) => {
      dispatch(setTodos(data.Todos));
    },
    onError: (error) => {
      console.error('GraphQL query error:', error);
    }
  });

  const getFilteredTodos = () => {
    return todos.filter(todo => {
      const matchesFilter =
        (filter === 'COMPLETED' && todo.completed) ||
        (filter === 'INCOMPLETE' && !todo.completed) ||
        filter === 'ALL';
      const matchesSearch = todo.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  };

  const filteredTodos = getFilteredTodos();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
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
          <TodoItem key={todo._id} todo={todo} index={index} />
        ))}
      </ListItem>
    </List>
  );
};

export default TodoList;