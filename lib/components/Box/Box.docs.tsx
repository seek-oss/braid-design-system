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
      render: () => (
        <Box
          marginLeft={space}
          marginRight={space}
          {...(space === 'gutter'
            ? {
                marginTop: 'none',
                marginBottom: 'none',
              }
            : {
                marginTop: space,
                marginBottom: space,
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
