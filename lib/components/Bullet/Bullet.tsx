import React, { ReactNode } from 'react';
import Box from '../Box/Box';
import Text from '../Text/Text';
import styles from './Bullet.css.js';

export interface BulletProps {
  children?: ReactNode;
}

const Bullet = ({ children }: BulletProps) => (
  <Text component="li">
    <Box className={styles.block} component="span" paddingBottom="xsmall">
      {children}
    </Box>
  </Text>
);

Bullet.displayName = 'Bullet';

export default Bullet;
