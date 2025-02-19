import { createContext } from 'react';

import type { Space } from '../../css/atoms/atoms';
import type { Align } from '../../utils/align';

import type { OptionalResponsiveValue } from '../../css/atoms/sprinkles.css';

export const validColumnsComponents = [
  'div',
  'span',
  'p',
  'article',
  'section',
  'main',
  'nav',
  'aside',
  'ul',
  'ol',
  'li',
] as const;

interface ColumnsContextValue {
  collapseMobile: boolean;
  collapseTablet: boolean;
  collapseDesktop: boolean;
  mobileSpace: Space;
  tabletSpace: Space;
  desktopSpace: Space;
  wideSpace: Space;
  align: OptionalResponsiveValue<Align>;
  component: (typeof validColumnsComponents)[number];
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
  component: 'div',
});
