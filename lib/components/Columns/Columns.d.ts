import React, { ReactElement } from 'react';
import { ColumnProps } from '../Column/Column';
import { Space, ResponsiveSpace } from '../../atoms/atoms';
import { resolveCollapsibleAlignmentProps, CollapsibleAlignmentProps } from '../../utils/collapsibleAlignmentProps';
import { DataAttributeMap } from '../private/buildDataAttributes';
declare type CollapsibleAlignmentChildProps = ReturnType<typeof resolveCollapsibleAlignmentProps>['collapsibleAlignmentChildProps'];
interface ColumnsContextValue {
    collapseMobile: boolean;
    collapseTablet: boolean;
    mobileSpace: Space;
    tabletSpace: Space;
    desktopSpace: Space;
    collapsibleAlignmentChildProps: CollapsibleAlignmentChildProps | null;
}
export declare const ColumnsContext: React.Context<ColumnsContextValue>;
export interface ColumnsProps extends CollapsibleAlignmentProps {
    space: ResponsiveSpace;
    children: Array<ReactElement<ColumnProps> | null> | ReactElement<ColumnProps> | null;
    data?: DataAttributeMap;
}
export declare const Columns: ({ children, collapseBelow, reverse, space, align, alignY, data, }: ColumnsProps) => JSX.Element;
export {};
