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
import { Box } from '../Box/Box';
import { Popover, type PopoverProps } from '../private/Popover/Popover';
import type { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';
import { DefaultTextPropsProvider } from '../private/defaultTextProps';
import { useThemeName } from '../useThemeName/useThemeName';

import * as styles from './TooltipRenderer.css';

export const offsetSpace = 'small';

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

  return (
    <Box
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
            [styles.arrowX]: arrowX !== undefined ? `${arrowX}px` : 'unset',
            [styles.arrowY]: arrowY !== undefined ? `${arrowY}px` : 'unset',
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

export const TooltipRenderer = ({
  id,
  tooltip,
  placement = 'top',
  children,
}: TooltipRendererProps) => {
  const resolvedId = useFallbackId(id);

  const tooltipRef = useRef<HTMLElement | null>(null);
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
    setResolvedPlacement(placement);
  }, [placement]);

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
