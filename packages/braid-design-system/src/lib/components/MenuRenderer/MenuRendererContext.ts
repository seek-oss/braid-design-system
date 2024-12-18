import { createContext } from 'react';
import type { MenuSize } from './MenuRendererTypes';

interface MenuRendererValues {
  size: MenuSize;
  reserveIconSpace: boolean;
}

export const MenuRendererContext = createContext<MenuRendererValues | null>(
  null,
);
