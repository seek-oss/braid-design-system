import React from 'react';
import { useStyles } from 'sku/treat';
import { useBackground } from '../Box/BackgroundContext';
import useIcon, { UseIconProps } from '../../hooks/useIcon';
import { Box } from '../Box/Box';
import { Inline } from '../Inline/Inline';
import { Text, TextProps } from '../Text/Text';
import { IconStarSvg as IconStarEmptySvg } from '../icons/IconStar/IconStarSvg';
import { IconStarHalfSvg } from '../icons/IconStar/IconStarHalfSvg';
import { IconStarActiveSvg as IconStarFullSvg } from '../icons/IconStar/IconStarActiveSvg';
import * as styleRefs from './Rating.treat';

const getPercent = (rating: number, position: number) =>
  Math.round(Math.min(Math.max(rating - position, 0), 1) * 100);

type RatingStar = {
  percent: number;
} & UseIconProps;
const RatingStar = ({ percent, ...restProps }: RatingStar) => {
  const styles = useStyles(styleRefs);
  const currentBg = useBackground();
  const { className, ...iconProps } = useIcon(restProps);

  let component = IconStarEmptySvg;

  if (percent >= 25 && percent < 75) {
    component = IconStarHalfSvg;
  }

  if (percent > 50) {
    component = IconStarFullSvg;
  }

  return (
    <Box
      component={component}
      {...iconProps}
      className={[
        className,
        { [styles.starColor]: !currentBg || currentBg === 'card' },
      ]}
    />
  );
};

export interface Rating {
  rating: number;
  size?: TextProps['size'];
  showTextRating?: boolean;
}

export const Rating = ({
  rating,
  size = 'standard',
  showTextRating = true,
}: Rating) => {
  if (process.env.NODE_ENV !== 'production') {
    if (typeof rating !== 'undefined' && (rating < 0 || rating > 5)) {
      throw new Error(
        `Rating must be number between 0 and 5. Received ${rating}`,
      );
    }
  }

  return (
    <Text size={size} baseline={false}>
      <Inline space="xxsmall">
        {[...Array(5)].map((_, position) => (
          <RatingStar percent={getPercent(rating, position)} key={position} />
        ))}
        {showTextRating && (
          <Box component="span" paddingLeft="xxsmall">
            {rating.toFixed(1)}
          </Box>
        )}
      </Inline>
    </Text>
  );
};
