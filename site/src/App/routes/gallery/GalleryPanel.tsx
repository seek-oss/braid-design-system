import React from 'react';
import { useStyles } from 'sku/react-treat';
import { Box, Inline } from '../../../../../lib/components';
import { InlineProps } from '../../../../../lib/components/Inline/Inline';
import { Overlay } from '../../../../../lib/components/private/Overlay/Overlay';
import { ReactNodeNoStrings } from '../../../../../lib/components/private/ReactNodeNoStrings';
import * as styleRefs from './gallery.treat';

export const GalleryPanel = ({
  children,
  bottom,
  left,
  right,
  top,
  space = 'small',
}: {
  children: ReactNodeNoStrings;
  bottom?: boolean;
  left?: boolean;
  right?: boolean;
  top?: boolean;
  space?: InlineProps['space'];
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
      display="flex"
      alignItems="center"
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

      <Box position="relative">
        <Inline space={space} alignY="center">
          {children}
        </Inline>
      </Box>
    </Box>
  );
};
