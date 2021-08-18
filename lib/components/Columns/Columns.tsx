import React, { createContext, ReactElement } from 'react';
import { Box } from '../Box/Box';
import { ColumnProps } from '../Column/Column';
import { Space, ResponsiveSpace } from '../../css/atoms/atoms';
import { negativeMarginLeft } from '../../css/negativeMargin/negativeMargin';
import {
  resolveCollapsibleAlignmentProps,
  CollapsibleAlignmentProps,
} from '../../utils/collapsibleAlignmentProps';
import { normalizeResponsiveValue } from '../../css/atoms/sprinkles.css';
import buildDataAttributes, {
  DataAttributeMap,
} from '../private/buildDataAttributes';

type CollapsibleAlignmentChildProps = ReturnType<
  typeof resolveCollapsibleAlignmentProps
>['collapsibleAlignmentChildProps'];

interface ColumnsContextValue {
  collapseMobile: boolean;
  collapseTablet: boolean;
  collapseDesktop: boolean;
  mobileSpace: Space;
  tabletSpace: Space;
  desktopSpace: Space;
  wideSpace: Space;
  collapsibleAlignmentChildProps: CollapsibleAlignmentChildProps | null;
}

export const ColumnsContext = createContext<ColumnsContextValue>({
  collapseMobile: false,
  collapseTablet: false,
  collapseDesktop: false,
  mobileSpace: 'none',
  tabletSpace: 'none',
  desktopSpace: 'none',
  wideSpace: 'none',
  collapsibleAlignmentChildProps: null,
});

export interface ColumnsProps extends CollapsibleAlignmentProps {
  space: ResponsiveSpace;
  children:
    | Array<ReactElement<ColumnProps> | null>
    | ReactElement<ColumnProps>
    | null;
  data?: DataAttributeMap;
}

export const Columns = ({
  children,
  collapseBelow,
  reverse = false,
  space = 'none',
  align,
  alignY,
  data,
}: ColumnsProps) => {
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
        }}
      >
        {orderChildren(children)}
      </ColumnsContext.Provider>
    </Box>
  );
};
