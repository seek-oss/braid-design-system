import { ReactNode } from 'react';
import { BoxProps } from '../Box/Box';
import { DataAttributeMap } from '../private/buildDataAttributes';
import { UseTextProps } from '../../hooks/typography';
export interface TextProps extends Pick<BoxProps, 'component'> {
  id?: string;
  children?: ReactNode;
  size?: UseTextProps['size'];
  tone?: UseTextProps['tone'];
  weight?: UseTextProps['weight'];
  baseline?: UseTextProps['baseline'];
  align?: BoxProps['textAlign'];
  truncate?: boolean;
  data?: DataAttributeMap;
}
export declare const Text: ({
  id,
  component,
  size: sizeProp,
  tone: toneProp,
  align,
  weight: weightProp,
  baseline,
  truncate,
  data,
  children,
}: TextProps) => JSX.Element;
