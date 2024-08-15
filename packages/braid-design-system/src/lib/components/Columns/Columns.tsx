import assert from 'assert';
import React, { type ReactElement } from 'react';
import { Box } from '../Box/Box';
import type { ColumnProps } from '../Column/Column';
import type { ResponsiveSpace } from '../../css/atoms/atoms';
import {
  type CollapsibleAlignmentProps,
  resolveCollapsibleAlignmentProps,
} from '../../utils/collapsibleAlignmentProps';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';
import { ColumnsContext, validColumnsComponents } from './ColumnsContext';

export interface ColumnsProps extends CollapsibleAlignmentProps {
  space: ResponsiveSpace;
  children:
    | Array<ReactElement<ColumnProps> | null>
    | ReactElement<ColumnProps>
    | null;
  component?: (typeof validColumnsComponents)[number];
  data?: DataAttributeMap;
}

export const Columns = ({
  children,
  collapseBelow,
  reverse = false,
  space = 'none',
  align,
  alignY,
  component = 'div',
  data,
  ...restProps
}: ColumnsProps) => {
  assert(
    validColumnsComponents.includes(component),
    `Invalid Columns component: '${component}'. Should be one of [${validColumnsComponents
      .map((c) => `'${c}'`)
      .join(', ')}]`,
  );

  const { collapsibleAlignmentProps } = resolveCollapsibleAlignmentProps({
    collapseBelow,
    align,
    alignY,
    reverse,
  });

  return (
    <Box
      component={component}
      {...collapsibleAlignmentProps}
      display="flex"
      gap={space}
      {...buildDataAttributes({ data, validateRestProps: restProps })}
    >
      <ColumnsContext.Provider
        value={{
          component,
        }}
      >
        {children}
      </ColumnsContext.Provider>
    </Box>
  );
};
