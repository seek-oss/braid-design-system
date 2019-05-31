import React from 'react';
import { ComponentDocs, ComponentExample } from '../../../docs/src/types';
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
      render: () => (
        <Box
          backgroundColor="formAccent"
          style={{ overflow: 'auto', maxWidth: '300px' }}
        >
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
              <Box style={{ backgroundColor: 'whitesmoke', height: '20px' }} />
            </HideCode>
          </Box>
        </Box>
      ),
    }),
  ),
};

export default docs;
