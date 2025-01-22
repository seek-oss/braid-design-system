import type { Optional } from 'utility-types';

import { useFallbackId } from '../../playroom/utils';

import { type TabProps, Tab as BraidTab } from './Tab';
import { type TabsProps, Tabs as BraidTabs } from './Tabs';
import {
  type TabsProviderProps,
  TabsProvider as BraidTabsProvider,
} from './TabsProvider';

type PlayroomTabsProviderProps = Optional<TabsProviderProps, 'id'>;

export const TabsProvider = ({
  id,
  ...restProps
}: PlayroomTabsProviderProps) => {
  const fallbackId = useFallbackId();

  return <BraidTabsProvider id={id ?? fallbackId} {...restProps} />;
};

type PlayroomTabsProps = Optional<TabsProps, 'label'>;

export const Tabs = ({ label, size, ...restProps }: PlayroomTabsProps) => (
  <BraidTabs
    label=""
    size={size === 'small' ? size : 'standard'}
    {...restProps}
  />
);

export const Tab = ({ icon, ...restProps }: TabProps) => (
  <BraidTab
    icon={typeof icon === 'boolean' ? undefined : icon}
    {...restProps}
  />
);
Tab.__isTab__ = true;
