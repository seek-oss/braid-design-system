import { createContext } from 'react';

interface TabPanelsContextValues {
  renderInactive: boolean;
  panelIndex: number;
}

export const TabPanelsContext = createContext<TabPanelsContextValues | null>(
  null,
);
