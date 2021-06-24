// / <reference types="react" />
import { RadioGroupProps } from './RadioGroup';
interface RadioGroupContextValues {
  id: RadioGroupProps['id'];
  name: string;
  value: RadioGroupProps['value'];
  disabled?: boolean;
  tone?: RadioGroupProps['tone'];
  size?: RadioGroupProps['size'];
  'aria-describedby'?: string;
  onChange: RadioGroupProps['onChange'];
}
export declare const RadioGroupContext: import('react').Context<RadioGroupContextValues | null>;
export declare const RadioItemContext: import('react').Context<number | null>;
export {};
