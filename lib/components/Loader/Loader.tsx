import React from 'react';
import classnames from 'classnames';
import { useStyles } from 'sku/treat';
import { Theme } from 'treat/theme';
import { Box } from '../Box/Box';
import { useBackground } from '../Box/BackgroundContext';
import { UseBoxStylesProps } from '../Box/useBoxStyles';
import * as styleRefs from './Loader.treat';

const indicators = [...Array(3)];

interface LoaderProps {
  size?: keyof Theme['typography']['text'];
}

const indicatorColour = (
  backgroundContext?: UseBoxStylesProps['background'],
) => {
  if (backgroundContext) {
    const lookup: Partial<
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

    return lookup[backgroundContext];
  }

  return 'neutral';
};

export const Loader = ({ size = 'standard' }: LoaderProps) => {
  const styles = useStyles(styleRefs);
  const backgroundContext = useBackground();

  return (
    <Box display="flex" className={styles.root}>
      {indicators.map((_, index) => (
        <Box
          key={index}
          borderRadius="full"
          background={indicatorColour(backgroundContext!)}
          className={classnames(styles.indicator, styles.size[size])}
        />
      ))}
    </Box>
  );
};
