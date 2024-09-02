import { createContext } from 'react';
import type { Space } from '../../css/atoms/atoms';
import { OptionalResponsiveValue } from '../../css/atoms/sprinkles.css';
import { Align } from '../../utils/align';
// import type { resolveCollapsibleAlignmentProps } from '../../utils/collapsibleAlignmentProps';

// export const validColumnsComponents = ['div', 'span'] as const;

// type CollapsibleAlignmentChildProps = ReturnType<
//   typeof resolveCollapsibleAlignmentProps
// >['collapsibleAlignmentChildProps'];

interface ColumnsContextValue {
  collapseMobile: boolean;
  collapseTablet: boolean;
  collapseDesktop: boolean;
  mobileSpace: Space;
  tabletSpace: Space;
  desktopSpace: Space;
  wideSpace: Space;
  align: OptionalResponsiveValue<Align>;
  // collapsibleAlignmentChildProps: CollapsibleAlignmentChildProps | null;
  // component: (typeof validColumnsComponents)[number];
}

export const ColumnsContext = createContext<ColumnsContextValue>({
  collapseMobile: false,
  collapseTablet: false,
  collapseDesktop: false,
  mobileSpace: 'none',
  tabletSpace: 'none',
  desktopSpace: 'none',
  wideSpace: 'none',
  align: 'left',
  // collapsibleAlignmentChildProps: null,
  // component: 'div',
});
