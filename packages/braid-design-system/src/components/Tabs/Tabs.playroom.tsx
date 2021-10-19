import React from 'react';
import type { Optional } from 'utility-types';
import { useFallbackId } from '../../playroom/utils';
import type { TabsProviderProps } from './TabsProvider';
import { TabsProvider as BraidTabsProvider } from './TabsProvider';
import type { TabsProps } from './Tabs';
import { Tabs as BraidTabs } from './Tabs';

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
