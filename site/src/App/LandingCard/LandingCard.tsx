import { Heading, Link, Stack, Text } from 'braid-design-system';
// TODO: COLORMODE RELEASE
// Use public import
import { Box } from 'braid-src/lib/components/Box/Box';
import type { ReactNode } from 'react';

import * as styles from './LandingCard.css';

export type IllustrationBackground = keyof typeof styles.mediaBackground;

export interface LandingCardProps {
  href: string;
  label: string;
  description: string;
  illustration?: ReactNode;
  illustrationBackground?: IllustrationBackground;
}

export const LandingCard = ({
  href,
  label,
  description,
  illustration,
  illustrationBackground,
}: LandingCardProps) => (
  <Box position="relative" height="full">
    <Link href={href} className={styles.linkOverlay} aria-label={label} />
    <Box
      background="surface"
      overflow="hidden"
      borderRadius="large"
      height="full"
      className={styles.card}
    >
      {illustration ? (
        <Box
          className={[
            styles.media,
            illustrationBackground
              ? styles.mediaBackground[illustrationBackground]
              : styles.mediaCanvas,
          ]}
          aria-hidden
        >
          <Box className={styles.illustration}>{illustration}</Box>
        </Box>
      ) : null}
      <Box padding="gutter">
        <Stack space="medium">
          <Heading level="4">{label}</Heading>
          <Text tone="secondary">{description}</Text>
        </Stack>
      </Box>
    </Box>
  </Box>
);
