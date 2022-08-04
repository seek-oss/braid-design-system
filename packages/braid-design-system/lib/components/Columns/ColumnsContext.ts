import { createContext } from 'react';
import { Space } from '../../css/atoms/atoms';
import { resolveCollapsibleAlignmentProps } from '../../utils/collapsibleAlignmentProps';

export const validColumnsComponents = ['div', 'span'] as const;

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
  component: typeof validColumnsComponents[number];
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
  component: 'div',
});
