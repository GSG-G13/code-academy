import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import { CiSearch } from 'react-icons/ci';

const Search = () => (
  <Paper
    component="form"
    sx={{
      p: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
      border: 'none',
      boxShadow: 'none',
    }}
  >
    <IconButton sx={{ p: '10px', fontSize: '1.5rem' }} aria-label="menu">
      <CiSearch />
    </IconButton>
    <InputBase
      sx={{ ml: 1, flex: 1, height: '100%' }}
      placeholder="Search For Nothing"
      inputProps={{ 'aria-label': 'search for nothing' }}
    />
    <IconButton type="button" aria-label="search" />
  </Paper>
);

export default Search;
