import * as themes from '../../../src/themes';
import React, { Component } from 'react';
import {
  ThemeProvider,
  Text,
  Alert,
  ChecklistCard,
  Checkbox,
  Box
} from '../../../src/components';

const themeNames = Object.keys(themes);

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      themeIndex: 0
    };
  }

  toggleTheme = () => {
    this.setState(state => ({
      themeIndex: (state.themeIndex + 1) % themeNames.length
    }));
  };

  render() {
    const { themeIndex } = this.state;

    return (
      <ThemeProvider theme={themes[themeNames[themeIndex]]}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <Box
            paddingLeft="gutter"
            paddingRight="gutter"
            paddingTop="large"
            paddingBottom="large"
          >
            <button onClick={this.toggleTheme}>Toggle theme</button>
          </Box>
          <Alert tone="info" marginBottom="larger">
            This is a piece of information that we'd like to bring to your
            attention. If you miss it, it's not the end of the world.
          </Alert>
          <Box paddingLeft="gutter" paddingRight="gutter">
            <Checkbox
              label="I agree to the terms and conditions"
              tone="critical"
              message="You must agree to continue"
            />
          </Box>
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
  }
}
