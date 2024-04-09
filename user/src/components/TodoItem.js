import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext'; // Adjust the path according to your project structure
import { ListItem, ListItemText, IconButton, ListItemIcon } from '@mui/material';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
// import EditIcon from '@mui/icons-material/Edit';
import { toggleTodo, removeTodo, markCompleted, markIncomplete } from '../context/actions';
import { useMutation } from '@apollo/client';
import { DELETE_TODO } from '../graphQl/mutations';
const TodoItem = ({ todo, index }) => {
    const { dispatch } = useContext(TodoContext);
    const [deleteTodo] = useMutation(DELETE_TODO);

    const handleDeleteTodo = async() => {
        try{
            await deleteTodo({
                variables:{ id: todo.id}
            });
            dispatch(removeTodo(index))
        } catch (error) {
            console.error('Error deleting todo:', error);
        }
    }

    return (
        <ListItem sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', justifyContent: 'space-between', borderBottom: 2, py: 2, gap: 4 }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <ListItemIcon>
                    <ListItemText primary={`${index + 1}.`} sx={{ mr: 4, color: 'gray.500' }} />
                </ListItemIcon>
                <ListItemText primary={todo.text} sx={{ textDecoration: todo.completed ? 'line-through' : 'none', color: todo.completed ? 'gray.500' : 'inherit' }} />
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconButton color="primary" onClick={() => dispatch(toggleTodo(index))}>
                    {todo.completed ? <ToggleOffIcon /> : <ToggleOnIcon />}
                </IconButton>
                <IconButton color="error" onClick={handleDeleteTodo}>
                    <DeleteIcon />
                </IconButton>
                {!todo.completed && (
                    <IconButton
                        color="success"
                        onClick={() => dispatch(markCompleted(index))}
                    >
                        <CheckIcon />
                    </IconButton>
                )}
                {todo.completed && (
                    <IconButton
                        color="warning"
                        onClick={() => dispatch(markIncomplete(index))}
                    >
                        <CloseIcon />
                    </IconButton>
                )}
                <IconButton>
                    {/* <EditIcon /> */}
                </IconButton>
            </div>
        </ListItem>
    )
}

export default TodoItem