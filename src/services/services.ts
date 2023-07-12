import create from './httpService';

const authRoutes = create('/auth');
const usersRoutes = create('/users');
const cohortsRoutes = create('/cohorts');
const membersRoutes = create('/members');
const postsRoutes = create('/posts');
const likesRoutes = create('/likes');
const uploadRoutes = create('/s3/upload-url');
const profileRoutes = create('/profile');
export {
  authRoutes,
  membersRoutes,
  usersRoutes,
  cohortsRoutes,
  postsRoutes,
  likesRoutes,
  uploadRoutes,
  profileRoutes,
};
