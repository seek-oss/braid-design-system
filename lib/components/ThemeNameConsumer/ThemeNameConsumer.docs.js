import ThemeNameConsumer from './ThemeNameConsumer';

export default {
  component: ThemeNameConsumer,
  examples: [
    {
      label: '',
      code: `
        <ThemeNameConsumer>
          {themeName => <span>The active theme is {themeName}.</span>}
        </ThemeNameConsumer>
      `
    }
  ]
};
