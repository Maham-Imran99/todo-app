import { useMutation } from '@apollo/client';
import { Search } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import { TodoContext } from '../../context/todo/TodoContext';
import { addTodo, updateSearchTerm } from '../../context/todo/todoActions';
import { CREATE_TODO } from '../../graphQl/todo/mutations';
import FilterButtons from './FilterButton';
import TodoList from './TodoList';
import { TODO } from '../../constants/constantText';

const Todo = () => {
    const {dispatch} = useContext(TodoContext);
    const [newTodo, setNewTodo] = useState("");
    const [newSearch, setNewSerch] = useState("");
    const [createTodo] = useMutation(CREATE_TODO);

    const handleAddTodoClick = async (e) => {
    try {
        const response = await createTodo({
            variables: {
                name: newTodo
            }
        });
        if (response.data && response.data.todo) {
            dispatch(addTodo(response.data.todo));
            setNewTodo(""); 
            dispatch(updateSearchTerm(""));
            window.location.reload();
        }
    } catch (error) {
        console.error("Error creating todo", error);
    }
    }

    const handleSearchChange =(value) => {
        setNewSerch(value);
        dispatch(updateSearchTerm(value))
    }

    return (
        <Box maxWidth="md" mx="auto" p={4} bgcolor="grey.100" borderRadius="borderRadius">
            <Typography variant="h5" align="center" color="textPrimary" gutterBottom>
              {TODO}
            </Typography>
            <Box display="flex" alignItems="center" mb={3}>
                <TextField
                    fullWidth
                    placeholder="Add Todo"
                      value={newTodo}
                      onChange={(e) => setNewTodo(e.target.value)}
                    margin="normal"
                    focused
                /> 
                <Box ml={2}>
                <Button color="primary" variant="contained" onClick={handleAddTodoClick}>
                <AddIcon />
                </Button>

                </Box>
                
            </Box>
            <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} alignItems="center" justifyContent="space-between" gap={2}>
            <FilterButtons />
            <Box display="flex" alignItems="center" mb={2}>
            <TextField
                fullWidth
                placeholder="Search Todos"
                margin="normal"
                value={newSearch}
            onChange={(e) => handleSearchChange(e.target.value)}
            />
            <Box ml={2}> 
            <Button color="primary" variant="contained">
            <Search />
            </Button>
            </Box>
            </Box>
            </Box>
           <TodoList />
        </Box>
    )
}

export default Todo