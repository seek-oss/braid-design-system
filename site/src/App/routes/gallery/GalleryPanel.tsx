import React from 'react';
import { useStyles } from 'sku/react-treat';
import { Box } from '../../../../../lib/components';
import { Overlay } from '../../../../../lib/components/private/Overlay/Overlay';
import { ReactNodeNoStrings } from '../../../../../lib/components/private/ReactNodeNoStrings';
import * as styleRefs from './gallery.treat';

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
}) => {
  const styles = useStyles(styleRefs);
  return (
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
        background="card"
        borderRadius="standard"
        className={styles.panelBackground}
        visible
      />

      <Box position="relative" display="flex" alignItems="center">
        {children}
      </Box>
    </Box>
  );
};
