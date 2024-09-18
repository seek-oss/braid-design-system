import React from 'react';
import assert from 'assert';
import dedent from 'dedent';
import { useBackground } from '../Box/BackgroundContext';
import useIcon, { type UseIconProps } from '../../hooks/useIcon';
import { Box } from '../Box/Box';
import { type TextProps, Text } from '../Text/Text';
import { IconStarSvg as IconStarEmptySvg } from '../icons/IconStar/IconStarSvg';
import { IconStarHalfSvg } from '../icons/IconStar/IconStarHalfSvg';
import { IconStarActiveSvg as IconStarFullSvg } from '../icons/IconStar/IconStarActiveSvg';
import * as styles from './Rating.css';

const getPercent = (rating: number, position: number) =>
  Math.round(Math.min(Math.max(rating - position, 0), 1) * 100);

type RatingStar = {
  percent: number;
} & UseIconProps;
const RatingStar = ({ percent, ...restProps }: RatingStar) => {
  const currentBg = useBackground();
  const {
    svgProps: { className, ...svgProps },
  } = useIcon(restProps);

  let component = IconStarEmptySvg;

  if (percent >= 25 && percent < 75) {
    component = IconStarHalfSvg;
  }

  if (percent >= 75) {
    component = IconStarFullSvg;
  }

  return (
    <Box
      component={component}
      {...svgProps}
      className={[
        className,
        {
          [styles.lightModeStarColor]:
            currentBg.lightMode === 'body' || currentBg.lightMode === 'surface',
        },
        {
          [styles.darkModeStarColor]:
            currentBg.darkMode === 'body' || currentBg.darkMode === 'surface',
        },
      ]}
    />
  );
};

const ratingArr = [...Array(5)];
interface RatingBaseProps {
  rating: number;
  size?: TextProps['size'];
  /** @deprecated Use `variant="starsOnly"` instead */
  showTextRating?: boolean;
  'aria-label'?: string;
  data?: TextProps['data'];
}
type RatingVariants = 'full' | 'starsOnly' | 'minimal';

export type RatingProps = RatingBaseProps &
  (
    | { weight?: never; variant?: RatingVariants }
    | {
        weight: TextProps['weight'];
        variant?: Exclude<RatingVariants, 'starsOnly'>;
      }
  );

export const Rating = ({
  rating,
  size = 'standard',
  weight,
  showTextRating,
  variant: variantProp,
  'aria-label': ariaLabel,
  data,
}: RatingProps) => {
  assert(
    !rating || (rating >= 0 && rating <= 5),
    'Rating must be between 0 and 5',
  );

  const variant = variantProp || 'full';
  const resolvedVariant =
    showTextRating === false && !variantProp ? 'starsOnly' : variant;

  if (process.env.NODE_ENV !== 'production') {
    if (typeof showTextRating !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn(
        dedent`
          The "showTextRating" prop has been deprecated and will be removed in a future version. Use \`variant="starsOnly"\` instead.
             <Rating
            %c-   showTextRating={false}
            %c+   variant="starsOnly"
             %c/>
        `,
        'color: red',
        'color: green',
        'color: inherit',
      );
    }

    if (typeof weight !== 'undefined' && resolvedVariant === 'starsOnly') {
      // eslint-disable-next-line no-console
      console.warn(
        dedent`
          The "weight" prop is not valid with the "starsOnly" variant as there is no visible text. Either remove the \`weight\` prop or choose an alternative \`variant\`.
             <Rating
            %c-  weight="strong"
            %c   variant="starsOnly"
             />
        `,
        'color: red',
        'color: inherit',
      );
    }
  }

  return (
    <Text size={size} data={data} weight={weight}>
      <Box
        display="inlineBlock"
        aria-label={
          ariaLabel || `${rating.toFixed(1)} out of ${ratingArr.length}`
        }
      >
        {resolvedVariant === 'minimal' ? (
          <Box display="inlineBlock" aria-hidden={true}>
            <RatingStar percent={100} />
          </Box>
        ) : (
          ratingArr.map((_, position) => (
            <Box
              key={position}
              display="inlineBlock"
              aria-hidden={true}
              className={{
                [styles.starSpacing]: position !== ratingArr.length - 1,
              }}
            >
              <RatingStar percent={getPercent(rating, position)} />
            </Box>
          ))
        )}
      </Box>
      {resolvedVariant !== 'starsOnly' && (
        <Box component="span" className={styles.textSpacing} aria-hidden={true}>
          {rating.toFixed(1)}
        </Box>
      )}
    </Text>
  );
};
