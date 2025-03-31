import { useId } from 'react';

import { Box } from '../../Box/Box';

import * as styles from '../../HiddenVisually/HiddenVisually.css';

export const containerPrefix = 'braid-announcement-container';

interface AnnouncementProps {
  children: string | undefined | null;
}

export const Announcement = ({ children }: AnnouncementProps) => {
  const announcementContainerId = `${containerPrefix}-${useId()}`;

  return (
    <Box
      id={announcementContainerId}
      aria-live="polite"
      aria-atomic="true"
      position="absolute"
      overflow="hidden"
      className={styles.root}
    >
      {children}
    </Box>
  );
};
