import React, { useState, useEffect } from 'react';
import { Optional } from 'utility-types';
import {
  TabsProvider as BraidTabsProvider,
  TabsProviderProps,
} from './TabsProvider';

type PlayroomTabsProps = Optional<
  TabsProviderProps,
  'selectedItem' | 'onChange'
>;

export const TabsProvider = ({
  selectedItem,
  onChange,
  ...restProps
}: PlayroomTabsProps) => {
  const [fallbackValue, setFallbackValue] = useState<string | undefined>();

  useEffect(() => {
    if (typeof onChange !== 'function' && !selectedItem) {
      setFallbackValue(undefined);
    }
  }, [selectedItem, onChange]);

  return (
    <BraidTabsProvider
      selectedItem={selectedItem ?? fallbackValue}
      onChange={onChange ? onChange : (item) => setFallbackValue(item)}
      {...restProps}
    />
  );
};
