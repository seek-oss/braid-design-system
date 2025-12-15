import type { FC } from 'react';
import type { Optional } from 'utility-types';

import { type TabProps, Tab as BraidTab } from './Tab';
import { type TabsProps, Tabs as BraidTabs } from './Tabs';

type PlayroomTabsProps = Optional<TabsProps, 'label'>;

export const Tabs: FC<PlayroomTabsProps> = ({ label, size, ...restProps }) => (
  <BraidTabs
    label=""
    size={size === 'small' ? size : 'standard'}
    {...restProps}
  />
);

export const Tab: FC<TabProps> = ({ icon, ...restProps }) => (
  <BraidTab
    icon={typeof icon === 'boolean' ? undefined : icon}
    {...restProps}
  />
);
// @ts-expect-error __isTab__ Braid custom property
Tab.__isTab__ = true;
