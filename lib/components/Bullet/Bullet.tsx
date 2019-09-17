import React, { ReactNode, useContext } from 'react';
import { useStyles } from 'sku/treat';
import classnames from 'classnames';
import { Box } from '../Box/Box';
import { useText } from '../../hooks/typography';
import { BulletListContext } from '../BulletList/BulletList';
import * as styleRefs from './Bullet.treat';

export interface BulletProps {
  children: ReactNode;
}

export const Bullet = ({ children }: BulletProps) => {
  const styles = useStyles(styleRefs);
  const { size, space } = useContext(BulletListContext);

  return (
    <Box
      component="li"
      paddingBottom={space}
      className={classnames(useText({ size, baseline: true }), styles.listItem)}
    >
      {children}
    </Box>
  );
};
