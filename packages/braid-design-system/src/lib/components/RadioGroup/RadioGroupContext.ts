import { createContext } from 'react';

import type { RadioGroupProps } from './RadioGroup';

interface RadioGroupContextValues {
  name: string;
  value: RadioGroupProps['value'];
  disabled?: boolean;
  tone?: RadioGroupProps['tone'];
  size?: RadioGroupProps['size'];
  tabIndex?: RadioGroupProps['tabIndex'];
  'aria-describedby'?: string;
  onChange: RadioGroupProps['onChange'];
}

export const RadioGroupContext = createContext<RadioGroupContextValues | null>(
  null,
);

export const RadioItemContext = createContext<number | null>(null);
