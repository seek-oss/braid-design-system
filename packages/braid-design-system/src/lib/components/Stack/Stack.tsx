import { Box } from '../Box/Box';
import type { ResponsiveSpace } from '../../css/atoms/atoms';
import {
  normalizeResponsiveValue,
  type OptionalResponsiveValue,
} from '../../css/atoms/sprinkles.css';
import { type Align, alignToFlexAlign } from '../../utils/align';
import flattenChildren, { type ReactChild } from '../../utils/flattenChildren';
import { Divider, type DividerProps } from '../Divider/Divider';
import type { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';
import type { DataAttributeMap } from '../private/buildDataAttributes';
import buildDataAttributes from '../private/buildDataAttributes';
import { Children, type ReactElement, type ReactNode } from 'react';
import assert from 'assert';
import { optimizeResponsiveArray } from '../../utils/optimizeResponsiveArray';
import { resolveResponsiveRangeProps } from '../../utils/resolveResponsiveRangeProps';
import { Hidden, type HiddenProps } from '../Hidden/Hidden';

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

export const validStackComponents = ['div', 'span', 'ol', 'ul'] as const;

interface StackDividerProps {
  dividers: StackProps['dividers'];
}

const StackDivider = ({ dividers }: StackDividerProps) => (
  <Box component="span" width="full" display="block">
    {typeof dividers === 'string' ? <Divider weight={dividers} /> : <Divider />}
  </Box>
);

function addDividersToStackItems(
  stackItems: ReactChild[],
  dividers: StackProps['dividers'],
) {
  const divider = <StackDivider dividers={dividers} />;

  return stackItems.reduce((accumulator, child, index) => {
    if (index === 0) {
      return [child];
    }

    return [...accumulator, divider, child];
  }, [] as ReactChild[]);
}

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
  space,
  children,
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
  const stackItemsWithDividers = !dividers
    ? stackItems
    : addDividersToStackItems(stackItems, dividers);

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={space}
      alignItems={alignToFlexAlign(align)}
      component={component}
      {...buildDataAttributes({ data, validateRestProps: restProps })}
    >
      {Children.map(stackItemsWithDividers, (child) => {
        assert(
          !(
            isHiddenChild(child) &&
            (child.props as HiddenProps).inline !== undefined
          ),
          'The "inline" prop is invalid on Hidden elements within a Stack',
        );

        if (isList) {
          const hiddenProps = isHiddenChild(child)
            ? extractHiddenPropsFromChild(child)
            : null;
          const hidden = hiddenProps
            ? resolveHiddenProps(hiddenProps)
            : ([false, false, false, false] as const);

          const displayProps = !isHiddenChild(child)
            ? {}
            : calculateHiddenStackItemDisplayProps(child, hidden);

          return (
            <Box component="li" {...displayProps}>
              {child}
            </Box>
          );
        }

        return child;
      })}
    </Box>
  );
};
