import { Box } from '../Box/Box';
import type { ResponsiveSpace } from '../../css/atoms/atoms';
import type { OptionalResponsiveValue } from '../../css/atoms/sprinkles.css';
import { type Align, alignToFlexAlign } from '../../utils/align';
import flattenChildren, { type ReactChild } from '../../utils/flattenChildren';
import { Divider, type DividerProps } from '../Divider/Divider';
import type { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';
import type { DataAttributeMap } from '../private/buildDataAttributes';
import buildDataAttributes from '../private/buildDataAttributes';
import { Children } from 'react';
import assert from 'assert';
import { Hidden, type HiddenProps } from '../Hidden/Hidden';

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
  const isList = component === 'ol' || component === 'ul';
  const stackItems = flattenChildren(children);
  const stackItemsWithDividers = !dividers
    ? stackItems
    : addDividersToStackItems(
        stackItems,
        dividers === true ? undefined : dividers,
      );

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
            typeof child === 'object' &&
            child.type === Hidden &&
            (child.props as HiddenProps).inline !== undefined
          ),
          'The "inline" prop is invalid on Hidden elements within a Stack',
        );

        if (isList) {
          return <Box component="li">{child}</Box>;
        }

        return child;
      })}
    </Box>
  );
};
