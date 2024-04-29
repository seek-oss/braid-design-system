import React, { useState } from 'react';
import {
  type TagSelectorProps,
  TagSelector as BraidTagSelector,
  type Tag,
  type TagSelectorLabelProps,
  type TagSelectorBaseProps,
} from '../TagSelector/TagSelector';
import {
  type StateProp,
  useFallbackState,
  usePlayroomStore,
} from '../../playroom/playroomState';
import { useFallbackId } from '../../playroom/utils';
import type { Optional } from 'utility-types';

interface SelectedTagsStateProp {
  selectedTagsState?: string;
}

function useFallbackSelectedTagsState(
  stateKey: string | undefined,
  value: TagSelectorProps['selectedTags'] | undefined,
  defaultValue?: Tag[],
  onSelect?: TagSelectorProps['onSelect'],
  onRemove?: TagSelectorProps['onRemove'],
): [NonNullable<Tag[]>, (element: Tag) => void, (element: Tag) => void] {
  const playroomState = usePlayroomStore();
  const [internalStateValue, setInternalStateValue] = useState(
    defaultValue || [],
  );

  const addElement = (element: Tag) => {
    if (value === undefined) {
      (stateKey ? playroomState.setState(stateKey) : setInternalStateValue)(
        (prev) => [...prev, element],
      );
    }
  };

  const removeElement = (element: Tag) => {
    if (value === undefined) {
      (stateKey ? playroomState.setState(stateKey) : setInternalStateValue)(
        (prev) => prev.filter((e) => e !== element),
      );
    }
  };

  const resolvedValue =
    value ??
    (stateKey
      ? playroomState.getState(stateKey) ?? defaultValue
      : internalStateValue);

  const handleAddElement = onSelect || addElement;
  const handleRemoveElement = onRemove || removeElement;

  return [resolvedValue, handleAddElement, handleRemoveElement];
}

type PlayroomTagSelectorProps = StateProp &
  SelectedTagsStateProp &
  Optional<
    TagSelectorBaseProps,
    'id' | 'value' | 'onChange' | 'selectedTags' | 'onSelect' | 'onRemove'
  > &
  TagSelectorLabelProps;

export function TagSelector({
  id,
  stateName,
  value,
  selectedTagsState: selectedTagsStateName,
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

  const blankSelectedTags: Tag[] = [];
  const [selectedTagsState, handleSelectTag, handleRemoveTag] =
    useFallbackSelectedTagsState(
      selectedTagsStateName,
      selectedTags,
      blankSelectedTags,
      onSelect,
      onRemove,
    );

  return (
    <BraidTagSelector
      id={id ?? fallbackId}
      value={state}
      selectedTags={selectedTagsState || []}
      onSelect={(selectedTag) => {
        handleSelectTag(selectedTag);
        handleChange(blankValue);
        onClear?.();
      }}
      onRemove={handleRemoveTag}
      onChange={handleChange}
      onClear={() => {
        handleChange(blankValue);
        onClear?.();
      }}
      {...restProps}
    />
  );
}
