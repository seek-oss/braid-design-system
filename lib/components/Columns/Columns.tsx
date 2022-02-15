import assert from 'assert';
import React, { ReactElement } from 'react';
import { Box } from '../Box/Box';
import { Column, ColumnProps } from '../Column/Column';
import { ResponsiveSpace } from '../../css/atoms/atoms';
import { negativeMarginLeft } from '../../css/negativeMargin/negativeMargin';
import {
  resolveCollapsibleAlignmentProps,
  CollapsibleAlignmentProps,
} from '../../utils/collapsibleAlignmentProps';
import { normalizeResponsiveValue } from '../../css/atoms/sprinkles.css';
import buildDataAttributes, {
  DataAttributeMap,
} from '../private/buildDataAttributes';
import { ColumnsContext, validColumnsComponents } from './ColumnsContext';

export interface ColumnsProps extends CollapsibleAlignmentProps {
  space: ResponsiveSpace;
  children:
    | Array<ReactElement<ColumnProps> | null>
    | ReactElement<ColumnProps>
    | null;
  component?: typeof validColumnsComponents[number];
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
}: ColumnsProps) => {
  assert(
    validColumnsComponents.includes(component),
    `Invalid Columns component: '${component}'. Should be one of [${validColumnsComponents
      .map((c) => `'${c}'`)
      .join(', ')}]`,
  );

  const normalizedSpace = normalizeResponsiveValue(space);
  const {
    mobile: mobileSpace = 'none',
    tablet: tabletSpace = mobileSpace,
    desktop: desktopSpace = tabletSpace,
    wide: wideSpace = desktopSpace,
  } = normalizedSpace;

  const {
    collapsibleAlignmentProps,
    collapsibleAlignmentChildProps,
    collapseMobile,
    collapseTablet,
    collapseDesktop,
    orderChildren,
  } = resolveCollapsibleAlignmentProps({
    collapseBelow,
    align,
    alignY,
    reverse,
  });

  return (
    <Box
      component={component}
      {...collapsibleAlignmentProps}
      className={negativeMarginLeft({
        mobile: collapseMobile ? 'none' : mobileSpace,
        tablet: collapseTablet ? 'none' : tabletSpace,
        desktop: collapseDesktop ? 'none' : desktopSpace,
        wide: wideSpace,
      })}
      {...(data ? buildDataAttributes(data) : undefined)}
    >
      <ColumnsContext.Provider
        value={{
          collapseMobile,
          collapseTablet,
          collapseDesktop,
          mobileSpace,
          tabletSpace,
          desktopSpace,
          wideSpace,
          collapsibleAlignmentChildProps,
          component,
        }}
      >
        {orderChildren(children).map((child, index) =>
          typeof child === 'object' &&
          'type' in child &&
          child.type === Column ? (
            child
          ) : (
            <Column key={index}>{child}</Column>
          ),
        )}
      </ColumnsContext.Provider>
    </Box>
  );
};
