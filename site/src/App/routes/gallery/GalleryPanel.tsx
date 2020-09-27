import React from 'react';
import { Box, Inline } from '../../../../../lib/components';
import { ReactNodeNoStrings } from '../../../../../lib/components/private/ReactNodeNoStrings';

export const GalleryPanel = ({
  children,
  bottom,
  left,
  right,
  top,
}: {
  children: ReactNodeNoStrings;
  bottom?: boolean;
  left?: boolean;
  right?: boolean;
  top?: boolean;
}) => (
  <Box
    position="fixed"
    margin="small"
    borderRadius="standard"
    background="card"
    bottom={bottom ? 0 : undefined}
    left={left ? 0 : undefined}
    right={right ? 0 : undefined}
    top={top ? 0 : undefined}
    display="flex"
    alignItems="center"
    height="touchable"
    paddingX={['small', 'gutter']}
    zIndex="sticky"
    style={{
      boxShadow: '0 2px 5px 1px rgba(28,28,28,.2)',
    }}
  >
    <Inline space="small" alignY="center">
      {children}
    </Inline>
  </Box>
);
