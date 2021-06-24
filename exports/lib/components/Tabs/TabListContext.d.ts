// / <reference types="react" />
export interface TabListContextValues {
  tabListItemIndex: number;
  scrollContainer: HTMLElement | null;
  divider: 'full' | 'minimal' | 'none';
}
export declare const TabListContext: import('react').Context<TabListContextValues | null>;
