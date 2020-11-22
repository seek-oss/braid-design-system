import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Placeholder } from '../private/Placeholder/Placeholder';
import { useSpace } from './useSpace';

const docs: ComponentDocs = {
  category: 'Logic',
  examples: [
    {
      playroom: false,
      Example: () => {
        const { space, grid } = useSpace();

        return (
          <Placeholder
            width={grid * space.xxlarge}
            height={grid * space.xxlarge}
          />
        );
      },
      code: `
        const { space, grid } = useSpace();

        return (
          <Placeholder
            width={grid * space.xxlarge}
            height={grid * space.xxlarge}
          />
        );
      `,
    },
  ],
};

export default docs;
