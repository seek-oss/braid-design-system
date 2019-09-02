import { ComponentDocs } from '../../../site/src/types';

const docs: ComponentDocs = {
  examples: [
    {
      code: `
        import { BraidProviderLoadable } from 'braid-design-system';

        export default ({ themeName }) => (
          <BraidProviderLoadable themeName="themeName">
            ...
          </BraidProviderLoadable>
        );
      `,
    },
  ],
};

export default docs;
