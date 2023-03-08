import React from 'react';
import type { Space } from '../../../css/atoms/atoms';
import type { BoxProps } from '../../Box/Box';
import { Box } from '../../Box/Box';

import * as styles from './AvoidWidowIcon.css';

interface Props extends Pick<BoxProps, 'children' | 'className'> {
  iconPosition: 'leading' | 'trailing';
  space?: Space;
}

export const AvoidWidowIcon = ({
  children,
  iconPosition,
  space = 'xxsmall',
  className,
}: Props) => (
  <Box
    component="span"
    paddingRight={iconPosition === 'leading' ? space : undefined}
    paddingLeft={iconPosition === 'trailing' ? space : undefined}
    className={[styles.nowrap, className]}
    aria-hidden
  >
    {iconPosition === 'leading' ? children : undefined}
    &#8288;
    {/* Word joiner character, a zero-width non-breaking character to prevent the icon wrapping onto its own line */}
    {iconPosition === 'trailing' ? children : undefined}
  </Box>
);
