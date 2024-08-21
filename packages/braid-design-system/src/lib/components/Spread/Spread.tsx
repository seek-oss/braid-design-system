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
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';

export interface SpreadProps {
  component?: BoxProps['component'];
  children: ReactNodeNoStrings;
  space: RequiredResponsiveValue<Space>;
  direction?: 'horizontal' | 'vertical';
  align?: OptionalResponsiveValue<Align>;
  alignY?: OptionalResponsiveValue<AlignY>;
  data?: DataAttributeMap;
}

export const Spread = ({
  component,
  children,
  space,
  direction = 'horizontal',
  align,
  alignY,
  data,
  ...restProps
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
      component={component}
      display="flex"
      flexDirection={isVertical ? 'column' : 'row'}
      width="full"
      height={isVertical ? 'full' : undefined}
      justifyContent="spaceBetween"
      alignItems={alignItems}
      className={responsiveGap({ gap: space })}
      {...buildDataAttributes({ data, validateRestProps: restProps })}
    >
      {children}
    </Box>
  );
};
