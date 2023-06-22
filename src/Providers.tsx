import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { RouterProvider } from 'react-router-dom';
import { theme } from './constants';
import router from './router';

const Providers = ({ children }: { children: ReactNode }) => (
  <ThemeProvider theme={theme}>
    {children}
    <RouterProvider router={router} />
  </ThemeProvider>
);

export default Providers;
