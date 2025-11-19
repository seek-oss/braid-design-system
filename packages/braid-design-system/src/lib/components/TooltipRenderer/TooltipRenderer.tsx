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
import {
  Popover,
  type PopoverProps,
  usePopoverContext,
} from '../private/Popover/Popover';
import type { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';
import { DefaultTextPropsProvider } from '../private/defaultTextProps';
import { useThemeName } from '../useThemeName/useThemeName';

import * as styles from './TooltipRenderer.css';

const edgeOffset = 'xxsmall';
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
  inferredPlacement,
  arrowRef,
  children,
  arrowLeftOffset, // Todo - remove prop
}: {
  inferredPlacement: PopoverProps['placement'];
  arrowRef?: React.RefObject<HTMLElement | null>;
  children: ReactNodeNoStrings;
  arrowLeftOffset?: number;
}) => {
  const popoverContext = usePopoverContext();

  const arrowX = arrowLeftOffset ?? popoverContext?.arrow?.x ?? 0;
  const arrowY = popoverContext?.arrow?.y;
  const placement =
    inferredPlacement ?? popoverContext?.actualPlacement ?? 'top';
  const isStatic = arrowLeftOffset !== undefined;

  return (
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
          ref={arrowRef}
          position="fixed"
          background="neutral"
          className={[
            styles.arrow[placement],
            isStatic ? styles.staticArrow : undefined,
          ]}
          style={{
            left: arrowX !== undefined ? `${arrowX}px` : undefined,
            top: arrowY !== undefined ? `${arrowY}px` : undefined,
          }}
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
        arrowRef={arrowRef}
      >
        <TooltipContent inferredPlacement={placement} arrowRef={arrowRef}>
          {tooltip}
        </TooltipContent>
      </Popover>
    </>
  );
};
