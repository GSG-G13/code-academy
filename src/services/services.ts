import create from './httpService';

const authRoutes = create('/auth');
const usersRoutes = create('/users');
const cohortsRoutes = create('/cohorts');
const membersRoutes = create('/members');
const postsRoutes = create('/posts');
const likesRoutes = create('/likes');
export {
  authRoutes, membersRoutes, usersRoutes, cohortsRoutes, postsRoutes, likesRoutes,
};
