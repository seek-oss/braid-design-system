import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { useSpace } from './useSpace';

const docs: ComponentDocs = {
  category: 'Logic',
  screenshotWidths: [],
  examples: [
    {
      playroom: false,
      Example: () => {
        const { space, grid } = useSpace();

        return (
          <div
            style={{
              width: grid * space.large,
              height: grid * space.large,
              backgroundColor: 'deepskyblue',
            }}
          />
        );
      },
      code: `
        const { space, grid } = useSpace();

        return (
          <div
            style={{
              width: grid * space.large,
              height: grid * space.large,
              backgroundColor: 'deepskyblue',
            }}
          />
        );
      `,
    },
  ],
};

export default docs;
