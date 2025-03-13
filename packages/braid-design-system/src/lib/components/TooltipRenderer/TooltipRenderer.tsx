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

import { Box } from '../Box/Box';
import {
  edgeOffset,
  Popover,
  type Placement,
} from '../private/Popover/Popover';
import { PopoverContext } from '../private/Popover/PopoverContext';
import type { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';
import { DefaultTextPropsProvider } from '../private/defaultTextProps';
import { useThemeName } from '../useThemeName/useThemeName';

import * as styles from '../TooltipRenderer/TooltipRenderer.css';

const borderRadius = 'large';

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

const TooltipContent = ({ children }: { children: ReactNodeNoStrings }) => {
  const popoverContext = useContext(PopoverContext);

  if (!popoverContext) {
    throw new Error(
      'TooltipRendererNew must be rendered within a PopoverContextProvider',
    );
  }

  return (
    <Box
      boxShadow="large"
      background="neutral"
      borderRadius={borderRadius}
      padding="small"
      marginX={edgeOffset}
      className={[styles.maxWidth, styles.translateZ0]}
    >
      <TooltipTextDefaultsProvider>
        <Box className={styles.overflowWrap} position="relative" zIndex={1}>
          {children}
        </Box>
        <Box
          position="fixed"
          background="neutral"
          className={styles.arrow[popoverContext.flipPlacement]}
          style={assignInlineVars({
            [styles.horizontalOffset]: `${popoverContext.arrowOffset}px`,
          })}
        />
      </TooltipTextDefaultsProvider>
    </Box>
  );
};

interface TriggerProps {
  // Using any to support any HTML element type. Specific types do not work with all elements.
  ref: Ref<any>;
  tabIndex: 0;
  'aria-describedby': string;
}

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
  const triggerWrapperRef = useRef<HTMLElement>(null);
  const triggerRef = useRef(null);
  const [open, setOpen] = useState(false);

  const isStatic = useContext(StaticTooltipContext);

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

  useEffect(() => {});

  return (
    <>
      <Box
        ref={triggerWrapperRef}
        tabIndex={-1}
        onClick={() => isMobile() && setOpen(!open)}
        onMouseEnter={() => !isMobile() && setOpen(true)}
        onFocus={() => !isMobile() && setOpen(true)}
        onMouseLeave={() => !isMobile() && setOpen(false)}
        onBlur={() => !isMobile() && setOpen(false)}
      >
        {children({
          triggerProps: {
            tabIndex: 0,
            ref: triggerRef,
            'aria-describedby': id,
          },
        })}
      </Box>
      <Popover
        id={id}
        isTooltip
        offsetSpace="small"
        align="center"
        placement={placement}
        lockPlacement={isStatic}
        open={isStatic ? true : open}
        focusOnOpen={false}
        triggerWrapperRef={triggerRef}
        returnFocusRef={triggerRef}
      >
        <TooltipContent>{tooltip}</TooltipContent>
      </Popover>
    </>
  );
};
