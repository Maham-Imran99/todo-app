import React, { useState, useContext} from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { TodoContext } from '../context/TodoContext';
import {addTodo, updateSearchTerm} from '../context/actions';
import FilterButtons from './FilterButton';
import TodoList from './TodoList';
import { Search } from '@mui/icons-material';


const Todo = () => {
    const {dispatch} = useContext(TodoContext);
    const [newTodo, setNewTodo] = useState("");
    const [newSearch, setNewSerch] = useState("");

    const handleAddTodo = (text) => {
        dispatch(addTodo(text));
    }

    const handleAddTodoClick = () => {
        if(newTodo.trim() !== '') {
            handleAddTodo(newTodo.trim());
            setNewTodo('');
        }
    }

    const handleSearchChange =(value) => {
        setNewSerch(value);
        dispatch(updateSearchTerm(value))
    }

    return (
        <Box maxWidth="md" mx="auto" p={4} bgcolor="grey.100" borderRadius="borderRadius">
            <Typography variant="h5" align="center" color="textPrimary" gutterBottom>
                TODO APP
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