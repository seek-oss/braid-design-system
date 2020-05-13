import React, { ReactNode, useContext } from 'react';
import { useStyles } from 'sku/react-treat';
import { BulletListContext } from '../BulletList/BulletList';
import { Text } from '../Text/Text';
import { Box } from '../Box/Box';
import { useLineHeightContainer } from '../../hooks/useLineHeightContainer/useLineHeightContainer';
import * as styleRefs from './Bullet.treat';

export interface BulletProps {
  children: ReactNode;
}

export const Bullet = ({ children }: BulletProps) => {
  const styles = useStyles(styleRefs);
  const { size, tone } = useContext(BulletListContext);

  return (
    <Text component="div" size={size} tone={tone}>
      <Box display="flex">
        <Box
          display="flex"
          alignItems="center"
          className={useLineHeightContainer(size)}
        >
          <Box
            borderRadius="full"
            className={[styles.currentColor, styles.size[size]]}
          />
        </Box>
        <Box paddingLeft={size === 'xsmall' ? 'xsmall' : 'small'}>
          {children}
        </Box>
      </Box>
    </Text>
  );
};
