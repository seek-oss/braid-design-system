import { ComponentDocs } from '../../../docs/src/types';

const docs: ComponentDocs = {
  examples: [
    {
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

export default docs;
