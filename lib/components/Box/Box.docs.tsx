import React from 'react';
import { ComponentDocs, ComponentExample } from '../../../site/src/types';
import { Box } from './Box';
import { HideCode } from '../private/HideCode';
import tokens from '../../themes/wireframe/tokens';

type Space = keyof typeof tokens.spacing.column;
const spacing = Object.keys(tokens.spacing.column) as Space[];

const docs: ComponentDocs = {
  storybook: false,
  examples: spacing.map(
    (space): ComponentExample => ({
      label: `"${space}" spacing`,
      Container: ({ children }) => (
        <Box
          background="formAccent"
          style={{ overflow: 'auto', maxWidth: '300px' }}
        >
          {children}
        </Box>
      ),
      Example: () => (
        <Box
          {...(space === 'gutter'
            ? {
                marginX: space,
                marginY: 'none',
              }
            : {
                margin: space,
              })}
        >
          <HideCode>
            <Box style={{ background: 'whitesmoke', height: '20px' }} />
          </HideCode>
        </Box>
      ),
    }),
  ),
};

export default docs;
