import { createContext } from 'react';

export interface TabListContextValues {
  tabListItemIndex: number;
  scrollContainer: HTMLElement | null;
  divider: 'full' | 'minimal' | 'none';
}

export const TabListContext = createContext<TabListContextValues | null>(null);
