import { Outlet, createBrowserRouter } from 'react-router-dom';
import { Members, Login, Cohorts } from '../pages';
import MiniDrawer from '../components/Layout/layout';

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
      <div>
        <h1>Admin</h1>
        <Outlet />
      </div>
    ),
    children: [
      { index: true, element: <div>Dashboard</div> },
      { path: 'settings', element: <div>Settings</div> },
    ],
  },
  // user routes
  {
    path: '/academy',
    element: (
      <div>
        <MiniDrawer>
          <Outlet />
        </MiniDrawer>
      </div>
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
    element: <Login />,
  },
  {
    path: '/admin/login',
    element: <div>Admin Login</div>,
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
