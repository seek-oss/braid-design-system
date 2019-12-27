import React from 'react';
import { ComponentDocs, ComponentExample } from '../../../site/src/types';
import { Box } from './Box';
import { HideCode } from '../private/HideCode';
import tokens from '../../themes/wireframe/tokens';

type Space = keyof typeof tokens.space;
const spaceScale = Object.keys(tokens.space) as Space[];

const docs: ComponentDocs = {
  category: 'Layout',
  storybook: false,
  screenshotWidths: [320],
  examples: spaceScale.map(
    (space): ComponentExample => ({
      label: `"${space}" space`,
      Container: ({ children }) => (
        <Box
          background="formAccent"
          style={{ overflow: 'auto', maxWidth: '300px' }}
        >
          {children}
        </Box>
      ),
      Example: () => (
        <Box margin={space}>
          <HideCode>
            <Box style={{ background: 'whitesmoke', height: '20px' }} />
          </HideCode>
        </Box>
      ),
    }),
  ),
};

export default docs;
