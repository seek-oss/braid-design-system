import React from 'react';
import { Optional } from 'utility-types';
import { useFallbackId } from '../../playroom/utils';
import {
  TabsProvider as BraidTabsProvider,
  TabsProviderProps,
} from './TabsProvider';
import { Tabs as BraidTabs, TabsProps } from './Tabs';
import { Tab as BraidTab, TabProps } from './Tab';

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
