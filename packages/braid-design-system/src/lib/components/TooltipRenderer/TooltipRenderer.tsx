import assert from 'assert';

import isMobile from 'is-mobile';
import {
  type ReactNode,
  createContext,
  useState,
  useEffect,
  useContext,
  useRef,
} from 'react';
import { usePopperTooltip } from 'react-popper-tooltip';

import { atoms } from '../../css/atoms/atoms';
import { useIsomorphicLayoutEffect } from '../../hooks/useIsomorphicLayoutEffect';
import { Box } from '../Box/Box';
import { BraidPortal } from '../BraidPortal/BraidPortal';
import type { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';
import { DefaultTextPropsProvider } from '../private/defaultTextProps';
import { useSpace } from '../useSpace/useSpace';
import { useThemeName } from '../useThemeName/useThemeName';

import * as styles from './TooltipRenderer.css';

const StaticTooltipContext = createContext(false);
export const StaticTooltipProvider = ({
  children,
}: {
  children: ReactNode;
}) => (
  <StaticTooltipContext.Provider value={true}>
    {children}
  </StaticTooltipContext.Provider>
);

export const TooltipTextDefaultsProvider = ({
  children,
}: {
  children: ReactNodeNoStrings;
}) => {
  const themeName = useThemeName();

  return (
    <DefaultTextPropsProvider
      size={themeName === 'docs' ? 'small' : undefined}
      weight="medium"
    >
      {children}
    </DefaultTextPropsProvider>
  );
};

const borderRadius = 'large';

export type ArrowProps = ReturnType<
  ReturnType<typeof usePopperTooltip>['getArrowProps']
>;

interface TriggerProps {
  ref: ReturnType<typeof usePopperTooltip>['setTooltipRef'];
  tabIndex: 0;
  'aria-describedby': string;
}

export const TooltipContent = ({
  children,
  opacity,
  arrowProps,
}: {
  children: ReactNodeNoStrings;
  opacity: 0 | 100;
  arrowProps: ArrowProps;
}) => (
  <Box
    display="flex"
    position="relative"
    transition="fast"
    opacity={opacity === 0 ? 0 : undefined}
    className={
      opacity === 0 ? styles.verticalOffsetBeforeEntrance : styles.translateZ0
    }
  >
    <Box
      boxShadow="large"
      background="neutral"
      borderRadius={borderRadius}
      padding="small"
      className={[styles.maxWidth, styles.translateZ0]}
    >
      <TooltipTextDefaultsProvider>
        <Box className={styles.overflowWrap} position="relative" zIndex={1}>
          {children}
        </Box>
        <Box
          {...arrowProps}
          borderRadius={borderRadius}
          background="neutral"
          className={styles.arrow}
        />
      </TooltipTextDefaultsProvider>
    </Box>
  </Box>
);

const validPlacements = ['top', 'bottom'] as const;

type Placement = (typeof validPlacements)[number];

export interface TooltipRendererProps {
  id: string;
  tooltip: ReactNodeNoStrings;
  placement?: Placement;
  children: (renderProps: { triggerProps: TriggerProps }) => ReactNode;
}

const normaliseRect = (domRect?: DOMRect) => ({
  top: Math.round(domRect?.top || 0),
  left: Math.round(domRect?.left || 0),
  height: Math.round(domRect?.height || 0),
  width: Math.round(domRect?.width || 0),
});
const defaultRect = normaliseRect();

const doesBoundingBoxNeedUpdating = (
  element: HTMLElement | null,
  previousRect: ReturnType<typeof normaliseRect>,
) => {
  const currentRect = normaliseRect(element?.getBoundingClientRect());
  return JSON.stringify(currentRect) !== JSON.stringify(previousRect);
};

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

  const isStatic = useContext(StaticTooltipContext);
  const [controlledVisible, setControlledVisible] = useState(false);
  const [opacity, setOpacity] = useState<0 | 100>(0);
  const { grid, space } = useSpace();
  const triggerBoundingBoxRef =
    useRef<ReturnType<typeof normaliseRect>>(defaultRect);
  const tooltipBoundingRectRef =
    useRef<ReturnType<typeof normaliseRect>>(defaultRect);

  const {
    visible,
    getTooltipProps,
    setTooltipRef,
    tooltipRef,
    setTriggerRef,
    triggerRef,
    getArrowProps,
    update,
  } = usePopperTooltip(
    {
      placement,
      trigger: [isMobile() ? 'click' : 'hover', 'focus'],
      visible: isStatic || controlledVisible,
      onVisibleChange: (newState) => {
        triggerBoundingBoxRef.current = normaliseRect(
          triggerRef?.getBoundingClientRect(),
        );
        tooltipBoundingRectRef.current = normaliseRect(
          tooltipRef?.getBoundingClientRect(),
        );
        setControlledVisible(newState);
      },
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
            offset: [0, space.small * grid],
          },
        },
        {
          name: 'arrow',
          options: {
            padding: space.xsmall * grid,
          },
        },
        ...(isStatic
          ? [
              {
                name: 'flip',
                options: {
                  fallbackPlacements: [],
                },
              },
            ]
          : []),
      ],
    },
  );

  useIsomorphicLayoutEffect(() => {
    // If the tooltip is visible and the size or position of either the trigger
    // or the tooltip has changed, then update the tooltip size and position.
    if (
      controlledVisible &&
      update &&
      (doesBoundingBoxNeedUpdating(triggerRef, triggerBoundingBoxRef.current) ||
        doesBoundingBoxNeedUpdating(tooltipRef, tooltipBoundingRectRef.current))
    ) {
      triggerBoundingBoxRef.current = normaliseRect(
        triggerRef?.getBoundingClientRect(),
      );
      tooltipBoundingRectRef.current = normaliseRect(
        tooltipRef?.getBoundingClientRect(),
      );

      update();
    }
  });

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

  return (
    <>
      {children({
        triggerProps: {
          tabIndex: 0,
          ref: setTriggerRef,
          'aria-describedby': id,
        },
      })}

      {triggerRef && (
        <BraidPortal>
          <div
            id={id}
            role="tooltip"
            hidden={!visible ? true : undefined}
            className={atoms({
              reset: 'div',
              zIndex: 'notification',
              pointerEvents: 'none',
              display: triggerRef && visible ? undefined : 'none',
            })}
            {...(visible
              ? getTooltipProps({
                  ref: setTooltipRef,
                })
              : null)}
          >
            <TooltipContent opacity={opacity} arrowProps={getArrowProps()}>
              {tooltip}
            </TooltipContent>
          </div>
        </BraidPortal>
      )}
    </>
  );
};
