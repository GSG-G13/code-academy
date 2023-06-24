import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './constants';

const Providers = ({ children }: { children: ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Providers;
