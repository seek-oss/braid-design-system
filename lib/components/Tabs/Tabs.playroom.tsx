import React, { useState, useEffect } from 'react';
import { Optional } from 'utility-types';
import {
  TabsProvider as BraidTabsProvider,
  TabsProviderProps,
} from './TabsProvider';

type PlayroomTabsProps = Optional<
  TabsProviderProps,
  'selectedIndex' | 'onChange'
>;

export const TabsProvider = ({
  selectedIndex,
  onChange,
  ...restProps
}: PlayroomTabsProps) => {
  const [fallbackValue, setFallbackValue] = useState<number | undefined>();

  useEffect(() => {
    if (typeof onChange !== 'function' && !selectedIndex) {
      setFallbackValue(undefined);
    }
  }, [selectedIndex, onChange]);

  return (
    <BraidTabsProvider
      selectedIndex={selectedIndex ?? fallbackValue}
      onChange={onChange ? onChange : (item) => setFallbackValue(item)}
      {...restProps}
    />
  );
};
