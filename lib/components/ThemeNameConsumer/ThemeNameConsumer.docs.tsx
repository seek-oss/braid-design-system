import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { ThemeNameConsumer } from './ThemeNameConsumer';

const docs: ComponentDocs = {
  storybook: false,
  examples: [
    {
      render: () => (
        <ThemeNameConsumer>
          {themeName => <span>The active theme is {themeName}.</span>}
        </ThemeNameConsumer>
      ),
      code: `
        <ThemeNameConsumer>
          {themeName => <span>The active theme is {themeName}.</span>}
        </ThemeNameConsumer>
      `,
    },
  ],
};

export default docs;
