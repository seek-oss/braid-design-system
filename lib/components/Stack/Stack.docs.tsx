import React, { ReactNode } from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Box } from '../Box/Box';
import { Stack, StackProps } from './Stack';
import { HideCode } from '../private/HideCode';
import { Heading } from '../Heading/Heading';
import { padding } from '../Box/useBoxStyles.treat';

const spaces = Object.keys(padding.top).filter(
  space => space !== 'none',
) as Array<StackProps['space']>;

const Container = ({ children }: { children: ReactNode }) => (
  <Box background="infoLight" style={{ maxWidth: '300px' }}>
    {children}
  </Box>
);

const Item = () => (
  <Box
    background="card"
    boxShadow="borderStandard"
    borderRadius="standard"
    padding="small"
  />
);

const Header = ({ children = 'Content' }: { children?: ReactNode }) => (
  <Box background="card">
    <Heading level="3">{children}</Heading>
  </Box>
);

const docs: ComponentDocs = {
  category: 'Layout',
  migrationGuide: true,
  examples: [
    ...spaces.map(space => ({
      label: `Space: ${space}`,
      Container,
      Example: () => (
        <Stack space={space}>
          <HideCode>
            <Header>{`Stack space: ${space}`}</Header>
          </HideCode>
          <HideCode>
            <Item />
          </HideCode>
          <HideCode>
            <Item />
          </HideCode>
        </Stack>
      ),
    })),
    {
      label: 'Dividers',
      Container,
      Example: () => (
        <Stack space="gutter" dividers>
          <HideCode>
            <Header>Stack with dividers</Header>
          </HideCode>
          <HideCode>
            <Item />
          </HideCode>
          <HideCode>
            <Item />
          </HideCode>
        </Stack>
      ),
    },
  ],
};

export default docs;
