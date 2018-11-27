import ThemeTokensConsumer from './ThemeTokensConsumer';

export default {
  component: ThemeTokensConsumer,
  examples: [
    {
      label: '',
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
