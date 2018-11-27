import React from 'react';
import ThemeTokensConsumer from './ThemeTokensConsumer';

export default {
  component: ThemeTokensConsumer,
  storybook: false,
  examples: [
    {
      label: '',
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
