import React from 'react';
import { ThemeProvider } from '../components';

export default ({ theme, children }) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <style>{`html,body { margin: 0; }`}</style>
      {children}
    </React.Fragment>
  </ThemeProvider>
);
