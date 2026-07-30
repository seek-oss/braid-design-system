import { Heading, Link, Stack, Text } from 'braid-design-system';
// TODO: COLORMODE RELEASE
// Use public import
import { Box } from 'braid-src/lib/components/Box/Box';
import { useState } from 'react';

import * as styles from './LandingCard.css';

export interface LandingCardProps {
  href: string;
  label: string;
  description: string;
}

export const LandingCard = ({
  href,
  label,
  description,
}: LandingCardProps) => {
  const [highlighted, setHighlighted] = useState(false);

  return (
    <Box
      position="relative"
      height="full"
      onMouseEnter={() => setHighlighted(true)}
      onMouseLeave={() => setHighlighted(false)}
      onFocusCapture={() => setHighlighted(true)}
      onBlurCapture={() => setHighlighted(false)}
    >
      <Link href={href} className={styles.linkOverlay} aria-label={label} />
      <Box
        background="surface"
        padding="gutter"
        borderRadius="large"
        height="full"
        boxShadow={highlighted ? 'borderNeutral' : 'borderNeutralLight'}
        className={styles.card}
      >
        <Stack space="medium">
          <Box className={styles.media} aria-hidden />
          <Stack space="small">
            <Heading level="4">{label}</Heading>
            <Text tone="secondary">{description}</Text>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};
