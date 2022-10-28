import type { AllHTMLAttributes, ReactNode, KeyboardEvent } from 'react';
import React, { useRef, useCallback } from 'react';
import { Box } from '../Box/Box';
import type { DataAttributeMap } from '../private/buildDataAttributes';
import buildDataAttributes from '../private/buildDataAttributes';
import type { TextLinkStyles } from '../TextLink/TextLink';
import { useLinkStyles } from '../TextLink/TextLink';

type NativeSpanProps = AllHTMLAttributes<HTMLSpanElement>;
export interface TextLinkButtonProps
  extends Omit<TextLinkStyles, 'showVisited'> {
  id?: NativeSpanProps['id'];
  onClick?: NativeSpanProps['onClick'];
  data?: DataAttributeMap;
  children: ReactNode;
  'aria-controls'?: NativeSpanProps['aria-controls'];
  'aria-expanded'?: NativeSpanProps['aria-expanded'];
  'aria-describedby'?: NativeSpanProps['aria-describedby'];
  tabIndex?: NativeSpanProps['tabIndex'];
}

const noop = () => {};
export const TextLinkButton = ({
  weight,
  hitArea,
  id,
  onClick = noop,
  data,
  children,
  'aria-controls': ariaControls,
  'aria-expanded': ariaExpanded,
  'aria-describedby': ariaDescribedBy,
  tabIndex,
  ...restProps
}: TextLinkButtonProps) => {
  const buttonRef = useRef<HTMLSpanElement>(null);
  const classes = useLinkStyles({
    reset: false,
    weight,
    hitArea,
  });

  const handleKeyboard = useCallback(
    (event: KeyboardEvent<HTMLSpanElement>) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        buttonRef.current?.click();
      }
    },
    [buttonRef],
  );

  return (
    <Box
      ref={buttonRef}
      role="button"
      tabIndex={tabIndex ?? 0}
      component="span"
      onClick={onClick}
      onKeyDown={handleKeyboard}
      aria-controls={ariaControls}
      aria-expanded={ariaExpanded}
      aria-describedby={ariaDescribedBy}
      id={id}
      className={classes}
      {...buildDataAttributes({ data, validateRestProps: restProps })}
    >
      {children}
    </Box>
  );
};
