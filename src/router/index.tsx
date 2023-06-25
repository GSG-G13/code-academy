import { Outlet, createBrowserRouter } from 'react-router-dom';
import MiniDrawer from '../components/Layout/layout';
import { MainPage, ActivityPage, CohortsPage, LikesPage, ProfileInfoPage } from '../pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <CohortsPage />
        <ProfileInfoPage />
        <LikesPage />
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
      { path: 'cohorts', element: <div>Cohorts</div> },
      { path: 'members', element: <div>Members</div> },
      {
        path: 'my-profile',
        element: <MainPage />,
        children: [
          {
            path: 'Activity',
            element: (
              <ActivityPage />
            ),
          },
          {
            path: 'ProfileInfo',
            element: (
              <ProfileInfoPage />
            ),
          },
          {
            path: 'cohorts',
            element: (
              <CohortsPage />
            ),
          },
          {
            path: 'likes',
            element: (
              <LikesPage />
            ),
          },
        ],
      },

      { path: 'saves', element: <div>Saves</div> },
    ],
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
