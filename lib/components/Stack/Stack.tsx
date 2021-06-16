import React, { Children, ReactNode } from 'react';
import flattenChildren from 'react-keyed-flatten-children';
import assert from 'assert';
import { Box } from '../Box/Box';
import type { ResponsiveSpace } from '../../atoms/atoms';
import { Divider, DividerProps } from '../Divider/Divider';
import { Hidden, HiddenProps } from '../Hidden/Hidden';
import * as hiddenStyles from '../Hidden/Hidden.css';
import { alignToFlexAlign, Align } from '../../utils/align';
import { resolveResponsiveRangeProps } from '../../utils/responsiveRangeProps';
import { optimizeResponsiveArray } from '../../utils/optimizeResponsiveArray';
import { negativeMarginTop } from '../../atoms/negativeMargin/negativeMargin';
import { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';
import {
  OptionalResponsiveValue,
  mapResponsiveValue,
  normalizeResponsiveValue,
} from '../../atoms/sprinkles.css';
import buildDataAttributes, {
  DataAttributeMap,
} from '../private/buildDataAttributes';

const alignToDisplay = {
  left: 'block',
  center: 'flex',
  right: 'flex',
} as const;

interface UseStackItemProps {
  align: OptionalResponsiveValue<Align>;
  space: ResponsiveSpace;
}

const useStackItem = ({ align, space }: UseStackItemProps) => ({
  paddingTop: space,
  // If we're aligned left across all screen sizes,
  // there's actually no alignment work to do.
  ...(align === 'left'
    ? null
    : {
        display: mapResponsiveValue(align, (value) => alignToDisplay[value]),
        flexDirection: 'column' as const,
        alignItems: alignToFlexAlign(align),
      }),
});

export const validStackComponents = ['div', 'ol', 'ul'] as const;

const extractHiddenPropsFromChild = (child: ReactNode) =>
  child && typeof child === 'object' && 'type' in child && child.type === Hidden
    ? (child.props as HiddenProps)
    : null;

const resolveHiddenProps = ({ screen, above, below }: HiddenProps) =>
  screen
    ? ([true, true, true] as const)
    : resolveResponsiveRangeProps({
        above,
        below,
      });

const calculateHiddenStackItemProps = (
  stackItemProps: ReturnType<typeof useStackItem>,
  [hiddenOnMobile, hiddenOnTablet, hiddenOnDesktop]: Readonly<
    [boolean, boolean, boolean]
  >,
) => {
  const normalizedValue = normalizeResponsiveValue(
    stackItemProps.display !== undefined ? stackItemProps.display : 'block',
  );

  const {
    mobile: displayMobile = 'block',
    tablet: displayTablet = displayMobile,
    desktop: displayDesktop = displayTablet,
  } = normalizedValue;

  return {
    ...stackItemProps,
    display: optimizeResponsiveArray([
      hiddenOnMobile ? 'none' : displayMobile,
      hiddenOnTablet ? 'none' : displayTablet,
      hiddenOnDesktop ? 'none' : displayDesktop,
    ]),
  };
};

export interface StackProps {
  component?: typeof validStackComponents[number];
  children: ReactNodeNoStrings;
  space: ResponsiveSpace;
  align?: OptionalResponsiveValue<Align>;
  dividers?: boolean | DividerProps['weight'];
  data?: DataAttributeMap;
}

export const Stack = ({
  component = 'div',
  children,
  space = 'none',
  align = 'left',
  dividers = false,
  data,
}: StackProps) => {
  assert(
    validStackComponents.includes(component),
    `Invalid Stack component: '${component}'. Should be one of [${validStackComponents
      .map((c) => `'${c}'`)
      .join(', ')}]`,
  );

  const stackItemProps = useStackItem({ space, align });
  const stackItems = flattenChildren(children);
  const isList = component === 'ol' || component === 'ul';
  const stackItemComponent = isList ? 'li' : 'div';

  let firstItemOnMobile: number | null = null;
  let firstItemOnTablet: number | null = null;
  let firstItemOnDesktop: number | null = null;

  return (
    <Box
      component={component}
      className={negativeMarginTop(space)}
      {...(data ? buildDataAttributes(data) : undefined)}
    >
      {Children.map(stackItems, (child, index) => {
        assert(
          !(
            typeof child === 'object' &&
            child.type === Hidden &&
            (child.props as HiddenProps).inline !== undefined
          ),
          'The "inline" prop is invalid on Hidden elements within a Stack',
        );

        const hiddenProps = extractHiddenPropsFromChild(child);
        const hidden = hiddenProps
          ? resolveHiddenProps(hiddenProps)
          : ([false, false, false] as const);
        const [hiddenOnMobile, hiddenOnTablet, hiddenOnDesktop] = hidden;

        if (firstItemOnMobile === null && !hiddenOnMobile) {
          firstItemOnMobile = index;
        }

        if (firstItemOnTablet === null && !hiddenOnTablet) {
          firstItemOnTablet = index;
        }

        if (firstItemOnDesktop === null && !hiddenOnDesktop) {
          firstItemOnDesktop = index;
        }

        return (
          <Box
            component={stackItemComponent}
            className={[
              hiddenProps && hiddenProps.print
                ? hiddenStyles.hiddenOnPrint
                : null,
            ]}
            {...(hiddenOnMobile || hiddenOnTablet || hiddenOnDesktop
              ? calculateHiddenStackItemProps(stackItemProps, hidden)
              : stackItemProps)}
          >
            {dividers && index > 0 ? (
              <Box
                width="full"
                paddingBottom={space}
                display={optimizeResponsiveArray([
                  index === firstItemOnMobile ? 'none' : 'block',
                  index === firstItemOnTablet ? 'none' : 'block',
                  index === firstItemOnDesktop ? 'none' : 'block',
                ])}
              >
                {typeof dividers === 'string' ? (
                  <Divider weight={dividers} />
                ) : (
                  <Divider />
                )}
              </Box>
            ) : null}
            {hiddenProps ? hiddenProps.children : child}
          </Box>
        );
      })}
    </Box>
  );
};
