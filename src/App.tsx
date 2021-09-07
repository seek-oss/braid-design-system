import React from 'react';
import type { AppShell } from '@crackle/build';

const App: AppShell<{ componentName: string }> = ({ children }) => (
  <div>{children}</div>
);

export default App;
