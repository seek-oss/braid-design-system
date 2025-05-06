import { assignInlineVars } from '@vanilla-extract/dynamic';
import isMobile from 'is-mobile';
import {
  createContext,
  type ReactNode,
  type Ref,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

import { useFallbackId } from '../../hooks/useFallbackId';
import { useIsomorphicLayoutEffect } from '../../hooks/useIsomorphicLayoutEffect';
import { Box } from '../Box/Box';
import { Popover, type PopoverProps } from '../private/Popover/Popover';
import type { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';
import { DefaultTextPropsProvider } from '../private/defaultTextProps';
import { useSpace } from '../useSpace/useSpace';
import { useThemeName } from '../useThemeName/useThemeName';

import * as styles from './TooltipRenderer.css';

const edgeOffset = 'xxsmall';

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

const TooltipContent = ({
  inferredPlacement,
  arrowLeftOffset,
  children,
}: {
  inferredPlacement: PopoverProps['placement'];
  arrowLeftOffset: number;
  children: ReactNodeNoStrings;
}) => (
  <Box
    boxShadow="large"
    background="neutral"
    borderRadius="large"
    padding="small"
    marginX={edgeOffset}
    className={[styles.maxWidth, styles.translateZ0]}
  >
    <TooltipTextDefaultsProvider>
      <Box className={styles.overflowWrap} zIndex={1} position="relative">
        {children}
      </Box>
      <Box
        position="fixed"
        background="neutral"
        className={styles.arrow[inferredPlacement!]}
        style={assignInlineVars({
          [styles.horizontalOffset]: `${arrowLeftOffset}px`,
        })}
      />
    </TooltipTextDefaultsProvider>
  </Box>
);

interface TriggerProps {
  // Using any to support any HTML element type. HTMLElement does not work with HTMLButtonElement
  ref: Ref<any>;
  tabIndex: 0;
  'aria-describedby': string;
}

export interface TooltipRendererProps {
  id?: string;
  tooltip: ReactNodeNoStrings;
  placement?: PopoverProps['placement'];
  children: (renderProps: { triggerProps: TriggerProps }) => ReactNode;
}

export const TooltipRenderer = ({
  id,
  tooltip,
  placement = 'top',
  children,
}: TooltipRendererProps) => {
  const resolvedId = useFallbackId(id);

  const tooltipRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const [inferredPlacement, setInferredPlacement] =
    useState<PopoverProps['placement']>(placement);
  const [arrowLeftOffset, setArrowLeftOffset] = useState(0);

  const { grid, space } = useSpace();
  const edgeOffsetAsPx = space[edgeOffset] * grid;

  const isStatic = useContext(StaticTooltipContext);
  const isMobileDevice = useRef(isMobile()).current;

  useEffect(() => {
    const handleKeyDown = ({ key }: KeyboardEvent) => {
      if (key === 'Escape') {
        setOpen(false);
      }
    };

    const handleScroll = () => {
      setOpen(false);
    };

    const scrollHandlerOptions = {
      capture: true,
      passive: true,
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('scroll', handleScroll, scrollHandlerOptions);
  }, [open]);

  useIsomorphicLayoutEffect(() => {
    if (!open && !isStatic) {
      return;
    }

    const setArrowPosition = () => {
      const tooltipPosition = tooltipRef.current?.getBoundingClientRect();
      const triggerPosition = triggerRef.current?.getBoundingClientRect();

      if (!tooltipPosition || !triggerPosition) {
        return;
      }

      setInferredPlacement(
        tooltipPosition.top > triggerPosition.top ? 'bottom' : 'top',
      );

      const triggerLeft = triggerPosition.left;
      const tooltipLeftToTriggerLeft =
        triggerLeft - tooltipPosition.left - edgeOffsetAsPx;

      setArrowLeftOffset(tooltipLeftToTriggerLeft + triggerPosition.width / 2);
    };

    const timeoutId = setTimeout(() => {
      const frameId = requestAnimationFrame(setArrowPosition);
      return () => cancelAnimationFrame(frameId);
    });

    return () => clearTimeout(timeoutId);
  }, [open, isStatic, edgeOffsetAsPx]);

  return (
    <>
      <Box
        tabIndex={-1}
        onBlur={() => setOpen(false)}
        {...(isMobileDevice
          ? {
              onClick: () => setOpen(!open),
            }
          : {
              onMouseEnter: () => setOpen(true),
              onFocus: () => setOpen(true),
              onMouseLeave: () => setOpen(false),
            })}
      >
        {children({
          triggerProps: {
            tabIndex: 0,
            ref: triggerRef,
            'aria-describedby': resolvedId,
          },
        })}
      </Box>
      <Popover
        id={resolvedId}
        role="tooltip"
        ref={tooltipRef}
        offsetSpace="small"
        align="center"
        placement={placement}
        lockPlacement={isStatic}
        delayVisibility={!isMobileDevice}
        open={isStatic ? true : open}
        triggerRef={triggerRef}
      >
        <TooltipContent
          inferredPlacement={isStatic ? placement : inferredPlacement}
          arrowLeftOffset={arrowLeftOffset}
        >
          {tooltip}
        </TooltipContent>
      </Popover>
    </>
  );
};
