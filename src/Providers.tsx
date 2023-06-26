import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
<<<<<<< HEAD
import { RouterProvider } from 'react-router-dom';
=======
import { QueryClient, QueryClientProvider } from 'react-query';
>>>>>>> 3271b20f402fbc50b621fba533ffd4e33343286b
import { theme } from './constants';
import router from './router';

const queryClient = new QueryClient();
const Providers = ({ children }: { children: ReactNode }) => (
<<<<<<< HEAD
  <ThemeProvider theme={theme}>
    {children}
    <RouterProvider router={router} />
  </ThemeProvider>
=======
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </QueryClientProvider>
>>>>>>> 3271b20f402fbc50b621fba533ffd4e33343286b
);

export default Providers;
