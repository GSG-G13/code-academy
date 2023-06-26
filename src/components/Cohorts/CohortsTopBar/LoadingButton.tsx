import { Box } from '@mui/material';
import React from 'react';
import { FaUserFriends } from 'react-icons/fa';
import { LoadingButton } from '@mui/lab';
import { MembersCountBox } from '../../Members/CohortMembersTopBar/style';

interface IProps {
    btnTitle: string,
}

const LoadingBtn = ({ btnTitle }: IProps) => {
  const [loading, setLoading] = React.useState(true);
  function handleClick() {
    setLoading(true);
  }

  setTimeout(() => {
    setLoading(false);
  }, 3000);
  return (
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
        <p>{btnTitle}</p>
        <MembersCountBox>80</MembersCountBox>
      </LoadingButton>
    </Box>
  );
};

export default LoadingBtn;
