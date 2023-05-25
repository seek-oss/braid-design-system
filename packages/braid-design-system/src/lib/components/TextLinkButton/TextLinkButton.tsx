import React, {
  type AllHTMLAttributes,
  type ReactNode,
  type KeyboardEvent,
  type ReactElement,
  useRef,
  useCallback,
} from 'react';
import type { UseIconProps } from '../../hooks/useIcon';
import { Box } from '../Box/Box';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';
import {
  type TextLinkStyles,
  TextLinkContent,
  useLinkStyles,
} from '../TextLink/TextLink';

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
  'aria-label'?: NativeSpanProps['aria-label'];
  tabIndex?: NativeSpanProps['tabIndex'];
  icon?: ReactElement<UseIconProps>;
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
  'aria-label': ariaLabel,
  tabIndex,
  icon,
  iconPosition,
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
      aria-label={ariaLabel}
      id={id}
      className={classes}
      {...buildDataAttributes({ data, validateRestProps: restProps })}
    >
      <TextLinkContent icon={icon} iconPosition={iconPosition}>
        {children}
      </TextLinkContent>
    </Box>
  );
};
