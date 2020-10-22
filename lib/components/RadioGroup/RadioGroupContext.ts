import { createContext } from 'react';
import { RadioGroupProps } from './RadioGroup';

interface RadioGroupContextValues {
  id: RadioGroupProps['id'];
  name: RadioGroupProps['name'];
  value: RadioGroupProps['value'];
  disabled?: boolean;
  tone?: RadioGroupProps['tone'];
  'aria-describedby'?: string;
  onChange: RadioGroupProps['onChange'];
}

export const RadioGroupContext = createContext<RadioGroupContextValues | null>(
  null,
);

export const RadioItemContext = createContext<number | null>(null);
