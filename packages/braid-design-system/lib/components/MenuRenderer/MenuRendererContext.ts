import { createContext } from 'react';

interface MenuRendererValues {
  reserveIconSpace: boolean;
}

export const MenuRendererContext = createContext<MenuRendererValues | null>(
  null,
);
