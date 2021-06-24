import { AllHTMLAttributes, ReactNode } from 'react';
import { PrivateTextLinkRendererProps } from '../TextLinkRenderer/TextLinkRenderer';
import { DataAttributeMap } from '../private/buildDataAttributes';
declare type NativeSpanProps = AllHTMLAttributes<HTMLSpanElement>;
export interface TextLinkButtonProps
  extends Omit<
    PrivateTextLinkRendererProps,
    'reset' | 'children' | 'showVisited'
  > {
  id?: NativeSpanProps['id'];
  onClick?: NativeSpanProps['onClick'];
  data?: DataAttributeMap;
  children: ReactNode;
  'aria-controls'?: NativeSpanProps['aria-controls'];
  'aria-expanded'?: NativeSpanProps['aria-expanded'];
  'aria-describedby'?: NativeSpanProps['aria-describedby'];
}
export declare const TextLinkButton: ({
  weight,
  hitArea,
  id,
  onClick,
  data,
  children,
  'aria-controls': ariaControls,
  'aria-expanded': ariaExpanded,
  'aria-describedby': ariaDescribedBy,
}: TextLinkButtonProps) => JSX.Element;
export {};
