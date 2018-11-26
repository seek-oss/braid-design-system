import { storiesOf } from 'sku/storybook';
import React from 'react';
import * as themes from '../themes';
import { ThemeProvider } from '../components';

const req = require.context('../components', true, /\.docs\.js$/);
req.keys().forEach(filename => {
  const componentName = filename.match(/([a-zA-Z]+)\.docs\.js$/)[1];
  const stories = storiesOf(componentName, module);

  const docs = req(filename).default;

  if (docs.storybook === false) {
    return;
  }

  docs.examples.forEach(example => {
    if (!example.render) {
      return;
    }

    Object.values(themes).forEach(theme => {
      const label = example.label || componentName;
      stories.add(`${label} (${theme.name})`, () => (
        <ThemeProvider theme={theme}>
          <div>{example.render({ id: 'id' })}</div>
        </ThemeProvider>
      ));
    });
  });
});
