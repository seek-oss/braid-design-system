import { createContext } from 'react';

export type TabTone = 'formAccent' | 'neutral';

export interface TabListContextValues {
  tabListItemIndex: number;
  scrollContainer: HTMLElement | null;
  isLast: boolean;
  tone: TabTone;
}

export const TabListContext = createContext<TabListContextValues | null>(null);
