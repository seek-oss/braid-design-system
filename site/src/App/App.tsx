import '../../../lib/reset';
import React, { StrictMode } from 'react';
import { ThemeSettingProvider } from './ThemeSetting';
import { theme as docsSiteTheme } from '../theme/theme.treat';
import { BraidProvider, ToastProvider } from '../../../lib/components';
import { Documentation } from './Documentation/Documentation';

export const App = () => (
  <ThemeSettingProvider>
    <BraidProvider theme={docsSiteTheme}>
      <ToastProvider>
        <StrictMode>
          <Documentation />
        </StrictMode>
      </ToastProvider>
    </BraidProvider>
  </ThemeSettingProvider>
);
