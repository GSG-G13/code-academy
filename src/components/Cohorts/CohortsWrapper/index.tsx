import { Grid } from '@mui/material';
import { CohortCard } from '..';

const CohortsWrapper = () => (
  <Grid
    container
    spacing={2}
    columns={{
      xs: 15,
      sm: 15,
      md: 15,
      lg: 15,
    }}
  >
    <CohortCard alt="G13" imgSrc="https://intranet.cera-theme.com/wp-content/themes/cera/assets/images/avatars/user-group.png" cohortName="G13" cohortMembers={20} startDate="20 May" endDate="30 May" />
    <CohortCard alt="G13" imgSrc="https://intranet.cera-theme.com/wp-content/themes/cera/assets/images/avatars/user-group.png" cohortName="G13" cohortMembers={20} startDate="20 May" endDate="30 May" />
    <CohortCard alt="G13" imgSrc="https://intranet.cera-theme.com/wp-content/themes/cera/assets/images/avatars/user-group.png" cohortName="G13" cohortMembers={20} startDate="20 May" endDate="30 May" />
    <CohortCard alt="G13" imgSrc="https://intranet.cera-theme.com/wp-content/themes/cera/assets/images/avatars/user-group.png" cohortName="G13" cohortMembers={20} startDate="20 May" endDate="30 May" />
    <CohortCard alt="G13" imgSrc="https://intranet.cera-theme.com/wp-content/themes/cera/assets/images/avatars/user-group.png" cohortName="G13" cohortMembers={20} startDate="20 May" endDate="30 May" />
    <CohortCard alt="G13" imgSrc="https://intranet.cera-theme.com/wp-content/themes/cera/assets/images/avatars/user-group.png" cohortName="G13" cohortMembers={20} startDate="20 May" endDate="30 May" />
    <CohortCard alt="G13" imgSrc="https://intranet.cera-theme.com/wp-content/themes/cera/assets/images/avatars/user-group.png" cohortName="G13" cohortMembers={20} startDate="20 May" endDate="30 May" />
  </Grid>
);

export default CohortsWrapper;
