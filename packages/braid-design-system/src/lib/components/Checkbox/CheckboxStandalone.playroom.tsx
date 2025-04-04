import type { Optional } from 'utility-types';

import { type StateProp, useFallbackState } from '../../playroom/playroomState';
import { validTabIndexes } from '../private/validateTabIndex';

import {
  type CheckboxStandaloneProps,
  CheckboxStandalone as BraidCheckboxStandalone,
} from './CheckboxStandalone';

type PlayroomCheckboxStandaloneProps = StateProp &
  Optional<CheckboxStandaloneProps, 'checked' | 'onChange'>;

export const CheckboxStandalone = ({
  stateName,
  checked,
  onChange,
  tabIndex,
  'aria-label': ariaLabel,
  ...restProps
}: PlayroomCheckboxStandaloneProps) => {
  const [state, handleChange] = useFallbackState(
    stateName,
    checked,
    onChange,
    false,
  );

  return (
    <BraidCheckboxStandalone
      checked={state}
      onChange={handleChange}
      aria-label={ariaLabel ?? ''}
      tabIndex={validTabIndexes.includes(tabIndex!) ? tabIndex : undefined}
      {...restProps}
    />
  );
};
