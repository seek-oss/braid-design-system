import dedent from 'dedent';
import assert from 'tiny-invariant';

import type { UseIconProps } from '../../hooks/useIcon';
import { Box } from '../Box/Box';
import { type TextProps, Text } from '../Text/Text';
import { IconContainer } from '../icons/IconContainer';
import { IconStarActiveSvg as IconStarFullSvg } from '../icons/IconStar/IconStarActiveSvg';
import { IconStarHalfSvg } from '../icons/IconStar/IconStarHalfSvg';
import { IconStarSvg as IconStarEmptySvg } from '../icons/IconStar/IconStarSvg';
import { iconSlotSpace } from '../private/iconSlotSpace';

import * as styles from './Rating.css';

const getPercent = (rating: number, position: number) =>
  Math.round(Math.min(Math.max(rating - position, 0), 1) * 100);

type RatingStar = {
  percent: number;
} & UseIconProps;
const RatingStar = ({ percent, ...restProps }: RatingStar) => {
  let component = IconStarEmptySvg;

  if (percent >= 25 && percent < 75) {
    component = IconStarHalfSvg;
  }

  if (percent >= 75) {
    component = IconStarFullSvg;
  }

  return (
    <IconContainer {...restProps}>
      {(svgProps) => <Box component={component} {...svgProps} />}
    </IconContainer>
  );
};

const ratingArr = [...Array(5)];
interface RatingBaseProps {
  rating: number;
  size?: TextProps['size'];
  'aria-label'?: string;
  data?: TextProps['data'];
  tone?: Extract<TextProps['tone'], 'brandAccent' | 'neutral'>;
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
  variant = 'full',
  tone = 'brandAccent',
  'aria-label': ariaLabel,
  data,
}: RatingProps) => {
  assert(
    !rating || (rating >= 0 && rating <= 5),
    'Rating must be between 0 and 5',
  );

  if (process.env.NODE_ENV !== 'production') {
    if (typeof weight !== 'undefined' && variant === 'starsOnly') {
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
        component="span"
        className={styles.inlineFlex}
        aria-label={
          ariaLabel || `${rating.toFixed(1)} out of ${ratingArr.length}`
        }
      >
        {variant === 'minimal' ? (
          <RatingStar
            percent={100}
            tone={tone === 'neutral' ? 'neutral' : 'brandAccent'}
          />
        ) : (
          ratingArr.map((_, position) => (
            <RatingStar
              key={position}
              percent={getPercent(rating, position)}
              tone={tone === 'neutral' ? 'neutral' : 'brandAccent'}
            />
          ))
        )}
      </Box>
      {variant !== 'starsOnly' && (
        <Box component="span" paddingLeft={iconSlotSpace} aria-hidden={true}>
          {rating.toFixed(1)}
        </Box>
      )}
    </Text>
  );
};
