import React, { useState, useEffect, ReactNode } from 'react';
import { useStyles } from 'sku/react-treat';
import { createPortal } from 'react-dom';
import { usePopperTooltip } from 'react-popper-tooltip';
import isMobile from 'is-mobile';
import assert from 'assert';
import { useBraidTheme } from '../BraidProvider/BraidThemeContext';
import { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';
import { BackgroundProvider } from '../Box/BackgroundContext';
import { useBoxStyles } from '../Box/useBoxStyles';
import { DefaultTextPropsProvider } from '../private/defaultTextProps';
import { useSpace } from '../useSpace/useSpace';
import { Box } from '../Box/Box';
import * as styleRefs from './TooltipRenderer.treat';

interface TriggerProps {
  ref: ReturnType<typeof usePopperTooltip>['setTooltipRef'];
  tabIndex: 0;
  'aria-describedby': string;
}

export const TooltipContent = ({
  children,
  opacity,
}: {
  children: ReactNodeNoStrings;
  opacity: 0 | 100;
}) => {
  const styles = useStyles(styleRefs);
  const { name: themeName } = useBraidTheme();

  return (
    <Box
      display="flex"
      transition="fast"
      opacity={opacity === 0 ? 0 : undefined}
      className={
        opacity === 0 ? styles.verticalOffsetBeforeEntrance : styles.translateZ0
      }
    >
      <Box
        boxShadow="large"
        borderRadius="standard"
        className={[
          styles.background,
          styles.maxWidth,
          styles.translateZ0,
          styles.padding,
        ]}
      >
        <BackgroundProvider value="UNKNOWN_DARK">
          <DefaultTextPropsProvider
            size={themeName === 'docs' ? 'small' : undefined}
            weight="medium"
          >
            {children}
          </DefaultTextPropsProvider>
        </BackgroundProvider>
      </Box>
    </Box>
  );
};

const validPlacements = ['top', 'bottom'] as const;

type Placement = typeof validPlacements[number];

export interface TooltipRendererProps {
  id: string;
  tooltip: ReactNodeNoStrings;
  placement?: Placement;
  children: (renderProps: { triggerProps: TriggerProps }) => ReactNode;
}

export const TooltipRenderer = ({
  id,
  tooltip,
  placement = 'top',
  children,
}: TooltipRendererProps) => {
  assert(
    validPlacements.includes(placement),
    `The 'placement' prop must be one of the following: ${validPlacements.join(
      ', ',
    )}`,
  );

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
  } = usePopperTooltip(
    {
      placement,
      trigger: [isMobile() ? 'click' : 'hover', 'focus'],
      visible: controlledVisible,
      onVisibleChange: setControlledVisible,
    },
    {
      modifiers: [
        {
          name: 'preventOverflow',
          options: {
            padding: space.xsmall * grid,
          },
        },
        {
          name: 'offset',
          options: {
            offset: [0, space.xsmall * grid],
          },
        },
      ],
    },
  );

  useEffect(() => {
    if (visible) {
      const handleKeyDown = ({ key }: KeyboardEvent) => {
        if (key === 'Escape') {
          setControlledVisible(false);
        }
      };

      const handleScroll = () => {
        setControlledVisible(false);
      };

      const scrollHandlerOptions = {
        capture: true,
        passive: true,
      };

      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('scroll', handleScroll, scrollHandlerOptions);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener(
          'scroll',
          handleScroll,
          scrollHandlerOptions,
        );
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
            <TooltipContent opacity={opacity}>{tooltip}</TooltipContent>
          </div>,
          document.body,
        )}
    </>
  );
};
