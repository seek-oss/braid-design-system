import React from 'react';
import Box from './Box';
import tokens from '../../themes/wireframe/tokens';
import { ComponentDocs, ComponentExample } from '../../../docs/src/types';
import { HideCode } from '../private/HideCode';

type Space = keyof typeof tokens.columnSpacing;
const spacing = Object.keys(tokens.columnSpacing) as Space[];

const docs: ComponentDocs = {
  storybook: false,
  examples: spacing.map(
    (space): ComponentExample => ({
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
            <HideCode>
              <Box
                borderRadius="standard"
                style={{ backgroundColor: 'pink', height: '20px' }}
              />
            </HideCode>
          </Box>
        </Box>
      )
    })
  )
};

export default docs;
