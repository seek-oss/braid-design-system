import { createContext } from 'react';

interface TabListContextValues {
  tabListItemIndex: number;
  scrollContainer: HTMLElement | null;
}

export const TabListContext = createContext<TabListContextValues | null>(null);
