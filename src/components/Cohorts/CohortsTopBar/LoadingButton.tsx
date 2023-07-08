import { Box } from '@mui/material';
import React from 'react';
import { LoadingButton } from '@mui/lab';
import { MembersCountBox } from '../../Members/CohortMembersTopBar/style';

interface IProps {
  btnTitle: string;
  btnStartIcon: React.ReactElement;
  cohortsCount: string;
  handleClick: () => void;
}

const LoadingBtn = ({ btnTitle, btnStartIcon, cohortsCount, handleClick }: IProps) => (
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
      loadingPosition="start"
      variant="contained"
    >
      <p>{btnTitle}</p>
      <MembersCountBox>{cohortsCount}</MembersCountBox>
    </LoadingButton>
  </Box>
);

export default LoadingBtn;
