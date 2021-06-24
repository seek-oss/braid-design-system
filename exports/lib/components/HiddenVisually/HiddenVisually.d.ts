import { BoxProps } from '../Box/Box';
import { DataAttributeMap } from '../private/buildDataAttributes';
interface HiddenVisuallyProps {
  id?: string;
  children: BoxProps['children'];
  data?: DataAttributeMap;
}
export declare const HiddenVisually: ({
  id,
  data,
  children,
}: HiddenVisuallyProps) => JSX.Element;
export {};
