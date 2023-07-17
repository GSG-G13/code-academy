import { TabPanel } from '@mui/lab';
import { Grid, styled } from '@mui/material';
import { useQuery } from 'react-query';
import Posts from '../Posts';
import ProfileDetails from '../ProfileDetails';
import { CohortCard } from '../..';
import { cohortsRoutes, profileRoutes } from '../../../services';
import convertDate from '../../../utils/helpers/convertDate';

interface ICohorts {
  id: number;
  thumbnail: string;
  cohort_name: string;
  end_date: string;
  start_date: string;
  members: number;
}
interface IPost {
  avatar: string;
  commentsCount: string;
  content: string;
  createdAt: string;
  id: number;
  image: string;
  likesCount: string;
  savesCount: string;
  updatedAt: string;
  userId: number;
  username: string;
}

const ProfileDetailsWrapper = () => {
  const { data: myCohorts } = useQuery({
    queryKey: ['myCohorts'],
    queryFn: async () => cohortsRoutes.my(),
  });
  const { data: posts } = useQuery({
    queryKey: ['my-posts'],
    queryFn: async () => profileRoutes.posts(),
  });
  return (
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
          {posts?.data.data.posts.map((post: IPost) => (
            <Posts
              alt={post.avatar}
              src={post.avatar}
              username={post.username}
              publishDate={convertDate(post.createdAt)}
              postContent={post.content}
              postImg={post.image}
              postImgAlt={post.image}
              likesCount={post.likesCount}
              commentsCount={post.commentsCount}
            />
          ))}
        </TabPanelStyle>
        <TabPanelStyle value="2">
          <ProfileDetails />
        </TabPanelStyle>
        <TabPanelStyle value="3">
          {myCohorts?.data.data.cohorts.map((cohort: ICohorts) => (
            <CohortCard
              key={cohort.id}
              alt={cohort.cohort_name}
              thumbnail={cohort.thumbnail}
              cohortName={cohort.cohort_name}
              cohortMembers={cohort.members}
              startDate={cohort.start_date}
              endDate={cohort.end_date}
            />
          ))}
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
};

const TabPanelStyle = styled(TabPanel)`
  padding: 0;
`;

export default ProfileDetailsWrapper;
