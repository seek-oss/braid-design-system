import React, { type ReactNode } from 'react';
import type { ReactNodeNoStrings } from '../components/private/ReactNodeNoStrings';
import { Text } from '../components/Text/Text';
import { Inline } from '../components/Inline/Inline';
import { Stack } from '../components/Stack/Stack';
import { Tiles } from '../components/Tiles/Tiles';
import { Columns } from '../components/Columns/Columns';
import { Column } from '../components/Column/Column';

const Label = ({ children }: { children: ReactNode }) => (
  <Text baseline={false} size="xsmall" tone="secondary">
    {children}
  </Text>
);

export const LayoutTest = ({ children }: { children: ReactNodeNoStrings }) => (
  <>
    <Label>STANDALONE</Label>
    {children}
    <br />
    <Label>INLINE</Label>
    <Inline space="small">
      {children}
      {children}
    </Inline>
    <br />
    <Label>STACK</Label>
    <Stack space="small">
      {children}
      {children}
    </Stack>
    <br />
    <Label>TILES</Label>
    <Tiles space="small" columns={2}>
      {children}
      {children}
    </Tiles>
    <br />
    <Label>COLUMNS</Label>
    <Columns space="small">
      <Column>{children}</Column>
      <Column>{children}</Column>
    </Columns>
  </>
);
