import type { Optional } from 'utility-types';

import { type StateProp, useFallbackState } from '../../playroom/playroomState';
import { useFallbackId } from '../../playroom/utils';
import { validTabIndexes } from '../private/validateTabIndex';

import {
  type AutosuggestBaseProps,
  type AutosuggestLabelProps,
  Autosuggest as BraidAutosuggest,
} from './Autosuggest';

type PlayroomAutosuggestProps<Value> = StateProp &
  Optional<AutosuggestBaseProps<Value>, 'id' | 'value' | 'onChange'> &
  AutosuggestLabelProps;

export function Autosuggest<Value>({
  id,
  stateName,
  value,
  onChange,
  onClear,
  tabIndex,
  ...restProps
}: PlayroomAutosuggestProps<Value>) {
  const fallbackId = useFallbackId();
  const blankValue = { text: '' };
  const [state, handleChange] = useFallbackState(
    stateName,
    value,
    onChange,
    blankValue,
  );

  return (
    <BraidAutosuggest
      id={id ?? fallbackId}
      value={state}
      onChange={handleChange}
      onClear={() => {
        handleChange(blankValue);
        onClear?.();
      }}
      tabIndex={validTabIndexes.includes(tabIndex!) ? tabIndex : undefined}
      {...restProps}
    />
  );
}
