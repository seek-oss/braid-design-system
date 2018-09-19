import jobStreetTheme from '../../../src/themes/jobStreet';
import React from 'react';
import {
  ThemeProvider,
  Text,
  Alert,
  ChecklistCard,
  Checkbox
} from '../../../src/components';

export default () => (
  <ThemeProvider theme={jobStreetTheme}>
    <div style={{ maxWidth: 500, margin: '0 auto' }}>
      <Text marginBottom="largest">Coming soon.</Text>
      <Alert tone="info" marginBottom="larger">
        This is a piece of information that we'd like to bring to your
        attention. If you miss it, it's not the end of the world.
      </Alert>
      <Checkbox
        label="I agree to the terms and conditions"
        tone="critical"
        message="You must agree to continue"
      />
      <ChecklistCard borderWidth="standard" marginTop="large">
        <Checkbox label="Hello world" message={false} checked>
          <Text>Hello!</Text>
        </Checkbox>
        <Checkbox
          label="Hello world"
          message="Oops, something went wrong!"
          tone="critical"
        >
          <Text>Hello!</Text>
        </Checkbox>
        <Checkbox label="Hello world" message={false}>
          <Text>Hello!</Text>
        </Checkbox>
      </ChecklistCard>
    </div>
  </ThemeProvider>
);
