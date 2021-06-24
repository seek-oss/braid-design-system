import { ReactNode } from 'react';
import { BoxProps } from '../Box/Box';
import { DataAttributeMap } from '../private/buildDataAttributes';
export interface ContentBlockProps {
  children: ReactNode;
  width?: BoxProps['maxWidth'];
  data?: DataAttributeMap;
}
export declare const ContentBlock: ({
  width,
  data,
  children,
}: ContentBlockProps) => JSX.Element;
