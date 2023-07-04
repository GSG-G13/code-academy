import { Box } from '@mui/material';
import React from 'react';
import { LoadingButton } from '@mui/lab';
import { MembersCountBox } from '../../Members/CohortMembersTopBar/style';

interface IProps {
  btnTitle: string;
  btnStartIcon: React.ReactElement;
}

const LoadingBtn = ({ btnTitle, btnStartIcon }: IProps) => {
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
          borderColor: 'rgba(0,0,0,0)',
          padding: '0.5rem 1rem',
          fontFamily: 'Poppins',
          textTransform: 'capitalize',
          fontWeight: '600',
          opacity: '1',
          borderRadius: '0.3rem',
          position: 'relative',
        }}
        onClick={() => handleClick()}
        startIcon={btnStartIcon}
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
