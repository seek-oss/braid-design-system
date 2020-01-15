import React, { ReactNode, useContext } from 'react';
import { useStyles } from 'sku/treat';
import classnames from 'classnames';
import { Box } from '../Box/Box';
import { useText } from '../../hooks/typography';
import { BulletListContext } from '../BulletList/BulletList';
import { useStackItem } from '../Stack/Stack';
import { useLineHeightContainer } from '../../hooks/useLineHeightContainer/useLineHeightContainer';
import * as styleRefs from './Bullet.treat';

export interface BulletProps {
  children: ReactNode;
}

const component = 'li';

export const Bullet = ({ children }: BulletProps) => {
  const styles = useStyles(styleRefs);
  const { size, space, tone } = useContext(BulletListContext);

  return (
    <Box
      component={component}
      className={classnames(
        useText({ size, baseline: true, tone }),
        useStackItem({ component, space, align: 'left' }),
      )}
    >
      <Box display="flex">
        <Box
          display="flex"
          alignItems="center"
          className={useLineHeightContainer(size)}
        >
          <Box
            borderRadius="full"
            className={classnames(styles.currentColor, styles.size[size])}
          />
        </Box>
        <Box paddingLeft={size === 'xsmall' ? 'xsmall' : 'small'}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};
