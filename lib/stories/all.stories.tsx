import { storiesOf } from 'sku/@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import values from 'lodash/values';
import * as themes from '../themes';
import { ThemeProvider } from '../components';
import { ComponentDocs } from '../../docs/src/types';

const req = require.context('../components', true, /\.docs\.tsx?$/);
req.keys().forEach(filename => {
  const matches = filename.match(/([a-zA-Z]+)\.docs\.tsx?$/);
  if (!matches) {
    return;
  }

  const componentName = matches[1];
  const stories = storiesOf(componentName, module);
  const docs = req(filename).default as ComponentDocs;

  if (docs.storybook === false) {
    return;
  }

  docs.examples.forEach(({ label = componentName, render }) => {
    if (!render) {
      return;
    }

    values(themes).forEach(theme => {
      stories.add(`${label} (${theme.name})`, () => (
        <BrowserRouter>
          <ThemeProvider theme={theme}>{render({ id: 'id' })}</ThemeProvider>
        </BrowserRouter>
      ));
    });
  });
});
