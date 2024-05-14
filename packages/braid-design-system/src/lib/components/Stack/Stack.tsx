import React, { type ReactNode, Children, type ReactElement } from 'react';
import flattenChildren, { type ReactChild } from '../../utils/flattenChildren';
import assert from 'assert';
import { Box } from '../Box/Box';
import type { ResponsiveSpace } from '../../css/atoms/atoms';
import { type DividerProps, Divider } from '../Divider/Divider';
import { type HiddenProps, Hidden } from '../Hidden/Hidden';
import { type Align, alignToFlexAlign } from '../../utils/align';
import { resolveResponsiveRangeProps } from '../../utils/resolveResponsiveRangeProps';
import { optimizeResponsiveArray } from '../../utils/optimizeResponsiveArray';
import type { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';
import {
  type OptionalResponsiveValue,
  normalizeResponsiveValue,
} from '../../css/atoms/sprinkles.css';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';

function isHiddenChild(child: ReactNode): child is ReactElement {
  return Boolean(
    child &&
      typeof child === 'object' &&
      'type' in child &&
      child.type === Hidden,
  );
}

const extractHiddenPropsFromChild = (child: ReactNode) =>
  isHiddenChild(child) ? child.props : null;

const resolveHiddenProps = ({ screen, above, below }: HiddenProps) =>
  screen
    ? ([true, true, true, true] as const)
    : resolveResponsiveRangeProps({
        above,
        below,
      });

const calculateHiddenStackItemDisplayProps = (
  child: ReactChild,
  [hiddenOnMobile, hiddenOnTablet, hiddenOnDesktop, hiddenOnWide]: Readonly<
    [boolean, boolean, boolean, boolean]
  >,
) => {
  if (typeof child !== 'object' || ('type' in child && child.type !== Hidden)) {
    return {};
  }

  const normalizedValue = normalizeResponsiveValue(
    child.props.display !== undefined ? child.props.display : 'block',
  );

  const {
    mobile: displayMobile = 'block',
    tablet: displayTablet = displayMobile,
    desktop: displayDesktop = displayTablet,
    wide: displayWide = displayDesktop,
  } = normalizedValue;

  return {
    display: optimizeResponsiveArray([
      hiddenOnMobile ? 'none' : displayMobile,
      hiddenOnTablet ? 'none' : displayTablet,
      hiddenOnDesktop ? 'none' : displayDesktop,
      hiddenOnWide ? 'none' : displayWide,
    ]),
  };
};

// Todo - remove this duplicate function
const calculateHiddenStackItemDisplayPropsNonOptimized = (
  child: ReactChild,
  [hiddenOnMobile, hiddenOnTablet, hiddenOnDesktop, hiddenOnWide]: Readonly<
    [boolean, boolean, boolean, boolean]
  >,
) => {
  if (typeof child !== 'object' || ('type' in child && child.type !== Hidden)) {
    return {};
  }

  const normalizedValue = normalizeResponsiveValue(
    child.props.display !== undefined ? child.props.display : 'block',
  );

  const {
    mobile: displayMobile = 'block',
    tablet: displayTablet = displayMobile,
    desktop: displayDesktop = displayTablet,
    wide: displayWide = displayDesktop,
  } = normalizedValue;

  return {
    display: [
      hiddenOnMobile ? 'none' : displayMobile,
      hiddenOnTablet ? 'none' : displayTablet,
      hiddenOnDesktop ? 'none' : displayDesktop,
      hiddenOnWide ? 'none' : displayWide,
    ],
  };
};

export const validStackComponents = ['div', 'span', 'ol', 'ul'] as const;

interface StackDividerProps {
  dividers: StackProps['dividers'];
  display?: OptionalResponsiveValue<'block' | 'none'>;
  index?: string;
}

const StackDivider = ({
  dividers,
  display = 'block',
  index,
  ...restProps
}: StackDividerProps) => (
  <Box
    component="span"
    width="full"
    display={display}
    {...restProps}
    id={index}
  >
    {typeof dividers === 'string' ? <Divider weight={dividers} /> : <Divider />}
  </Box>
);

export interface StackProps {
  component?: (typeof validStackComponents)[number];
  children: ReactNodeNoStrings;
  space: ResponsiveSpace;
  align?: OptionalResponsiveValue<Align>;
  dividers?: boolean | DividerProps['weight'];
  data?: DataAttributeMap;
}

export const Stack = ({
  component = 'div',
  children,
  space,
  align,
  dividers = false,
  data,
  ...restProps
}: StackProps) => {
  assert(
    validStackComponents.includes(component),
    `Invalid Stack component: '${component}'. Should be one of [${validStackComponents
      .map((c) => `'${c}'`)
      .join(', ')}]`,
  );

  const isList = component === 'ol' || component === 'ul';
  const stackItems = flattenChildren(children);

  let firstItemOnMobile: number | null = null;
  let firstItemOnTablet: number | null = null;
  let firstItemOnDesktop: number | null = null;
  let firstItemOnWide: number | null = null;

  // Todo - reorder returns so these are only being calculated when needed
  // Todo - handle Hidden "screen" prop

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={space}
      alignItems={alignToFlexAlign(align)}
      component={component}
      {...buildDataAttributes({ data, validateRestProps: restProps })}
    >
      {Children.map(stackItems, (child, index) => {
        assert(
          !(
            isHiddenChild(child) &&
            (child.props as HiddenProps).inline !== undefined
          ),
          'The "inline" prop is invalid on Hidden elements within a Stack',
        );

        const hiddenProps = isHiddenChild(child)
          ? extractHiddenPropsFromChild(child)
          : null;

        const hidden = hiddenProps
          ? resolveHiddenProps(hiddenProps)
          : ([false, false, false, false] as const);

        const [hiddenOnMobile, hiddenOnTablet, hiddenOnDesktop, hiddenOnWide] =
          hidden;

        const displayProps = isHiddenChild(child)
          ? calculateHiddenStackItemDisplayProps(child, hidden)
          : ({ display: 'block' } as const);

        // Todo - remove this const, rely on one displayPropsNonOptimized
        const displayPropsNonOptimized = isHiddenChild(child)
          ? calculateHiddenStackItemDisplayPropsNonOptimized(child, hidden)
          : ({ display: 'block' } as const);

        if (firstItemOnMobile === null && !hiddenOnMobile) {
          firstItemOnMobile = index;
        }

        if (firstItemOnTablet === null && !hiddenOnTablet) {
          firstItemOnTablet = index;
        }

        if (firstItemOnDesktop === null && !hiddenOnDesktop) {
          firstItemOnDesktop = index;
        }

        if (firstItemOnWide === null && !hiddenOnWide) {
          firstItemOnWide = index;
        }

        // Todo - refactor?
        const dividerDisplayProps = optimizeResponsiveArray([
          firstItemOnMobile === null ||
          index === firstItemOnMobile ||
          (displayPropsNonOptimized.display &&
            displayPropsNonOptimized.display[0] === 'none')
            ? 'none'
            : 'block',
          firstItemOnTablet === null ||
          index === firstItemOnTablet ||
          (displayPropsNonOptimized.display &&
            displayPropsNonOptimized.display[1] === 'none')
            ? 'none'
            : 'block',
          firstItemOnDesktop === null ||
          index === firstItemOnDesktop ||
          (displayPropsNonOptimized.display &&
            displayPropsNonOptimized.display[2] === 'none')
            ? 'none'
            : 'block',
          firstItemOnWide === null ||
          index === firstItemOnWide ||
          (displayPropsNonOptimized.display &&
            displayPropsNonOptimized.display[3] === 'none')
            ? 'none'
            : 'block',
        ]) as OptionalResponsiveValue<'block' | 'none'>;

        if (isList) {
          return (
            <Box component="li" {...displayProps}>
              {dividers ? (
                <Box display={dividerDisplayProps} paddingBottom={space}>
                  <StackDivider dividers={dividers} />
                </Box>
              ) : null}
              {child}
            </Box>
          );
        }

        if (isHiddenChild(child)) {
          return (
            <>
              {dividers ? (
                <StackDivider
                  dividers={dividers}
                  display={dividerDisplayProps}
                  index={`divider-${index}`}
                />
              ) : null}
              {child}
            </>
          );
        }

        if (dividers) {
          return (
            <>
              <StackDivider dividers={dividers} display={dividerDisplayProps} />
              {child}
            </>
          );
        }

        return child;
      })}
    </Box>
  );
};
