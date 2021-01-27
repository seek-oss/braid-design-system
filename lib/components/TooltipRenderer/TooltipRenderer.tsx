import React, { ReactNode, SyntheticEvent, useRef } from 'react';
import { useStyles } from 'sku/react-treat';
import TooltipTrigger, { Ref as ElementRef } from 'react-popper-tooltip';
import { Tooltip, TooltipReference, useTooltipState } from 'reakit/Tooltip';
import { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';
import { Box } from '../Box/Box';
import * as styleRefs from './TooltipRenderer.treat';

interface TriggerProps {
  ref: ElementRef;
  tabIndex: 0;
  'aria-describedby': string;
  onTouchEnd?(event: SyntheticEvent): void;
  onClick?(event: SyntheticEvent): void;
  onMouseEnter?(event: SyntheticEvent): void;
  onMouseLeave?(event: SyntheticEvent): void;
  onMouseMove?(event: SyntheticEvent): void;
  onFocus?(event: SyntheticEvent): void;
  onBlur?(event: SyntheticEvent): void;
}

export interface TooltipRendererProps {
  id: string;
  interactive?: boolean;
  content: ReactNodeNoStrings;
  children: (triggerProps: TriggerProps) => ReactNode;
}

const StyledTooltip = (props) => <Box zIndex="notification" {...props} />;

export const TooltipRenderer = ({
  id,
  content,
  // interactive = false,
  children,
}: TooltipRendererProps) => {
  const styles = useStyles(styleRefs);
  const tooltip = useTooltipState({ baseId: id, placement: 'top' });

  return (
    <>
      <TooltipReference {...tooltip}>
        {(referenceProps) => children(referenceProps)}
      </TooltipReference>
      <Tooltip unstable_portal {...tooltip} as={StyledTooltip}>
        <Box padding="xsmall" position="relative" zIndex="dropdown">
          <Box
            background="card"
            padding="small"
            boxShadow="large"
            borderRadius="standard"
          >
            {content}
          </Box>
        </Box>
      </Tooltip>
    </>
  );
};

export const PopperTooltipRenderer = ({
  id,
  content,
  interactive = false,
  children,
}: TooltipRendererProps) => {
  const styles = useStyles(styleRefs);
  const interactiveFocusRef = useRef<HTMLDivElement>(null);
  let rootRef: ElementRef | null = null;

  return (
    <TooltipTrigger
      placement="top"
      trigger={interactive ? 'click' : ['click', 'hover', 'focus']}
      onVisibilityChange={(visible) => {
        if (interactive) {
          if (visible) {
            interactiveFocusRef.current?.focus();
          } else if (rootRef && 'current' in rootRef) {
            rootRef.current?.focus();
          }
        }
      }}
      tooltip={({
        arrowRef,
        tooltipRef,
        getArrowProps,
        getTooltipProps,
        placement,
      }) => (
        <Box
          id={id}
          role="tooltip"
          {...getTooltipProps({
            ref: tooltipRef,
          })}
        >
          <Box padding="xxsmall">
            <Box
              display="none"
              {...getArrowProps({
                ref: arrowRef,
                className: styles.arrow,
                'data-placement': placement,
              })}
            />
            <Box padding="xsmall">
              <Box
                ref={interactiveFocusRef}
                tabIndex={interactive ? 0 : undefined}
                background="card"
                padding="small"
                boxShadow="large"
                borderRadius="standard"
              >
                {content}
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    >
      {({ getTriggerProps, triggerRef }) => {
        const {
          onTouchEnd,
          onClick,
          onMouseEnter,
          onMouseLeave,
          onMouseMove,
          onFocus,
          onBlur,
        } = getTriggerProps({
          ref: triggerRef,
        });

        rootRef = triggerRef;

        return children({
          ref: triggerRef,
          tabIndex: 0,
          'aria-describedby': id,
          onTouchEnd,
          onClick,
          onMouseEnter,
          onMouseLeave,
          onMouseMove,
          onFocus,
          onBlur,
        });
      }}
    </TooltipTrigger>
  );
};
