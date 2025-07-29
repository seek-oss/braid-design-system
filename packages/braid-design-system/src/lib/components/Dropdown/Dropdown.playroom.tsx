import type { Optional } from 'utility-types';

import { type StateProp, useFallbackState } from '../../playroom/playroomState';
import { validTabIndexes } from '../private/validateTabIndex';

import {
  type DropdownBaseProps,
  type DropdownLabelProps,
  Dropdown as BraidDropdown,
} from './Dropdown';

type PlayroomDropdownProps = StateProp &
  Optional<DropdownBaseProps, 'value' | 'onChange'> &
  DropdownLabelProps;

export const Dropdown = ({
  stateName,
  value,
  onChange,
  tabIndex,
  ...restProps
}: PlayroomDropdownProps) => {
  const [state, handleChange] = useFallbackState(
    stateName,
    value,
    onChange,
    '',
  );

  return (
    <BraidDropdown
      value={state}
      onChange={handleChange}
      tabIndex={validTabIndexes.includes(tabIndex!) ? tabIndex : undefined}
      {...restProps}
    />
  );
};
