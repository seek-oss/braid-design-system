import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { ThemeNameConsumer } from './ThemeNameConsumer';

const docs: ComponentDocs = {
  category: 'Logic',
  screenshotWidths: [],
  examples: [
    {
      Example: () => (
        <ThemeNameConsumer>
          {(themeName) => <span>The active theme is {themeName}.</span>}
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
