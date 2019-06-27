import { ComponentDocs } from '../../../site/src/types';

const docs: ComponentDocs = {
  examples: [
    {
      code: `
        import { wireframe } from 'braid-design-system/lib/themes';

        export default () => (
          <BraidProvider theme={wireframe}>
            ...
          </BraidProvider>
        );
      `,
    },
  ],
};

export default docs;
