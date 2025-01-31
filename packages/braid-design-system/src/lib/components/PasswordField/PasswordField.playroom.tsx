import type { Optional } from 'utility-types';

import { type StateProp, useFallbackState } from '../../playroom/playroomState';
import { useFallbackId } from '../../playroom/utils';
import { validTabIndexes } from '../private/validateTabIndex';

import {
  type PasswordFieldBaseProps,
  type PasswordFieldLabelProps,
  PasswordField as BraidPasswordField,
} from './PasswordField';

type PlayroomPasswordFieldProps = StateProp &
  Optional<PasswordFieldBaseProps, 'id' | 'value' | 'onChange'> &
  PasswordFieldLabelProps;

export const PasswordField = ({
  id,
  stateName,
  value,
  onChange,
  tabIndex,
  ...restProps
}: PlayroomPasswordFieldProps) => {
  const fallbackId = useFallbackId();
  const [state, handleChange] = useFallbackState(
    stateName,
    value,
    onChange,
    '',
  );

  return (
    <BraidPasswordField
      id={id ?? fallbackId}
      value={state}
      onChange={handleChange}
      autoComplete="off"
      tabIndex={validTabIndexes.includes(tabIndex!) ? tabIndex : undefined}
      {...restProps}
    />
  );
};
