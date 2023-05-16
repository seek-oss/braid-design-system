import React from 'react';
import type { Optional } from 'utility-types';
import { useFallbackId } from '../../playroom/utils';
import {
  type TabsProviderProps,
  TabsProvider as BraidTabsProvider,
} from './TabsProvider';
import { type TabsProps, Tabs as BraidTabs } from './Tabs';
import { type TabProps, Tab as BraidTab } from './Tab';

type PlayroomTabsProviderProps = Optional<TabsProviderProps, 'id'>;

export const TabsProvider = ({
  id,
  ...restProps
}: PlayroomTabsProviderProps) => {
  const fallbackId = useFallbackId();

  return <BraidTabsProvider id={id ?? fallbackId} {...restProps} />;
};

type PlayroomTabsProps = Optional<TabsProps, 'label'>;

export const Tabs = ({ label, ...restProps }: PlayroomTabsProps) => (
  <BraidTabs label="" {...restProps} />
);

export const Tab = ({ icon, ...restProps }: TabProps) => (
  <BraidTab
    icon={typeof icon === 'boolean' ? undefined : icon}
    {...restProps}
  />
);
Tab.__isTab__ = true;
