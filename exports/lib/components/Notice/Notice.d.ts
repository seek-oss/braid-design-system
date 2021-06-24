import { ReactNode } from 'react';
import { DataAttributeMap } from '../private/buildDataAttributes';
declare type Tone = 'promote' | 'info' | 'positive' | 'critical';
export declare type NoticeProps = {
  tone?: Tone;
  data?: DataAttributeMap;
  children: ReactNode;
};
export declare const Notice: ({
  tone,
  data,
  children,
}: NoticeProps) => JSX.Element;
export {};
