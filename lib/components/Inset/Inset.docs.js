import React from 'react';
import Inset from './Inset';
import Box from '../Box/Box';
import tokens from '../../themes/wireframe/tokens/tokens';

const spaceScale = Object.keys(tokens.rowSpacing);

export default {
  component: Inset,
  storybook: false,
  examples: spaceScale.map(space => ({
    label: `"${space}" vertical spacing`,
    render: () => (
      <Box
        backgroundColor="formAccent"
        style={{ overflow: 'auto' }}
        paddingBottom="medium"
        paddingRight="medium"
        paddingLeft="medium"
        paddingTop="medium"
      >
        <Inset verticalPadding={space} backgroundColor="card">
          <Box
            borderRadius="standard"
            style={{ backgroundColor: 'pink', height: '20px' }}
          />
        </Inset>
      </Box>
    )
  }))
};
