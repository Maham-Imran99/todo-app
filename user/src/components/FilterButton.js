import React, { useContext } from 'react';
import { Box, Button, MenuItem, FormControl, Select } from '@mui/material';
import { TodoContext } from '../context/TodoContext';
import { filterTodos, markAllCompleted } from '../context/actions';

const FilterButton = () => {
    const { state: { filter }, dispatch } = useContext(TodoContext);
    const currentFilter = filter;

    const handleFilter = (event) => {
        dispatch(filterTodos(event.target.value));
    };

    return (
        <Box display="flex" alignItems="center" gap={2}>
            <FormControl size="small">
                <Select
                    value={currentFilter}
                    onChange={handleFilter}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value="ALL">Default</MenuItem>
                    <MenuItem value="COMPLETED">Completed</MenuItem>
                    <MenuItem value="INCOMPLETE">Incomplete</MenuItem>
                </Select>
            </FormControl>
            <Button
                variant="contained"
                color="secondary"
                onClick={() => dispatch(markAllCompleted())}
                sx={{ textTransform: 'none', fontSize: '0.875rem' }}
            >
                Mark All Completed
            </Button>


        </Box>

    )
}

export default FilterButton