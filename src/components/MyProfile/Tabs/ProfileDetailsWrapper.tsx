import { TabPanel } from '@mui/lab';
import { Grid } from '@mui/material';
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
  isLiked: boolean;
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
        <TabPanel value="1">
          {posts?.data.data.posts.map((post: IPost) => (
            <Posts
              key={post.id}
              alt={post.username}
              src={post.avatar}
              username={post.username}
              publishDate={convertDate(post.createdAt)}
              postContent={post.content}
              postImg={post.image}
              postImgAlt={post.image}
              likesCount={post.likesCount}
              commentsCount={post.commentsCount}
              isLiked={post.isLiked}
              id={post.id}
            />
          ))}
        </TabPanel>
        <TabPanel value="2">
          <ProfileDetails />
        </TabPanel>
        <TabPanel value="3">
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
        </TabPanel>
        <TabPanel value="4">
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
            id={0}
            isLiked={false}
          />
        </TabPanel>
      </Grid>
      <Grid item xs={4} sm={4} md={4} lg={4}>
        <h2>Members Bar Hereeee</h2>
      </Grid>
    </Grid>
  );
};

export default ProfileDetailsWrapper;
