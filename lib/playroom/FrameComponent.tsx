import React, { Fragment, ReactNode } from 'react';
import { ThemeProvider } from '../components';
import { Theme } from '../themes/theme';

interface Props {
  theme: Theme;
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
