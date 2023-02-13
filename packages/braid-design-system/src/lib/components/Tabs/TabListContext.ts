import { createContext } from 'react';

export interface TabListContextValues {
  tabListItemIndex: number;
  scrollContainer: HTMLElement | null;
  isLast: boolean;
}

export const TabListContext = createContext<TabListContextValues | null>(null);
