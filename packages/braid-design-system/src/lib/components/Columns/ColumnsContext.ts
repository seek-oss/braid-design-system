import { createContext } from 'react';
import type { resolveCollapsibleAlignmentProps } from '../../utils/collapsibleAlignmentProps';

export const validColumnsComponents = ['div', 'span'] as const;

type CollapsibleAlignmentChildProps = ReturnType<
  typeof resolveCollapsibleAlignmentProps
>['collapsibleAlignmentChildProps'];

interface ColumnsContextValue {
  collapseMobile: boolean;
  collapseTablet: boolean;
  collapseDesktop: boolean;
  collapsibleAlignmentChildProps: CollapsibleAlignmentChildProps | null;
  component: (typeof validColumnsComponents)[number];
}

export const ColumnsContext = createContext<ColumnsContextValue>({
  collapseMobile: false,
  collapseTablet: false,
  collapseDesktop: false,
  collapsibleAlignmentChildProps: null,
  component: 'div',
});
