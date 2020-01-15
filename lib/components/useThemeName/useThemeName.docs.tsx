import React from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { useThemeName } from './useThemeName';
import { Text } from '../Text/Text';
import { Strong } from '../Strong/Strong';

const docs: ComponentDocs = {
  category: 'Logic',
  storybook: false,
  examples: [
    {
      playroom: false,
      Example: () => {
        const themeName = useThemeName();

        return (
          <Text>
            The active theme is <Strong>{themeName}</Strong>.
          </Text>
        );
      },
      code: `
        const themeName = useThemeName();

        return (
          <Text>
            The active theme is <Strong>{themeName}</Strong>.
          </Text>
        );
      `,
    },
  ],
};

export default docs;
