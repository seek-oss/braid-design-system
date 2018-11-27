import ThemeTokenConsumer from './ThemeTokenConsumer';

export default {
  component: ThemeTokenConsumer,
  examples: [
    {
      label: '',
      code: `
        <ThemeTokenConsumer>
          {tokens => (
            <span>
              The row height for this theme is {tokens.rowHeight}.
            </span>
          )}
        </ThemeTokenConsumer>
      `
    }
  ]
};
