import ThemeProvider from './ThemeProvider';

export default {
  component: ThemeProvider,
  examples: [
    {
      label: '',
      code: `
        import { wireframe } from 'braid-design-system/lib/themes';

        export default () => (
          <ThemeProvider theme={wireframe}>
            ...
          </ThemeProvider>
        );
      `
    }
  ]
};
