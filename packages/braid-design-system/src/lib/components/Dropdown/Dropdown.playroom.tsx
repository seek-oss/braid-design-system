import type { Optional } from 'utility-types';

import { type StateProp, useFallbackState } from '../../playroom/playroomState';
import { useFallbackId } from '../../playroom/utils';
import { validTabIndexes } from '../private/validateTabIndex';

import {
  type DropdownBaseProps,
  type DropdownLabelProps,
  Dropdown as BraidDropdown,
} from './Dropdown';

type PlayroomDropdownProps = StateProp &
  Optional<DropdownBaseProps, 'id' | 'value' | 'onChange'> &
  DropdownLabelProps;

export const Dropdown = ({
  id,
  stateName,
  value,
  onChange,
  tabIndex,
  ...restProps
}: PlayroomDropdownProps) => {
  const fallbackId = useFallbackId();
  const [state, handleChange] = useFallbackState(
    stateName,
    value,
    onChange,
    '',
  );

  return (
    <BraidDropdown
      id={id ?? fallbackId}
      value={state}
      onChange={handleChange}
      tabIndex={validTabIndexes.includes(tabIndex!) ? tabIndex : undefined}
      {...restProps}
    />
  );
};
