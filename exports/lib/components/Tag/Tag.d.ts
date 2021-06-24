import { DataAttributeMap } from '../private/buildDataAttributes';
declare type AllOrNone<T> =
  | T
  | {
      [K in keyof T]?: never;
    };
export declare type TagProps = {
  children: string;
  data?: DataAttributeMap;
} & AllOrNone<{
  onClear: () => void;
  clearLabel: string;
}>;
export declare const Tag: ({
  onClear,
  clearLabel,
  data,
  children,
}: TagProps) => JSX.Element;
export {};
