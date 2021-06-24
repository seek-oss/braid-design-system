import React, { ReactNode } from 'react';
import { Action } from './Tabs.actions';
import tabA11y from './tabA11y';
interface State {
    selectedIndex: number;
    focusedTabIndex: number | null;
    tabItems: Array<string | number>;
    panels: number[];
}
interface TabsContextValues extends State {
    selectedItem?: string;
    dispatch: (action: Action) => void;
    a11y: ReturnType<typeof tabA11y>;
    onChange?: (selectedIndex: number, selectedItem?: string) => void;
}
export declare const TabsContext: React.Context<TabsContextValues | null>;
export declare type TabsProviderProps = {
    children: ReactNode;
    id: string;
    selectedItem?: string;
    onChange?: (selectedIndex: number, selectedItem?: string) => void;
};
export declare const TabsProvider: ({ children, onChange, id, selectedItem, }: TabsProviderProps) => JSX.Element;
export {};
