import React from 'react';
import { Box } from 'braid-design-system/lib/components';
import { Overlay } from 'braid-design-system/lib/components/private/Overlay/Overlay';
import { ReactNodeNoStrings } from 'braid-design-system/lib/components/private/ReactNodeNoStrings';
import * as styles from './gallery.css';

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
    bottom={bottom ? 0 : undefined}
    left={left ? 0 : undefined}
    right={right ? 0 : undefined}
    top={top ? 0 : undefined}
    padding="small"
    zIndex="sticky"
    className={styles.panel}
  >
    <Overlay
      background="surface"
      borderRadius="standard"
      className={styles.panelBackground}
      visible
    />

    <Box position="relative" display="flex" alignItems="center">
      {children}
    </Box>
  </Box>
);
