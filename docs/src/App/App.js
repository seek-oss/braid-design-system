import React, { Component } from 'react';
import { ThemeProvider, Text, Alert, Checkbox } from '../../../src/components';
import jobStreetTheme from '../../../src/themes/jobStreet';

export default () => (
  <ThemeProvider theme={jobStreetTheme}>
    <div style={{ maxWidth: 500, margin: '0 auto' }}>
      <Text marginBottom="largest">Coming soon.</Text>
      <Text size="heading" marginBottom="large">
        This is a heading
      </Text>
      <Alert tone="info" marginBottom="larger">
        This is a piece of information that we'd like to bring to your
        attention. If you miss it, it's not the end of the world.
      </Alert>
      <Checkbox
        label="I agree to the terms and conditions"
        tone="critical"
        message="You must agree to continue"
      />
    </div>
  </ThemeProvider>
);
