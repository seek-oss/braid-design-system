import { ComponentDocs } from '../../../site/src/types';

const docs: ComponentDocs = {
  category: 'Logic',
  examples: [
    {
      code: `
        import wireframe from 'braid-design-system/themes/wireframe';

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
