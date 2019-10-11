import React, { ReactNode } from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Box } from '../Box/Box';
import { Inline, InlineProps } from './Inline';
import { padding } from '../Box/useBoxStyles.treat';

const spaces = Object.keys(padding.top).filter(
  space => space !== 'none',
) as Array<InlineProps['space']>;

const Container = ({ children }: { children: ReactNode }) => (
  <Box background="infoLight" style={{ maxWidth: '240px' }}>
    {children}
  </Box>
);

const Item = () => (
  <Box background="brand" width="touchable" height="touchable" />
);

const docs: ComponentDocs = {
  examples: [
    ...spaces.map(space => ({
      label: `Space: ${space}`,
      Container,
      Example: () => (
        <Inline space={space}>
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </Inline>
      ),
    })),
    {
      label: "Responsive space, e.g. ['xxsmall', 'medium']",
      Container,
      Example: () => (
        <Inline space={['xxsmall', 'medium']}>
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </Inline>
      ),
    },
  ],
};

export default docs;
