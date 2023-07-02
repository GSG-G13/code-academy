import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { RiSearchLine } from 'react-icons/ri';

const InputWithIcon = () => (
  <Box
    sx={{
      '& > :not(style)': { m: 1 },
      display: 'flex',
      alignItems: 'center',

      '& .MuiOutlinedInput-root': {
        height: '50px',
        '& fieldset': {
          borderColor: '#ffffff',
        },
        '&:hover fieldset': {
          borderColor: '#ffffff',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#ffffff',
        },
      },
    }}
  >
    <TextField
      id="input-with-icon-textfield"
      placeholder="Search Groups..."
      size="medium"
      sx={{
        backgroundColor: '#fff',
        borderRadius: '4px',
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <RiSearchLine />
          </InputAdornment>
        ),
      }}
      variant="outlined"
    />
  </Box>
);

export default InputWithIcon;
