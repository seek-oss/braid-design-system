import { Heading, Link, Stack, Text } from 'braid-design-system';
// TODO: COLORMODE RELEASE
// Use public import
import { Box } from 'braid-src/lib/components/Box/Box';
import type { ReactNode } from 'react';

import * as styles from './LandingCard.css';

export interface LandingCardProps {
  href: string;
  label: string;
  description: string;
  illustration?: ReactNode;
  illustrationSize?: 'standard' | 'compact';
}

export const LandingCard = ({
  href,
  label,
  description,
  illustration,
  illustrationSize = 'standard',
}: LandingCardProps) => {
  const compact = Boolean(illustration) && illustrationSize === 'compact';
  const mediaClass = compact ? styles.mediaCompact : styles.media;

  const media = illustration ? (
    <Box className={[mediaClass, styles.mediaCanvas]} aria-hidden>
      <Box className={styles.illustration}>{illustration}</Box>
    </Box>
  ) : null;

  const copy = (
    <Box padding="gutter">
      <Stack space="medium">
        <Heading level="4">{label}</Heading>
        <Text tone="secondary">{description}</Text>
      </Stack>
    </Box>
  );

  return (
    <Box position="relative" height="full">
      <Link href={href} className={styles.linkOverlay} aria-label={label} />
      <Box
        background={{ lightMode: 'surface', darkMode: 'surfaceDark' }}
        overflow="hidden"
        borderRadius="large"
        height="full"
        className={styles.card}
      >
        {compact ? (
          <Box className={styles.compactLayout}>
            {media}
            {copy}
          </Box>
        ) : (
          <>
            {media}
            {copy}
          </>
        )}
      </Box>
    </Box>
  );
};
