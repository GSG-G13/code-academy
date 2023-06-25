import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import { FaUserFriends } from 'react-icons/fa';
import { RiSoundModuleLine } from 'react-icons/ri';
import { Grid } from '@mui/material';
import { MembersCountBox, SearchBtn } from './style';
import SelectSmall from './SelectSmall';

const CohortMembersTopBar = () => {
  const [loading, setLoading] = React.useState(true);
  function handleClick() {
    setLoading(true);
  }

  window.onload = () => setLoading(false);

  return (
    <Grid container sx={{ marginBottom: '40px', justifyContent: 'space-between' }}>
      <Grid item sm={6} lg={6} md={6} xs={12} sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ '& > button': { m: 0 } }}>
          <LoadingButton
            sx={{
              backgroundColor: '#4E64DD',
              'border-color': 'rgba(0,0,0,0)',
              padding: '0.5rem 1rem',
              fontFamily: 'Poppins',
              textTransform: 'capitalize',
              fontWeight: '600',
              opacity: '1',
              borderRadius: '0.3rem',
              position: 'relative',
            }}
            // eslint-disable-next-line react/jsx-no-bind
            onClick={handleClick}
            startIcon={<FaUserFriends />}
            loading={loading}
            loadingPosition="start"
            variant="contained"
          >
            <p>All Members</p>
            <MembersCountBox>80</MembersCountBox>
          </LoadingButton>
        </Box>
      </Grid>
      <Grid
        item
        sm={6}
        lg={3}
        md={6}
        xs={12}
        sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}
      >
        <Box sx={{ '& > button': { m: 0 } }}>
          <SelectSmall />
        </Box>
        <Box sx={{ '& > button': { marginLeft: '10px' } }}>
          <SearchBtn>
            <RiSoundModuleLine />
          </SearchBtn>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CohortMembersTopBar;
