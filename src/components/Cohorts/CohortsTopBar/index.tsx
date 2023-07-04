import { Box, Grid } from '@mui/material';
import { styled } from 'styled-components';
import { FaUserFriends } from 'react-icons/fa';
import InputWithIcon from './InputWithIcon';
import LoadingBtn from './LoadingButton';

const ButtonsWrapper = styled.div`
  display: flex;
  column-gap: 10px;
  padding: 5px;
  background-color: #ffff;
  border-radius: 0.3rem;
`;

const CohortTopBar = ({ cohortsCount, setAll }: { cohortsCount: string; setAll: boolean }) => (
  <Grid container sx={{ marginBottom: '40px', justifyContent: 'space-between' }}>
    <Grid item sm={6} lg={6} md={6} xs={12} sx={{ display: 'flex', alignItems: 'center' }}>
      <ButtonsWrapper>
        <LoadingBtn
          btnTitle="All Cohort"
          onClick={() => setAll(true)}
          cohortsCount={cohortsCount}
          btnStartIcon={<FaUserFriends />}
        />
        <LoadingBtn
          btnTitle="My Cohort"
          cohortsCount={cohortsCount}
          onClick={() => setAll(false)}
          btnStartIcon={<FaUserFriends />}
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
