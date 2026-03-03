import {
  Children,
  Fragment,
  isValidElement,
  useContext,
  useMemo,
  type FC,
} from 'react';

import SpaceDebugContext from '../../playroom/SpaceDebugContext';
import { cleanSpaceValue } from '../../playroom/cleanSpaceValue';
import { DebugSpace } from '../../playroom/components/DebugSpace/DebugSpace';
import flattenChildren from '../../utils/flattenChildren';
import { resolveResponsiveRangeProps } from '../../utils/resolveResponsiveRangeProps';
import type { BoxProps } from '../Box/Box';
import { breakpointContext } from '../BraidProvider/BreakpointContext';
import type { HiddenProps } from '../Hidden/Hidden';

import { type StackProps, Stack as BraidStack } from './Stack';

import { normalizeResponsiveValue } from '../../css/atoms/sprinkles.css';

export const Stack: FC<StackProps> = ({
  space,
  align,
  children,
  ...restProps
}) => {
  const debug = useContext(SpaceDebugContext);
  const breakpointName = useContext(breakpointContext) ?? 'mobile';

  const c = useMemo(
    () =>
      debug
        ? Children.toArray(flattenChildren(children))
            .filter((child) => {
              if (child && isValidElement(child)) {
                // @ts-expect-error Check if child is a Box and skip if display is none for the current breakpoint
                if (child.type.__isBox__) {
                  const { display } = child.props as BoxProps;
                  if (!display) {
                    return true;
                  }

                  const normalisedDisplay = normalizeResponsiveValue(display);
                  const {
                    mobile,
                    tablet = mobile,
                    desktop = tablet,
                    wide = desktop,
                  } = normalisedDisplay;

                  return {
                    mobile: mobile !== 'none',
                    tablet: tablet !== 'none',
                    desktop: desktop !== 'none',
                    wide: wide !== 'none',
                  }[breakpointName];
                }

                // @ts-expect-error Check if child is Hidden and skip based on prop conditions for the current breakpoint
                if (child.type.__isHidden__) {
                  const { above, below } = child.props as HiddenProps;
                  const [
                    hiddenOnMobile,
                    hiddenOnTablet,
                    hiddenOnDesktop,
                    hiddenOnWide,
                  ] = resolveResponsiveRangeProps({ above, below });

                  return {
                    mobile: !hiddenOnMobile,
                    tablet: !hiddenOnTablet,
                    desktop: !hiddenOnDesktop,
                    wide: !hiddenOnWide,
                  }[breakpointName];
                }

                // @ts-expect-error Check if child is HiddenVisually and skip
                if (child.type.__isHiddenVisually__) {
                  return false;
                }

                return true;
              }
            })
            .map((child, index) => (
              <Fragment key={index}>
                {debug && index > 0 ? <DebugSpace space={space} /> : null}
                {child}
              </Fragment>
            ))
        : children,
    [debug, children, breakpointName, space],
  );

  return (
    <BraidStack
      space={debug ? 'none' : cleanSpaceValue(space) || 'none'}
      align={typeof align !== 'boolean' ? align : undefined}
      {...restProps}
    >
      {debug ? c : children}
    </BraidStack>
  );
};
