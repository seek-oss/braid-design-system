import { createContext } from 'react';
import type { TextProps } from '../Text/Text';

export type TabSize = Extract<TextProps['size'], 'standard' | 'small'>;

export interface TabListContextValues {
  tabListItemIndex: number;
  scrollContainer: HTMLElement | null;
  isLast: boolean;
  size: TabSize;
}

export const TabListContext = createContext<TabListContextValues | null>(null);
