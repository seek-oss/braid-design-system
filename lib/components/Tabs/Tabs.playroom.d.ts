import { Optional } from 'utility-types';
import { TabsProviderProps } from './TabsProvider';
import { TabsProps } from './Tabs';
declare type PlayroomTabsProviderProps = Optional<TabsProviderProps, 'id'>;
export declare const TabsProvider: ({ id, ...restProps }: PlayroomTabsProviderProps) => JSX.Element;
declare type PlayroomTabsProps = Optional<TabsProps, 'label'>;
export declare const Tabs: ({ label, ...restProps }: PlayroomTabsProps) => JSX.Element;
export {};
