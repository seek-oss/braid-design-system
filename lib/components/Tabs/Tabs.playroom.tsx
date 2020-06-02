import React, { useState, useEffect } from 'react';
import { Optional } from 'utility-types';
import { Tabs as BraidTabs, TabsProps } from './Tabs';

type PlayroomTabsProps = Optional<TabsProps, 'selectedItem' | 'onChange'>;

export const Tabs = ({
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
    <BraidTabs
      selectedItem={selectedItem ?? fallbackValue}
      onChange={onChange ? onChange : (item) => setFallbackValue(item)}
      {...restProps}
    />
  );
};
