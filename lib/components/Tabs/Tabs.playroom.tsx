import React from 'react';
import { Optional } from 'utility-types';
import { useFallbackId } from '../../playroom/utils';
import {
  TabsProvider as BraidTabsProvider,
  TabsProviderProps,
} from './TabsProvider';

type PlayroomTabsProviderProps = Optional<TabsProviderProps, 'id'>;

export const TabsProvider = ({
  id,
  ...restProps
}: PlayroomTabsProviderProps) => {
  const fallbackId = useFallbackId();

  return <BraidTabsProvider id={id ?? fallbackId} {...restProps} />;
};
