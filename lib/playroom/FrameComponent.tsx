import React, { Fragment, ReactNode } from 'react';
import { ThemeProvider } from '../components';
import { ThemeProviderProps } from '../components/ThemeProvider/ThemeProvider';

interface Props {
  theme: ThemeProviderProps['theme'];
  children: ReactNode;
}

export default ({ theme, children }: Props) => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <style>{`html,body { margin: 0; }`}</style>
      {children}
    </Fragment>
  </ThemeProvider>
);
