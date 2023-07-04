import { Grid, Tab, styled } from '@mui/material';
import MembersBar from '../MembersBar';
import PostsWrapper from '../PostsWrapper';

const MyCohortWrapper = () => (
  <Grid
    container
    spacing={3}
    columns={{
      xs: 15,
      sm: 15,
      md: 15,
      lg: 15,
    }}
  >
    <PostsWrapper />
    <MembersBar barTitle="Members">
      <TabStyled label="Students" value="1" />
      <TabStyled label="Mentors" value="2" />
      <TabStyled label="CA-Team" value="3" />
    </MembersBar>
  </Grid>
);

const TabStyled = styled(Tab)`
  flex: 1;
  padding: 5px;
  font-size: 0.8rem;
`;

export default MyCohortWrapper;
