import type { Space } from '../../css/atoms/atoms';
import { Box, type BoxProps } from '../Box/Box';
import type { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';
import type { OptionalResponsiveValue } from '../../css/atoms/sprinkles.css';
import {
  alignYToFlexAlign,
  type AlignY,
  type Align,
  alignToFlexAlign,
} from '../../utils/align';
import { type RequiredResponsiveValue, responsiveGap } from './Spread.css';

interface SpreadProps {
  children: ReactNodeNoStrings;
  space: RequiredResponsiveValue<Space>;
  direction?: 'horizontal' | 'vertical';
  align?: OptionalResponsiveValue<Align>;
  alignY?: OptionalResponsiveValue<AlignY>;
}

export const Spread = ({
  children,
  space,
  direction = 'horizontal',
  align,
  alignY,
}: SpreadProps) => {
  const isVertical = direction === 'vertical';
  const isHorizontal = !isVertical;
  let alignItems: BoxProps['alignItems'];

  if (align && isVertical) {
    alignItems = alignToFlexAlign(align);
  } else if (alignY && isHorizontal) {
    alignItems = alignYToFlexAlign(alignY);
  }

  return (
    <Box
      display="flex"
      flexDirection={isVertical ? 'column' : 'row'}
      width="full"
      height={isVertical ? 'full' : undefined}
      justifyContent="spaceBetween"
      alignItems={alignItems}
      className={responsiveGap({ gap: space })}
    >
      {children}
    </Box>
  );
};
