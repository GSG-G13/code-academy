import React from 'react';
import { Box, Grid } from '@mui/material';
import { styled } from '@mui/system';
import { FaUserFriends } from 'react-icons/fa';
import InputWithIcon from './InputWithIcon';
import LoadingBtn from './LoadingButton';

const ButtonsWrapper = styled('div')`
  display: flex;
  column-gap: 10px;
  padding: 5px;
  background-color: #ffffff;
  border-radius: 0.3rem;
`;

type CohortTopBarProps = {
  cohortsCount: string;
  myCohortsCount: string;
  refetchAllCohortsCount: () => void;
  refetchMyCohortsCount: () => void;
  allLoadingQuery: boolean;
  myLoading: boolean;
};

const CohortTopBar: React.FC<CohortTopBarProps> = ({
  cohortsCount,
  refetchAllCohortsCount,
  refetchMyCohortsCount,
  myCohortsCount,
  allLoadingQuery,
  myLoading,
}) => (
  <Grid container sx={{ marginBottom: '40px', justifyContent: 'space-between' }}>
    <Grid item sm={6} lg={6} md={6} xs={12} sx={{ display: 'flex', alignItems: 'center' }}>
      <ButtonsWrapper>
        <LoadingBtn
          btnTitle="All Cohort"
          cohortsCount={cohortsCount}
          handleClick={refetchAllCohortsCount}
          btnStartIcon={<FaUserFriends />}
          isLoading={allLoadingQuery}
        />
        <LoadingBtn
          btnTitle="My Cohort"
          cohortsCount={myCohortsCount}
          handleClick={refetchMyCohortsCount}
          btnStartIcon={<FaUserFriends />}
          isLoading={myLoading}
        />
      </ButtonsWrapper>
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
        <InputWithIcon />
      </Box>
    </Grid>
  </Grid>
);

export default CohortTopBar;
