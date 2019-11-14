import React from 'react';
import classnames from 'classnames';
import { useStyles } from 'sku/treat';
import { Box } from '../Box/Box';
import { useBackground } from '../Box/BackgroundContext';
import { UseBoxStylesProps } from '../Box/useBoxStyles';
import * as styleRefs from './Loader.treat';

const indicators = [...Array(3)];
const resolveBgForContext: Partial<
  Record<
    NonNullable<UseBoxStylesProps['background']>,
    UseBoxStylesProps['background']
  >
> = {
  brand: 'card',
  formAccent: 'card',
  brandAccent: 'card',
  neutral: 'card',
  neutralLight: 'neutral',
  card: 'neutral',
};

interface LoaderProps {
  size?: keyof typeof styleRefs.size;
}

export const Loader = ({ size = 'standard' }: LoaderProps) => {
  const styles = useStyles(styleRefs);
  const backgroundContext = useBackground();

  return (
    <Box display="flex" className={styles.root}>
      {indicators.map((_, index) => (
        <Box
          key={index}
          borderRadius="full"
          background={resolveBgForContext[backgroundContext!] || 'neutral'}
          className={classnames(styles.indicator, styles.size[size])}
        />
      ))}
    </Box>
  );
};
