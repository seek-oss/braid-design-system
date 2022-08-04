import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from 'react';
import { usePopperTooltip } from 'react-popper-tooltip';
import isMobile from 'is-mobile';
import assert from 'assert';
import { BraidPortal } from '../BraidPortal/BraidPortal';
import { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';
import { atoms } from '../../css/atoms/atoms';
import { DefaultTextPropsProvider } from '../private/defaultTextProps';
import { useSpace } from '../useSpace/useSpace';
import { useThemeName } from '../useThemeName/useThemeName';
import { Box } from '../Box/Box';
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

const borderRadius = 'xlarge';

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
      background="customDark"
      borderRadius={borderRadius}
      className={[
        styles.background,
        styles.maxWidth,
        styles.translateZ0,
        styles.padding,
      ]}
    >
      <TooltipTextDefaultsProvider>
        <Box position="relative" zIndex={1}>
          {children}
        </Box>
        <Box
          {...arrowProps}
          borderRadius={borderRadius}
          className={[styles.arrow, styles.background]}
        />
      </TooltipTextDefaultsProvider>
    </Box>
  </Box>
);

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

  const isStatic = useContext(StaticTooltipContext);
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
    getArrowProps,
  } = usePopperTooltip(
    {
      placement,
      trigger: [isMobile() ? 'click' : 'hover', 'focus'],
      visible: isStatic || controlledVisible,
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
            offset: [0, space.small * grid],
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
