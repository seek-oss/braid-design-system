import { ReactNode } from 'react';
import { AllOrNone } from '../private/AllOrNone';
import { DataAttributeMap } from '../private/buildDataAttributes';
declare type Tone = 'promote' | 'info' | 'positive' | 'caution' | 'critical';
declare type CloseProps = AllOrNone<{
  onClose: () => void;
  closeLabel: string;
}>;
export declare type AlertProps = {
  tone?: Tone;
  children: ReactNode;
  data?: DataAttributeMap;
  id?: string;
} & CloseProps;
export declare const Alert: ({
  tone,
  children,
  id,
  closeLabel,
  data,
  onClose,
}: AlertProps) => JSX.Element;
export {};
