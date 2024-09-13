import dedent from 'dedent';
import React, { type ReactNode, Children } from 'react';
import flattenChildren from '../../utils/flattenChildren';
import assert from 'assert';
import { Box } from '../Box/Box';
import type { ResponsiveSpace } from '../../css/atoms/atoms';
import { type DividerProps, Divider } from '../Divider/Divider';
import { type HiddenProps, Hidden } from '../Hidden/Hidden';
import * as hiddenStyles from '../Hidden/Hidden.css';
import { type Align, alignToFlexAlign } from '../../utils/align';
import { resolveResponsiveRangeProps } from '../../utils/resolveResponsiveRangeProps';
import { optimizeResponsiveArray } from '../../utils/optimizeResponsiveArray';
import { negativeMargin } from '../../css/negativeMargin/negativeMargin';
import type { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';
import {
  type OptionalResponsiveValue,
  mapResponsiveValue,
  normalizeResponsiveValue,
} from '../../css/atoms/sprinkles.css';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';

const alignToDisplay = {
  left: 'block',
  center: 'flex',
  right: 'flex',
} as const;

export const validStackComponents = ['div', 'span', 'ol', 'ul'] as const;

interface UseStackItemProps {
  align: OptionalResponsiveValue<Align>;
  space: ResponsiveSpace;
  component: (typeof validStackComponents)[number];
}

const useStackItem = ({ align, space, component }: UseStackItemProps) =>
  ({
    paddingTop: space,
    display: component === 'span' ? 'block' : undefined,
    // If we're aligned left across all screen sizes,
    // there's actually no alignment work to do.
    ...(align === 'left'
      ? null
      : {
          display: mapResponsiveValue(align, (value) => alignToDisplay[value]),
          flexDirection: 'column' as const,
          alignItems: alignToFlexAlign(align),
        }),
  } as const);

const extractHiddenPropsFromChild = (child: ReactNode) =>
  child && typeof child === 'object' && 'type' in child && child.type === Hidden
    ? (child.props as HiddenProps)
    : null;

const resolveHiddenProps = ({ screen, above, below }: HiddenProps) =>
  screen
    ? ([true, true, true, true] as const)
    : resolveResponsiveRangeProps({
        above,
        below,
      });

const calculateHiddenStackItemProps = (
  stackItemProps: ReturnType<typeof useStackItem>,
  [hiddenOnMobile, hiddenOnTablet, hiddenOnDesktop, hiddenOnWide]: Readonly<
    [boolean, boolean, boolean, boolean]
  >,
) => {
  const normalizedValue = normalizeResponsiveValue(
    stackItemProps.display !== undefined ? stackItemProps.display : 'block',
  );

  const {
    mobile: displayMobile = 'block',
    tablet: displayTablet = displayMobile,
    desktop: displayDesktop = displayTablet,
    wide: displayWide = displayDesktop,
  } = normalizedValue;

  return {
    ...stackItemProps,
    display: optimizeResponsiveArray([
      hiddenOnMobile ? 'none' : displayMobile,
      hiddenOnTablet ? 'none' : displayTablet,
      hiddenOnDesktop ? 'none' : displayDesktop,
      hiddenOnWide ? 'none' : displayWide,
    ]),
  };
};

export interface StackProps {
  component?: (typeof validStackComponents)[number];
  children: ReactNodeNoStrings;
  space: ResponsiveSpace;
  align?: OptionalResponsiveValue<Align>;
  /**
   * @deprecated Will be removed in v33 to enable [CSS gap] in layout components.
   *
   * See [migration guide] for details.
   *
   * [CSS gap]: https://developer.mozilla.org/en-US/docs/Web/CSS/gap
   * [migration guide]: https://github.com/seek-oss/braid-design-system/blob/master/docs/Removing%20dividers%20support%20from%20layout%20components.md
   * */
  dividers?: boolean | DividerProps['weight'];
  data?: DataAttributeMap;
}

export const Stack = ({
  component = 'div',
  children,
  space = 'none',
  align = 'left',
  dividers,
  data,
  ...restProps
}: StackProps) => {
  assert(
    validStackComponents.includes(component),
    `Invalid Stack component: '${component}'. Should be one of [${validStackComponents
      .map((c) => `'${c}'`)
      .join(', ')}]`,
  );

  if (process.env.NODE_ENV !== 'production') {
    if (typeof dividers !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn(
        dedent`
          The "dividers" prop is deprecated and will be removed in v33 to enable CSS gap in layout components.
          Update your usage now to make upgrading easier by manually inserting "Divider" components as required:
            %c- <Stack space="..." dividers>
            %c+ <Stack space="...">
            %c    <Component>{item}</Component>
            %c+   <Divider />
            %c    <Component>{item}</Component>****
            %c+   <Divider />
            %c    <Component>{item}</Component>
              </Stack>
          See migration guide for details: https://github.com/seek-oss/braid-design-system/blob/master/docs/Removing%20dividers%20support%20from%20layout%20components.md
        `,
        'color: red',
        'color: green',
        'color: inherit',
        'color: green',
        'color: inherit',
        'color: green',
        'color: inherit',
      );
    }
  }

  const stackItemProps = useStackItem({ space, align, component });
  const stackItems = flattenChildren(children);
  const isList = component === 'ol' || component === 'ul';
  const stackItemComponent = isList ? 'li' : component;

  let firstItemOnMobile: number | null = null;
  let firstItemOnTablet: number | null = null;
  let firstItemOnDesktop: number | null = null;
  let firstItemOnWide: number | null = null;

  return (
    <Box
      component={component}
      display={component === 'span' ? 'block' : undefined}
      className={negativeMargin('top', space)}
      {...buildDataAttributes({ data, validateRestProps: restProps })}
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
          : ([false, false, false, false] as const);
        const [hiddenOnMobile, hiddenOnTablet, hiddenOnDesktop, hiddenOnWide] =
          hidden;

        const responsivelyHidden =
          hiddenOnMobile || hiddenOnTablet || hiddenOnDesktop || hiddenOnWide;

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

        return (
          <Box
            component={stackItemComponent}
            className={[
              hiddenProps && hiddenProps.print
                ? hiddenStyles.hiddenOnPrint
                : null,
            ]}
            {...(responsivelyHidden
              ? calculateHiddenStackItemProps(stackItemProps, hidden)
              : stackItemProps)}
          >
            {dividers && index > 0 ? (
              <Box
                component="span"
                width="full"
                paddingBottom={space}
                display={optimizeResponsiveArray([
                  index === firstItemOnMobile ? 'none' : 'block',
                  index === firstItemOnTablet ? 'none' : 'block',
                  index === firstItemOnDesktop ? 'none' : 'block',
                  index === firstItemOnWide ? 'none' : 'block',
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
