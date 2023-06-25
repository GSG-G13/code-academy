import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const SelectSmall = () => {
  const [filter, setFilter] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setFilter(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Filter</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={filter}
        label="Filter"
        onChange={handleChange}
      >
        <MenuItem value="">
          All
        </MenuItem>
        <MenuItem value="last-active">Last Active</MenuItem>
        <MenuItem value="newest-registered">Newest Registered</MenuItem>
        <MenuItem value="Alphabetical">Alphabetical</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectSmall;
