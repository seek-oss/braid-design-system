import { createContext } from 'react';
import type { Space } from '../../css/atoms/atoms';
import type { OptionalResponsiveValue } from '../../css/atoms/sprinkles.css';
import type { Align } from '../../utils/align';

interface ColumnsContextValue {
  collapseMobile: boolean;
  collapseTablet: boolean;
  collapseDesktop: boolean;
  mobileSpace: Space;
  tabletSpace: Space;
  desktopSpace: Space;
  wideSpace: Space;
  align: OptionalResponsiveValue<Align>;
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
});
