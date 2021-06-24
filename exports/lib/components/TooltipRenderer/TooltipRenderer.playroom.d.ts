import { Optional } from 'utility-types';
import { TooltipRendererProps } from './TooltipRenderer';
declare type PlayroomTooltipRendererProps = Optional<
  TooltipRendererProps,
  'id'
>;
export declare const TooltipRenderer: ({
  id,
  ...restProps
}: PlayroomTooltipRendererProps) => JSX.Element;
export {};
