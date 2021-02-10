import React, { useState, useEffect, ReactNode } from 'react';
import { useStyles } from 'sku/react-treat';
import { createPortal } from 'react-dom';
import { usePopperTooltip } from 'react-popper-tooltip';
import isMobile from 'is-mobile';
import assert from 'assert';
import { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';
import { BackgroundProvider } from '../Box/BackgroundContext';
import { useBoxStyles } from '../Box/useBoxStyles';
import { DefaultTextPropsProvider } from '../private/defaultTextProps';
import { useSpace } from '../useSpace/useSpace';
import { Box } from '../Box/Box';
import * as styleRefs from './TooltipRenderer.treat';

// @ts-expect-error
import untyped_IsIOS from 'is-ios';
assert(typeof untyped_IsIOS === 'boolean');
const isIOS: boolean = untyped_IsIOS;

interface TriggerProps {
  ref: ReturnType<typeof usePopperTooltip>['setTooltipRef'];
  tabIndex: 0;
  'aria-describedby': string;
}

export interface TooltipRendererProps {
  id: string;
  tooltip: ReactNodeNoStrings;
  children: (renderProps: { triggerProps: TriggerProps }) => ReactNode;
}

export const TooltipRenderer = ({
  id,
  tooltip,
  children,
}: TooltipRendererProps) => {
  const styles = useStyles(styleRefs);
  const [controlledVisible, setControlledVisible] = useState(false);
  const [opacity, setOpacity] = useState<0 | 100>(0);
  const { grid, space } = useSpace();

  const {
    visible,
    getTooltipProps,
    setTooltipRef,
    tooltipRef,
    setTriggerRef,
    triggerRef,
  } = usePopperTooltip({
    placement: 'bottom',
    trigger: [isIOS ? 'click' : 'hover', 'focus'],
    visible: controlledVisible,
    onVisibleChange: setControlledVisible,
    offset: [0, space.xsmall * grid],
  });

  useEffect(() => {
    if (visible) {
      const handleKeyDown = ({ key }: KeyboardEvent) => {
        if (key === 'Escape') {
          setControlledVisible(false);
        }
      };

      document.addEventListener('keydown', handleKeyDown);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [visible]);

  useEffect(() => {
    if (!triggerRef) {
      return;
    }

    if (visible) {
      const handleFocusIn = (event: FocusEvent) => {
        if (event.currentTarget !== triggerRef) {
          setControlledVisible(false);
        }
      };

      document.addEventListener('focusin', handleFocusIn);

      return () => {
        document.removeEventListener('focusin', handleFocusIn);
      };
    }
  }, [triggerRef, visible]);

  assert(
    useEffect(() => {
      if (tooltipRef) {
        assert(
          tooltipRef.querySelectorAll('button, input, select, textarea, a')
            .length === 0,
          'For accessibility reasons, tooltips must not contain interactive elements',
        );
      }
    }, [tooltipRef]) === undefined,
  );

  useEffect(() => {
    if (!tooltipRef || !visible) {
      return setOpacity(0);
    }

    const timeout = setTimeout(() => setOpacity(100), isMobile() ? 0 : 250);

    return () => clearTimeout(timeout);
  }, [tooltipRef, visible]);

  const tooltipStyles = useBoxStyles({
    component: 'div',
    zIndex: 'notification',
    paddingX: 'xsmall',
    display: triggerRef && visible ? undefined : 'none',
  });

  return (
    <>
      {children({
        triggerProps: {
          tabIndex: 0,
          ref: setTriggerRef,
          'aria-describedby': id,
        },
      })}

      {triggerRef &&
        createPortal(
          <div
            id={id}
            role="tooltip"
            hidden={!visible ? true : undefined}
            className={tooltipStyles}
            {...(visible
              ? getTooltipProps({
                  ref: setTooltipRef,
                })
              : null)}
          >
            <Box
              transition="fast"
              opacity={opacity === 0 ? 0 : undefined}
              className={
                opacity === 0
                  ? styles.verticalOffsetBeforeEntrance
                  : styles.translateZ0
              }
            >
              <Box
                padding="small"
                boxShadow="large"
                borderRadius="standard"
                className={[
                  styles.background,
                  styles.maxWidth,
                  styles.translateZ0,
                ]}
              >
                <BackgroundProvider value="UNKNOWN_DARK">
                  <DefaultTextPropsProvider size="small" weight="medium">
                    {tooltip}
                  </DefaultTextPropsProvider>
                </BackgroundProvider>
              </Box>
            </Box>
          </div>,
          document.body,
        )}
    </>
  );
};
