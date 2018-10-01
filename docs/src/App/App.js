import { jobStreet, seekAnz, seekAsia } from '../../../lib/themes';
import React, { Component } from 'react';
import {
  ThemeProvider,
  Text,
  Alert,
  ChecklistCard,
  Checkbox,
  Box
} from '../../../lib/components';

const themes = [jobStreet, seekAnz, seekAsia];
const themeNames = Object.keys(themes);

const noop = () => {};

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
          <Alert tone="critical" marginBottom="small">
            This is a critical error.
          </Alert>
          <Alert tone="info" marginBottom="larger">
            This is a piece of information that we'd like to bring to your
            attention. If you miss it, it's not the end of the world.
          </Alert>
          <Box paddingLeft="gutter" paddingRight="gutter">
            <Checkbox
              id="1"
              label="I agree to the terms and conditions"
              tone="critical"
              message="You must agree to continue"
              checked={false}
              onChange={noop}
            />
          </Box>
          <ChecklistCard borderWidth="standard" marginTop="large">
            <Checkbox
              id="2"
              label="Hello world"
              message={false}
              checked
              onChange={noop}
            >
              <Text>Hello!</Text>
            </Checkbox>
            <Checkbox
              id="3"
              label="Oh no"
              message={false}
              onChange={noop}
              checked={false}
              disabled
            >
              <Text>I'm leg disabled!</Text>
            </Checkbox>
            <Checkbox
              id="3"
              label="Hello world"
              message="Oops, something went wrong!"
              tone="critical"
              checked={false}
              onChange={noop}
            >
              <Text>Hello!</Text>
            </Checkbox>
            <Checkbox
              id="4"
              label="Hello world"
              message={false}
              checked={false}
              onChange={noop}
            >
              <Text>Hello!</Text>
            </Checkbox>
          </ChecklistCard>
        </div>
      </ThemeProvider>
    );
  }
}
