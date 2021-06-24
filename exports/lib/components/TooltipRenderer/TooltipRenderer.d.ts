import { ReactNode } from 'react';
import { usePopperTooltip } from 'react-popper-tooltip';
import { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';
export declare const StaticTooltipProvider: ({
  children,
}: {
  children: ReactNode;
}) => JSX.Element;
export declare const TooltipTextDefaultsProvider: ({
  children,
}: {
  children: ReactNodeNoStrings;
}) => JSX.Element;
export declare type ArrowProps = ReturnType<
  ReturnType<typeof usePopperTooltip>['getArrowProps']
>;
interface TriggerProps {
  ref: ReturnType<typeof usePopperTooltip>['setTooltipRef'];
  tabIndex: 0;
  'aria-describedby': string;
}
export declare const TooltipContent: ({
  children,
  opacity,
  arrowProps,
}: {
  children: ReactNodeNoStrings;
  opacity: 0 | 100;
  arrowProps: ArrowProps;
}) => JSX.Element;
declare const validPlacements: readonly ['top', 'bottom'];
declare type Placement = typeof validPlacements[number];
export interface TooltipRendererProps {
  id: string;
  tooltip: ReactNodeNoStrings;
  placement?: Placement;
  children: (renderProps: { triggerProps: TriggerProps }) => ReactNode;
}
export declare const TooltipRenderer: ({
  id,
  tooltip,
  placement,
  children,
}: TooltipRendererProps) => JSX.Element;
export {};
