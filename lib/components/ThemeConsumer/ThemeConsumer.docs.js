import ThemeConsumer from './ThemeConsumer';

export default {
  component: ThemeConsumer,
  examples: [
    {
      label: '',
      code: `
        <ThemeConsumer>
          {theme => (
            <span className={theme.atoms.backgroundColor.selection}>
              The active theme is {theme.name}.
              This element has been styled with a 'backgroundColor' atom.
            </span>
          )}
        </ThemeConsumer>
      `
    }
  ]
};
