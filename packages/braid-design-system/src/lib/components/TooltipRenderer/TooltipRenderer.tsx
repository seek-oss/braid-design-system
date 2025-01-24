import { assignInlineVars } from '@vanilla-extract/dynamic';
import isMobile from 'is-mobile';
import {
  createContext,
  type MutableRefObject,
  type ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

import { Box } from '../Box/Box';
import {
  BasePopover,
  type Placement,
} from '../private/BasePopover/BasePopover';
import { BasePopoverContext } from '../private/BasePopover/BasePopoverContext';
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

const TooltipContent = ({
  id,
  children,
}: {
  id: string;
  children: ReactNodeNoStrings;
}) => {
  const basePopoverContext = useContext(BasePopoverContext);

  if (!basePopoverContext) {
    throw new Error(
      'TooltipRendererNew must be rendered within a BasePopoverContextProvider',
    );
  }

  return (
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
      </TooltipTextDefaultsProvider>
      <Box
        position="fixed"
        background="neutral"
        className={styles.arrow[basePopoverContext.flipPlacement]}
        style={assignInlineVars({
          [styles.horizontalOffset]: `${basePopoverContext.arrowOffset}px`,
        })}
      />
    </Box>
  );
};

interface TriggerProps {
  ref: MutableRefObject<HTMLElement | null>;
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
  const triggerRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  const isStatic = useContext(StaticTooltipContext);

  useEffect(() => {
    if (!open) {
      setVisible(false);
      return;
    }

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

    const timeout = setTimeout(() => setVisible(true), isMobile() ? 0 : 250);

    return () => clearTimeout(timeout);
  }, [open]);

  useEffect(() => {});

  return (
    <>
      <Box
        ref={triggerWrapperRef}
        tabIndex={-1}
        onMouseEnter={() => setOpen(true)}
        onFocus={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onBlur={() => setOpen(false)}
      >
        {children({
          triggerProps: {
            tabIndex: 0,
            ref: triggerRef,
            'aria-describedby': id,
          },
        })}
      </Box>
      <BasePopover
        type="tooltip"
        offsetSpace="small"
        align="center"
        placement={placement}
        lockPlacement={isStatic}
        open={isStatic ? true : visible}
        focusPopoverOnOpen={false}
        triggerWrapperRef={triggerRef}
        returnFocusRef={triggerRef}
      >
        <TooltipContent id={id}>{tooltip}</TooltipContent>
      </BasePopover>
    </>
  );
};
