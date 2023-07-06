import { Outlet, createBrowserRouter } from 'react-router-dom';
import { Members, LoginUser, LoginAdmin, Cohorts } from '../pages';
import MiniDrawer from '../components/Layout/user/layout';
import RequireAuthProvider from '../contexts';
import Layout from '../components/Layout/admin/layout';
import RequireAuthAdminProvider from '../contexts/AdminContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <h1>Home - Landing Page</h1>
      </div>
    ),
  },
  // admin routes
  {
    path: '/admin',
    element: (
      <RequireAuthAdminProvider>
        <Layout>
          <Outlet />
        </Layout>
      </RequireAuthAdminProvider>
    ),
    children: [
      {
        index: true,
        element: <div>Home</div>,
      },
      { path: 'community', element: <div>Community</div> },
      { path: 'cohorts', element: <Cohorts /> },
      { path: 'cohorts/:cohortName', element: <div>Single Cohort</div> },
      { path: 'members', element: <Members /> },
      { path: 'my-profile', element: <div>My Profile</div> },
      { path: 'saves', element: <div>Saves</div> },
    ],
  },
  {
    path: '/admin/login',
    element: <LoginAdmin />,
  },
  // user routes
  {
    path: '/academy',
    element: (
      <RequireAuthProvider>
        <MiniDrawer>
          <Outlet />
        </MiniDrawer>
      </RequireAuthProvider>
    ),
    children: [
      {
        index: true,
        element: <div>Home</div>,
      },
      { path: 'community', element: <div>Community</div> },
      { path: 'cohorts', element: <Cohorts /> },
      { path: 'cohorts/:cohortName', element: <div>Single Cohort</div> },
      { path: 'members', element: <Members /> },
      { path: 'my-profile', element: <div>My Profile</div> },
      { path: 'saves', element: <div>Saves</div> },
    ],
  },
  {
    path: '/academy/login',
    element: <LoginUser />,
  },
  {
    path: '/admin/*',
    element: <div>Admin - Not Found</div>,
  },
  {
    path: '/academy/*',
    element: <div>Academy - Not Found</div>,
  },
  {
    path: '*',
    element: <div>Not Found</div>,
  },
]);

export default router;
