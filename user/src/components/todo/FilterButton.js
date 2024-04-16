import React, { useContext } from 'react';
import { Box, Button, MenuItem, FormControl, Select } from '@mui/material';
import { TodoContext } from '../../context/todo/TodoContext';
import { filterTodos, markAllCompleted } from '../../context/todo/todoActions';
import { COMPLETED, DEFAULT, INCOMPLETE, MARK_ALL_COMPLETED } from '../../constants/constantText';

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
                    <MenuItem value="ALL">{DEFAULT}</MenuItem>
                    <MenuItem value="COMPLETED">{COMPLETED}</MenuItem>
                    <MenuItem value="INCOMPLETE">{INCOMPLETE}</MenuItem>
                </Select>
            </FormControl>
            <Button
                variant="contained"
                color="secondary"
                onClick={() => dispatch(markAllCompleted())}
                sx={{ textTransform: 'none', fontSize: '0.875rem' }}
            >
               {MARK_ALL_COMPLETED}
            </Button>
        </Box>

    )
}

export default FilterButton