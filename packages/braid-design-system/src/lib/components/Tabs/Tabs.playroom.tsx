import type { Optional } from 'utility-types';

import { type TabProps, Tab as BraidTab } from './Tab';
import { type TabsProps, Tabs as BraidTabs } from './Tabs';

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
