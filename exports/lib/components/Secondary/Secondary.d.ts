import { ReactNode } from 'react';
import { DataAttributeMap } from '../private/buildDataAttributes';
export interface SecondaryProps {
  children: ReactNode;
  id?: string;
  data?: DataAttributeMap;
}
export declare const Secondary: ({
  children,
  data,
  id,
}: SecondaryProps) => JSX.Element;
