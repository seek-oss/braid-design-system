import React from 'react';
import { ComponentDocs } from '../../../docs/src/types';
import { ThemeTokensConsumer } from './ThemeTokensConsumer';

const docs: ComponentDocs = {
  storybook: false,
  examples: [
    {
      render: () => (
        <ThemeTokensConsumer>
          {tokens => (
            <span>The row height for this theme is {tokens.rowHeight}.</span>
          )}
        </ThemeTokensConsumer>
      ),
      code: `
        <ThemeTokensConsumer>
          {tokens => (
            <span>
              The row height for this theme is {tokens.rowHeight}.
            </span>
          )}
        </ThemeTokensConsumer>
      `,
    },
  ],
};

export default docs;
