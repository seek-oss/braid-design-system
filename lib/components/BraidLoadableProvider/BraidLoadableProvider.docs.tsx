import { ComponentDocs } from '../../../site/src/types';

const docs: ComponentDocs = {
  category: 'Logic',
  examples: [
    {
      code: `
        import { BraidLoadableProvider } from 'braid-design-system';

        export default () => (
          <BraidLoadableProvider themeName="wireframe">
            ...
          </BraidLoadableProvider>
        );
      `,
    },
  ],
};

export default docs;
