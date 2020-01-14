import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { useThemeTokens } from './useThemeTokens';

const docs: ComponentDocs = {
  category: 'Logic',
  storybook: false,
  examples: [
    {
      playroom: false,
      Example: () => {
        const tokens = useThemeTokens();

        return (
          <div
            style={{
              width: tokens.grid * tokens.space.large,
              height: tokens.grid * tokens.space.large,
              backgroundColor: tokens.color.background.brand,
            }}
          />
        );
      },
      code: `
        const tokens = useThemeTokens();

        return (
          <div
            style={{
              width: tokens.grid * tokens.space.large,
              height: tokens.grid * tokens.space.large,
              backgroundColor: tokens.color.background.brand,
            }}
          />
        );
      `,
    },
  ],
};

export default docs;
