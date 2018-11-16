import React from 'react';
import Box from './Box';
import tokens from '../../themes/wireframe/tokens/tokens';

const spaceScale = Object.keys(tokens.columnSpacing);

export default {
  component: Box,
  storybook: false,
  examples: spaceScale.map(space => ({
    label: `"${space}" spacing`,
    render: () => (
      <Box backgroundColor="formAccent" style={{ overflow: 'auto' }}>
        <Box
          paddingLeft={space}
          paddingRight={space}
          marginLeft={space}
          marginRight={space}
          {...(space === 'gutter'
            ? {
                paddingTop: 'small',
                paddingBottom: 'small',
                marginTop: 'small',
                marginBottom: 'small'
              }
            : {
                paddingTop: space,
                paddingBottom: space,
                marginTop: space,
                marginBottom: space
              })}
          backgroundColor="card"
          borderRadius="standard"
        >
          <Box
            borderRadius="standard"
            style={{ backgroundColor: 'pink', height: '20px' }}
          />
        </Box>
      </Box>
    )
  }))
};
