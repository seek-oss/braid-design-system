/* eslint-disable react/prop-types */
import React from 'react';
import ThemeContext from '../private/ThemeContext';

const ThemeProvider = ({ theme, children }) => (
  <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
);

ThemeProvider.displayName = 'ThemeProvider';

export default ThemeProvider;
