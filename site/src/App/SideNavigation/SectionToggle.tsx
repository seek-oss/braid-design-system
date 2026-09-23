import { Bleed, Box, IconChevron, Spread, Text } from 'braid-design-system';

import * as styles from './SectionToggle.css';

interface SectionToggleProps {
  label: string;
  expanded: boolean;
  controls: string;
  onClick: () => void;
}

/**
 * Full width disclosure button for the mobile side navigation, bled to align
 * its label with the navigation items it reveals.
 */
export const SectionToggle = ({
  label,
  expanded,
  controls,
  onClick,
}: SectionToggleProps) => (
  <Bleed horizontal="small">
    <Box
      component="button"
      type="button"
      cursor="pointer"
      width="full"
      textAlign="left"
      borderRadius="standard"
      padding="small"
      outline="focus"
      aria-expanded={expanded}
      aria-controls={controls}
      onClick={onClick}
      className={styles.toggle}
    >
      <Spread component="span" space="small" alignY="center">
        <Text size="small" weight="medium">
          {label}
        </Text>
        <Text size="small" tone="secondary">
          <IconChevron direction={expanded ? 'up' : 'down'} />
        </Text>
      </Spread>
    </Box>
  </Bleed>
);
