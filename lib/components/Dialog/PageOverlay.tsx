import React from 'react';
import { Box } from '../Box/Box';

interface Props {
  onClick?: () => void;
  active: boolean;
  modal: boolean;
}
export const PageOverlay = ({ onClick, active, modal }: Props) => (
  <Box
    position="fixed"
    top={0}
    bottom={0}
    left={0}
    right={0}
    opacity={!active ? 0 : undefined}
    transition="fast"
    onClick={onClick}
    style={{
      background: modal ? 'rgba(0, 0, 0, .7)' : undefined,
    }}
  />
);
