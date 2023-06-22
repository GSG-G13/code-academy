import { Outlet, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  { path: '/', element: <div><h1>Home - Landing Page</h1></div> },
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
        <h1>Academy</h1>
        <Outlet />
      </div>
    ),
    children: [
      { index: true, element: <div>Home</div> },
      { path: 'cohorts', element: <div>Cohorts</div> },
      { path: 'members', element: <div>Members</div> },
      { path: 'my-profile', element: <div>My Profile</div> },
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
