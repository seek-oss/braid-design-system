import { AllHTMLAttributes, ReactNode } from 'react';
import { DataAttributeMap } from '../private/buildDataAttributes';
import type { Size } from './Toggle.css';
declare type HTMLInputProps = AllHTMLAttributes<HTMLInputElement>;
declare type ChangeHandler = (value: boolean) => void;
export interface ToggleProps {
  id: NonNullable<HTMLInputProps['id']>;
  label: ReactNode;
  on: boolean;
  onChange: ChangeHandler;
  align?: 'left' | 'right' | 'justify';
  size?: Size;
  data?: DataAttributeMap;
}
export declare const Toggle: ({
  id,
  on,
  onChange,
  label,
  align,
  size,
  data,
}: ToggleProps) => JSX.Element;
export {};
