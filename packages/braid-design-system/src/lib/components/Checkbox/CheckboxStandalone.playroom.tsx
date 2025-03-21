import type { Optional } from 'utility-types';

import { type StateProp, useFallbackState } from '../../playroom/playroomState';
import { useFallbackId } from '../../playroom/utils';
import { validTabIndexes } from '../private/validateTabIndex';

import {
  type CheckboxStandaloneProps,
  CheckboxStandalone as BraidCheckboxStandalone,
} from './CheckboxStandalone';

type PlayroomCheckboxStandaloneProps = StateProp &
  Optional<CheckboxStandaloneProps, 'id' | 'checked' | 'onChange'>;

export const CheckboxStandalone = ({
  id,
  stateName,
  checked,
  onChange,
  tabIndex,
  'aria-label': ariaLabel,
  ...restProps
}: PlayroomCheckboxStandaloneProps) => {
  const fallbackId = useFallbackId();
  const [state, handleChange] = useFallbackState(
    stateName,
    checked,
    onChange,
    false,
  );

  return (
    <BraidCheckboxStandalone
      id={id ?? fallbackId}
      checked={state}
      onChange={handleChange}
      aria-label={ariaLabel ?? ''}
      tabIndex={validTabIndexes.includes(tabIndex!) ? tabIndex : undefined}
      {...restProps}
    />
  );
};
