import React from 'react';
import ThemeTokensConsumer from './ThemeTokensConsumer';
import { ComponentDocs } from '../../../docs/src/types';

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
      `
    }
  ]
};

export default docs;
