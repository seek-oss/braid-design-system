import { Box, Text } from 'braid-design-system';
import type { ReactElement } from 'react';

interface KeyboardShortcutProps {
  keys: string[];
  shortcutLabel: ReactElement | string;
}

export const KeyboardIcon = ({ children }: { children: React.ReactNode }) => (
  <Box
    display="flex"
    padding="xxsmall"
    background="neutralLight"
    borderRadius="standard"
    alignItems="center"
    justifyContent="center"
  >
    <Text tone="secondary" size="xsmall">
      {children}
    </Text>
  </Box>
);

export const KeyboardShortcut = ({
  keys,
  shortcutLabel,
}: KeyboardShortcutProps) => (
  <Box display="flex" alignItems="center" gap="xxsmall">
    {keys.map((key) => (
      <KeyboardIcon key={key}>{key}</KeyboardIcon>
    ))}
    <Text tone="secondary" size="xsmall">
      {shortcutLabel}
    </Text>
  </Box>
);
