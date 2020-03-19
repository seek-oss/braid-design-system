import * as React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { useColor } from './useColor';

const docs: ComponentDocs = {
  category: 'Logic',
  screenshotWidths: [],
  examples: [
    {
      playroom: false,
      Example: () => {
        const { background } = useColor();

        return (
          <div
            style={{
              width: 50,
              height: 50,
              backgroundColor: background.brand,
            }}
          />
        );
      },
      code: `
        const { background } = useColor();

        return (
          <div
            style={{
              width: 50,
              height: 50,
              backgroundColor: background.brand,
            }}
          />
        );
      `,
    },
  ],
};

export default docs;
