import React from 'react';
import ThemeNameConsumer from './ThemeNameConsumer';

export default {
  component: ThemeNameConsumer,
  examples: [
    {
      label: '',
      render: () => (
        <ThemeNameConsumer>
          {themeName => <span>The active theme is {themeName}.</span>}
        </ThemeNameConsumer>
      ),
      code: `
        <ThemeNameConsumer>
          {themeName => <span>The active theme is {themeName}.</span>}
        </ThemeNameConsumer>
      `
    }
  ]
};
