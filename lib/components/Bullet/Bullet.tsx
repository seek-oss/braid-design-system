import React, { ReactNode, useContext } from 'react';
import { useStyles } from 'sku/treat';
import classnames from 'classnames';
import { Box } from '../Box/Box';
import { useText } from '../../hooks/typography';
import { BulletListContext } from '../BulletList/BulletList';
import { useStackItem } from '../Stack/Stack';
import * as styleRefs from './Bullet.treat';

export interface BulletProps {
  children: ReactNode;
}

const component = 'li';

export const Bullet = ({ children }: BulletProps) => {
  const styles = useStyles(styleRefs);
  const { size, space } = useContext(BulletListContext);

  return (
    <Box
      component={component}
      className={classnames(
        useText({ size, baseline: true }),
        useStackItem({ component, space, align: 'left' }),
        styles.listItem,
      )}
    >
      {children}
    </Box>
  );
};
