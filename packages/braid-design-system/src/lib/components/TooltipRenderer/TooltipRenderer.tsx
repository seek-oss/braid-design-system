import { assignInlineVars } from '@vanilla-extract/dynamic';
import isMobile from 'is-mobile';
import {
  createContext,
  type ReactNode,
  type RefCallback,
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
import { animationTimeout } from '../private/animationTimeout';
import { DefaultTextPropsProvider } from '../private/defaultTextProps';
import { useSpace } from '../useSpace/useSpace';
import { useThemeName } from '../useThemeName/useThemeName';

import * as styles from './TooltipRenderer.css';

const edgeOffset = 'xxsmall';
export const offsetSpace = 'small';

type ArrowLeftOffset = number | null;

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

export const TooltipContent = ({
  inferredPlacement,
  arrowLeftOffset,
  children,
}: {
  inferredPlacement: PopoverProps['placement'];
  arrowLeftOffset: ArrowLeftOffset;
  children: ReactNodeNoStrings;
}) => (
  <Box
    textAlign="left"
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
  ref: RefCallback<HTMLElement>;
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

  const tooltipRef = useRef<HTMLElement | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const [open, setOpen] = useState(false);
  const [triggerPosition, setTriggerPosition] = useState<DOMRect | undefined>(
    undefined,
  );
  const [tooltipPosition, setTooltipPosition] = useState<DOMRect | undefined>(
    undefined,
  );

  const { grid, space } = useSpace();
  const isStatic = useContext(StaticTooltipContext);
  const isMobileDevice = useRef(isMobile()).current;

  const onScreen = useRef<boolean | null>(null);
  const showTooltip = isStatic ? true : open;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]: IntersectionObserverEntry[]) => {
        onScreen.current = entry.isIntersecting;
      },
    );

    if (triggerRef.current) {
      observer.observe(triggerRef.current);
    }

    const handleScroll = () => {
      // onScreen.current will always be null during testing,
      // as IntersectionObserver is mocked for tests
      if (onScreen.current || onScreen.current === null) {
        setOpen(false);
      }
    };

    const scrollHandlerOptions = {
      capture: true,
      passive: true,
    };

    document.addEventListener('scroll', handleScroll, scrollHandlerOptions);

    return () => {
      observer.disconnect();

      document.removeEventListener(
        'scroll',
        handleScroll,
        scrollHandlerOptions,
      );
    };
  }, []);

  useEffect(() => {
    const toggleTooltip = () => setOpen(!open);
    const openTooltip = () => setOpen(true);
    const closeTooltip = () => setOpen(false);

    if (triggerRef.current) {
      triggerRef.current.addEventListener('blur', closeTooltip);

      if (isMobileDevice) {
        triggerRef.current.addEventListener('click', toggleTooltip);
      } else {
        triggerRef.current.addEventListener('focus', openTooltip);
        triggerRef.current.addEventListener('mouseenter', openTooltip);
        triggerRef.current.addEventListener('mouseleave', closeTooltip);
      }
    }

    return () => {
      if (triggerRef.current) {
        triggerRef.current.removeEventListener('blur', closeTooltip);

        if (isMobileDevice) {
          triggerRef.current.removeEventListener('click', toggleTooltip);
        } else {
          triggerRef.current.removeEventListener('focus', openTooltip);
          triggerRef.current.removeEventListener('mouseenter', openTooltip);
          triggerRef.current.removeEventListener('mouseleave', closeTooltip);
        }
      }
    };
  }, [open, isMobileDevice]);

  const handleTooltipPosition = () => {
    const setPositions = () => {
      if (tooltipRef.current) {
        setTooltipPosition(tooltipRef.current.getBoundingClientRect());
      }
      if (triggerRef.current) {
        setTriggerPosition(triggerRef.current.getBoundingClientRect());
      }
    };

    setTimeout(() => {
      const frameId = requestAnimationFrame(setPositions);
      return () => cancelAnimationFrame(frameId);
      // Needs to be slightly less than the animation timeout to update position before showing
    }, animationTimeout / 2);
  };

  useIsomorphicLayoutEffect(() => {
    if (!showTooltip) {
      return;
    }

    handleTooltipPosition();
    window.addEventListener('resize', handleTooltipPosition);

    return () => {
      window.removeEventListener('resize', handleTooltipPosition);
    };
  }, [showTooltip]);

  let inferredPlacement: typeof placement = placement;
  let arrowLeftOffset = 0;

  if (tooltipPosition && triggerPosition) {
    inferredPlacement =
      tooltipPosition.top > triggerPosition.top ? 'bottom' : 'top';

    const edgeOffsetInPx = space[edgeOffset] * grid;
    const tooltipLeftToTriggerLeft =
      triggerPosition.left - tooltipPosition.left - edgeOffsetInPx;

    arrowLeftOffset = tooltipLeftToTriggerLeft + triggerPosition.width / 2;
  }

  return (
    <>
      {children({
        triggerProps: {
          tabIndex: 0,
          ref: (el) => {
            triggerRef.current = el;
          },
          'aria-describedby': resolvedId,
        },
      })}
      <Popover
        id={resolvedId}
        role="tooltip"
        ref={tooltipRef}
        offsetSpace={offsetSpace}
        align="center"
        placement={placement}
        lockPlacement={isStatic}
        delayVisibility={!isMobileDevice}
        modal={false}
        open={showTooltip}
        onClose={!isStatic ? () => setOpen(false) : undefined}
        triggerRef={triggerRef}
      >
        <TooltipContent
          inferredPlacement={inferredPlacement}
          arrowLeftOffset={arrowLeftOffset}
        >
          {tooltip}
        </TooltipContent>
      </Popover>
    </>
  );
};
