import React, { Component } from 'react';
import { ThemeProvider, Text } from '../../../src/components';
import jobStreetTheme from '../../../src/themes/jobStreet';

export default () => (
  <ThemeProvider theme={jobStreetTheme}>
    <Text>Coming soon.</Text>
  </ThemeProvider>
);
