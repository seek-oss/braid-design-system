import React from 'react';
import { ComponentDocs, ComponentExample } from '../../../site/src/types';
import { Box } from './Box';
import { Placeholder } from '../private/Placeholder/Placeholder';
import tokens from '../../themes/wireframe/tokens';

type Space = keyof typeof tokens.space;
const spaceScale = Object.keys(tokens.space) as Space[];

const docs: ComponentDocs = {
  category: 'Layout',
  screenshotWidths: [],
  examples: spaceScale.map(
    (space): ComponentExample => ({
      label: `"${space}" space`,
      Container: ({ children }) => (
        <Box
          background="neutralLight"
          style={{ overflow: 'auto', maxWidth: '300px' }}
        >
          {children}
        </Box>
      ),
      Example: () => (
        <Box padding={space}>
          <Placeholder height={100} />
        </Box>
      ),
    }),
  ),
};

export default docs;
