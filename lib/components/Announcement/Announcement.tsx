import React from 'react';
import { useStyles } from 'sku/react-treat';
import { Box } from '../Box/Box';

import * as styleRefs from '../HiddenVisually/HiddenVisually.treat';

interface AnnouncementProps {
  children: string | undefined | null;
}

export const Announcement = ({ children }: AnnouncementProps) => {
  const styles = useStyles(styleRefs);

  return (
    <Box
      position="absolute"
      overflow="hidden"
      aria-live="polite"
      aria-atomic="true"
      className={styles.root}
    >
      {children}
    </Box>
  );
};
