import type { FC } from 'react';
import type { Optional } from 'utility-types';

import { type StateProp, useFallbackState } from '../../playroom/playroomState';
import { validTabIndexes } from '../private/validateTabIndex';

import {
  type PasswordFieldBaseProps,
  type PasswordFieldLabelProps,
  PasswordField as BraidPasswordField,
} from './PasswordField';

type PlayroomPasswordFieldProps = StateProp &
  Optional<PasswordFieldBaseProps, 'value' | 'onChange'> &
  PasswordFieldLabelProps;

export const PasswordField: FC<PlayroomPasswordFieldProps> = ({
  stateName,
  value,
  onChange,
  tabIndex,
  ...restProps
}) => {
  const [state, handleChange] = useFallbackState(
    stateName,
    value,
    onChange,
    '',
  );

  return (
    <BraidPasswordField
      value={state}
      onChange={handleChange}
      autoComplete="off"
      tabIndex={validTabIndexes.includes(tabIndex!) ? tabIndex : undefined}
      {...restProps}
    />
  );
};
