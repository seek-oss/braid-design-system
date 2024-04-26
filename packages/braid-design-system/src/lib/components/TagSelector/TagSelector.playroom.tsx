import React from 'react';
import {
  type TagSelectorProps,
  TagSelector as BraidTagSelector,
} from '../TagSelector/TagSelector';
import { type StateProp, useFallbackState } from '../../playroom/playroomState';
import { useFallbackId } from '../../playroom/utils';
import type { Optional } from 'utility-types';

type PlayroomTagSelectorProps = StateProp &
  Optional<TagSelectorProps, 'id' | 'value' | 'onChange' | 'selectedTags'>;

export function TagSelector({
  id,
  stateName,
  value,
  selectedTags,
  onSelect,
  onRemove,
  onChange,
  onClear,
  ...restProps
}: PlayroomTagSelectorProps) {
  const fallbackId = useFallbackId();

  const blankValue = '';
  const [state, handleChange] = useFallbackState(
    stateName,
    value,
    onChange,
    blankValue,
  );

  // Todo - handle default selectedTags state

  return (
    <BraidTagSelector
      id={id ?? fallbackId}
      value={state}
      selectedTags={selectedTags || []}
      onSelect={onSelect}
      onRemove={onRemove}
      onChange={handleChange}
      onClear={() => {
        handleChange(blankValue);
        onClear?.();
      }}
      {...restProps}
    />
  );
}
