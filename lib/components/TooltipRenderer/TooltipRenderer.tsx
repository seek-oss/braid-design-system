import React, {
  useState,
  useEffect,
  useRef,
  ReactNode,
  SyntheticEvent,
} from 'react';
import { createPortal } from 'react-dom';
import { useStyles } from 'sku/react-treat';
import { usePopperTooltip } from 'react-popper-tooltip';
import { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';
import { Box } from '../Box/Box';
import * as styleRefs from './TooltipRenderer.treat';
import { tabbable } from 'tabbable';

interface TriggerProps {
  ref: any;
  tabIndex: 0;
  'aria-describedby': string;
}

export interface TooltipRendererProps {
  id: string;
  interactive?: boolean;
  content:
    | ReactNodeNoStrings
    | ((contentRenderProps: { close: () => void }) => ReactNodeNoStrings);
  children: (renderProps: { triggerProps: TriggerProps }) => ReactNode;
}

export const TooltipRenderer = ({
  id,
  content,
  interactive = false,
  children,
}: TooltipRendererProps) => {
  const styles = useStyles(styleRefs);
  const contentRef = useRef<HTMLDivElement>(null);
  const [controlledVisible, setControlledVisible] = useState(false);

  const {
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
    triggerRef,
    visible,
  } = usePopperTooltip({
    placement: 'bottom',
    trigger: interactive ? 'click' : ['click', 'hover', 'focus'],
    visible: controlledVisible,
    onVisibleChange: (state) => {
      setControlledVisible(state);

      if (interactive) {
        if (state) {
          contentRef.current?.focus();
        }
      }
    },
  });

  useEffect(() => {
    if (visible) {
      const handleKeyDown = ({ key }: KeyboardEvent) => {
        if (key === 'Escape') {
          setControlledVisible(false);

          if (interactive) {
            triggerRef?.focus();
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [visible, interactive, triggerRef]);

  return (
    <>
      {children({
        triggerProps: { tabIndex: 0, ref: setTriggerRef },
      })}

      {visible &&
        createPortal(
          <Box
            ref={setTooltipRef}
            zIndex="notification"
            {...(getTooltipProps() as any)}
          >
            <Box padding="xxsmall">
              <Box padding="xsmall">
                {interactive ? (
                  <Box
                    tabIndex={0}
                    onFocus={() => {
                      setControlledVisible(false);
                      triggerRef?.focus();
                    }}
                  />
                ) : null}
                <Box
                  ref={contentRef}
                  tabIndex={interactive ? -1 : undefined}
                  background="card"
                  padding="small"
                  boxShadow="large"
                  borderRadius="standard"
                >
                  {typeof content === 'function'
                    ? content({
                        close: () => {
                          setControlledVisible(false);
                          triggerRef?.focus();
                        },
                      })
                    : content}
                </Box>
                {interactive ? (
                  <Box
                    tabIndex={0}
                    onFocus={() => {
                      if (triggerRef) {
                        setControlledVisible(false);
                        const tabbableElements = tabbable(document.body);
                        tabbableElements[
                          tabbableElements.indexOf(triggerRef) + 1
                        ]?.focus();
                      }
                    }}
                  />
                ) : null}
              </Box>
            </Box>
          </Box>,
          document.body,
        )}
    </>
  );

  return (
    <TooltipTrigger
      placement="top"
      trigger={interactive ? 'click' : ['click', 'hover', 'focus']}
      onVisibilityChange={(visible) => {
        if (interactive) {
          if (visible) {
            contentRef.current?.focus();
          } else if (rootRef && 'current' in rootRef) {
            rootRef.current?.focus();
          }
        }
      }}
      tooltip={({
        arrowRef,
        tooltipRef,
        getArrowProps,
        getTooltipProps,
        placement,
      }) => (
        <Box
          id={id}
          role="tooltip"
          {...getTooltipProps({
            ref: tooltipRef,
          })}
        >
          <Box padding="xxsmall">
            <Box
              display="none"
              {...getArrowProps({
                ref: arrowRef,
                className: styles.arrow,
                'data-placement': placement,
              })}
            />
            <Box padding="xsmall">
              <Box
                ref={contentRef}
                tabIndex={interactive ? 0 : undefined}
                background="card"
                padding="small"
                boxShadow="large"
                borderRadius="standard"
              >
                {content}
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    >
      {({ getTriggerProps, triggerRef }) => {
        const {
          onTouchEnd,
          onClick,
          onMouseEnter,
          onMouseLeave,
          onMouseMove,
          onFocus,
          onBlur,
        } = getTriggerProps({
          ref: triggerRef,
        });

        rootRef = triggerRef;

        return children({
          ref: triggerRef,
          tabIndex: 0,
          'aria-describedby': id,
          onTouchEnd,
          onClick,
          onMouseEnter,
          onMouseLeave,
          onMouseMove,
          onFocus,
          onBlur,
        });
      }}
    </TooltipTrigger>
  );
};
