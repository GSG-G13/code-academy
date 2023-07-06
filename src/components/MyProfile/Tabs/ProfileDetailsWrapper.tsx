import { TabPanel } from '@mui/lab';
import { Grid, styled } from '@mui/material';
import Posts from '../Posts';
import ProfileDetails from '../ProfileDetails';
import { CohortCard } from '../..';

const ProfileDetailsWrapper = () => (
  <Grid
    container
    spacing={2}
    columns={{
      xs: 15,
      sm: 15,
      md: 15,
      lg: 15,
    }}
    sx={{ paddingTop: '3%' }}
  >
    <Grid item xs={11} sm={11} md={11} lg={11}>
      <TabPanelStyle value="1">
        <Posts
          alt="K"
          src="K"
          username="Karam"
          publishDate="50/10/2002"
          postContent="Karam"
          postImg="K"
          postImgAlt="K"
          likesCount="10"
          commentsCount="10"
        />
      </TabPanelStyle>
      <TabPanelStyle value="2">
        <ProfileDetails />
      </TabPanelStyle>
      <TabPanelStyle value="3">
        <CohortCard
          alt="G13"
          imgSrc="https://intranet.cera-theme.com/wp-content/themes/cera/assets/images/avatars/user-group.png"
          cohortName="G13"
          cohortMembers={20}
          startDate="20 May"
          endDate="30 May"
        />
        <CohortCard
          alt="G13"
          imgSrc="https://intranet.cera-theme.com/wp-content/themes/cera/assets/images/avatars/user-group.png"
          cohortName="G13"
          cohortMembers={20}
          startDate="20 May"
          endDate="30 May"
        />
      </TabPanelStyle>
      <TabPanelStyle value="4">
        <Posts
          alt="K"
          src="K"
          username="Karam"
          publishDate="50/10/2002"
          postContent="Karam"
          postImg="K"
          postImgAlt="K"
          likesCount="10"
          commentsCount="10"
        />
      </TabPanelStyle>
    </Grid>
    <Grid item xs={4} sm={4} md={4} lg={4}>
      <h2>Members Bar Hereeee</h2>
    </Grid>
  </Grid>
);

const TabPanelStyle = styled(TabPanel)`
  padding: 0;
`;

export default ProfileDetailsWrapper;
