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
  type FC,
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

export const offsetSpace = 'small';

const StaticTooltipContext = createContext(false);

const clamp = (min: number, value: number, max: number) =>
  Math.max(min, Math.min(value, max));

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
  placement,
  arrowPosition,
  arrowRef,
  children,
}: {
  placement: PopoverProps['placement'];
  arrowPosition?: { x?: number; y?: number };
  arrowRef?: React.RefObject<HTMLElement | null>;
  children: ReactNodeNoStrings;
}) => {
  const arrowX = arrowPosition?.x;
  const arrowY = arrowPosition?.y;

  const { space, grid } = useSpace();
  const edgeOffsetInPx = grid * space.xsmall;
  const arrowSizeOffset = parseFloat(styles.constants.arrowSize) * 2;

  const [tooltipWidth, setTooltipWidth] = useState(0);
  const [tooltipHeight, setTooltipHeight] = useState(0);
  const tooltipContainerRef = useRef<HTMLElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    if (!tooltipContainerRef.current) {
      return;
    }

    const { width, height } =
      tooltipContainerRef.current.getBoundingClientRect();
    setTooltipWidth(width);
    setTooltipHeight(height);
  }, [children]);

  const clampedArrowX =
    arrowX !== undefined && tooltipWidth > 0
      ? clamp(
          edgeOffsetInPx,
          arrowX,
          tooltipWidth - edgeOffsetInPx - arrowSizeOffset,
        )
      : arrowX;

  const clampedArrowY =
    arrowY !== undefined && tooltipHeight > 0
      ? clamp(
          edgeOffsetInPx,
          arrowY,
          tooltipHeight - edgeOffsetInPx - arrowSizeOffset,
        )
      : arrowY;

  return (
    <Box
      ref={tooltipContainerRef}
      textAlign="left"
      boxShadow="large"
      background="neutral"
      borderRadius="large"
      padding="small"
      className={[styles.maxWidth, styles.translateZ0]}
    >
      <TooltipTextDefaultsProvider>
        <Box className={styles.overflowWrap} zIndex={1} position="relative">
          {children}
        </Box>
        <Box
          ref={arrowRef}
          position="fixed"
          background="neutral"
          className={styles.arrow[placement ?? 'top']}
          style={assignInlineVars({
            [styles.arrowX]:
              clampedArrowX !== undefined ? `${clampedArrowX}px` : undefined,
            [styles.arrowY]:
              clampedArrowY !== undefined ? `${clampedArrowY}px` : undefined,
          })}
        />
      </TooltipTextDefaultsProvider>
    </Box>
  );
};

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

export const TooltipRenderer: FC<TooltipRendererProps> = ({
  id,
  tooltip,
  placement = 'top',
  children,
}) => {
  const resolvedId = useFallbackId(id);

  const triggerRef = useRef<HTMLElement | null>(null);
  const arrowRef = useRef<HTMLElement | null>(null);

  const [open, setOpen] = useState(false);
  const [resolvedPlacement, setResolvedPlacement] =
    useState<PopoverProps['placement']>(placement);
  const [arrowPosition, setArrowPosition] = useState<
    { x?: number; y?: number } | undefined
  >();

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
        triggerRef.current.addEventListener('click', closeTooltip);
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
          triggerRef.current.removeEventListener('click', closeTooltip);
        }
      }
    };
  }, [open, isMobileDevice]);

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
        offsetSpace={offsetSpace}
        align="center"
        placement={placement}
        lockPlacement={isStatic}
        delayVisibility={!isMobileDevice}
        modal={false}
        open={showTooltip}
        onClose={!isStatic ? () => setOpen(false) : undefined}
        onPlacementChange={({ placement: newPlacement, arrow }) => {
          setResolvedPlacement(newPlacement);
          setArrowPosition(arrow);
        }}
        triggerRef={triggerRef}
        arrowRef={arrowRef}
      >
        <TooltipContent
          placement={resolvedPlacement}
          arrowPosition={arrowPosition}
          arrowRef={arrowRef}
        >
          {tooltip}
        </TooltipContent>
      </Popover>
    </>
  );
};
