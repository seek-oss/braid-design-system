import type { ResponsiveSpace } from '../../css/atoms/atoms';
import { Box, type BoxProps } from '../Box/Box';
import type { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';
import type { OptionalResponsiveValue } from '../../css/atoms/sprinkles.css';
import {
  alignYToFlexAlign,
  type AlignY,
  type Align,
  alignToFlexAlign,
} from '../../utils/align';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';
import * as styles from './Spread.css';

export interface SpreadProps {
  component?: BoxProps['component'];
  children: ReactNodeNoStrings;
  space: ResponsiveSpace;
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
  alignY = 'top',
  data,
  ...restProps
}: SpreadProps) => {
  const isVertical = direction === 'vertical';
  const isHorizontal = !isVertical;
  let alignItems: BoxProps['alignItems'];

  if (align && isVertical) {
    alignItems = alignToFlexAlign(align);
  } else if (isHorizontal) {
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
      gap={space}
      className={[
        isHorizontal ? styles.fitContent : undefined,
        isVertical ? styles.maxWidth : undefined,
      ]}
      {...buildDataAttributes({ data, validateRestProps: restProps })}
    >
      {children}
    </Box>
  );
};
