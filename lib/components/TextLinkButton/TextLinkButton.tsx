import React, {
  useCallback,
  AllHTMLAttributes,
  KeyboardEvent,
  ReactNode,
} from 'react';
import { Box } from '../';
import {
  TextLinkRenderer,
  TextLinkRendererProps,
} from '../TextLinkRenderer/TextLinkRenderer';
import buildDataAttributes, {
  DataAttributeMap,
} from '../private/buildDataAttributes';

type NativeSpanProps = AllHTMLAttributes<HTMLSpanElement>;
export interface TextLinkButtonProps
  extends Omit<TextLinkRendererProps, 'children' | 'showVisited'> {
  id?: NativeSpanProps['id'];
  onClick?: () => void;
  data?: DataAttributeMap;
  children: ReactNode;
  'aria-controls'?: NativeSpanProps['aria-controls'];
  'aria-expanded'?: NativeSpanProps['aria-expanded'];
  'aria-describedby'?: NativeSpanProps['aria-describedby'];
}

const noop = () => {};
export const TextLinkButton = ({
  hitArea,
  id,
  onClick = noop,
  data,
  children,
  'aria-controls': ariaControls,
  'aria-expanded': ariaExpanded,
  'aria-describedby': ariaDescribedBy,
}: TextLinkButtonProps) => {
  const handleClick = useCallback(() => onClick(), [onClick]);

  const handleKeyboard = useCallback(
    (event: KeyboardEvent<HTMLSpanElement>) => {
      if (event.key === 'Enter' || event.key === ' ') {
        onClick();
        event.preventDefault();
      }
    },
    [onClick],
  );

  return (
    <TextLinkRenderer hitArea={hitArea}>
      {(styleProps) => (
        <Box
          role="button"
          tabIndex={0}
          component="span"
          onClick={handleClick}
          onKeyDown={handleKeyboard}
          aria-controls={ariaControls}
          aria-expanded={ariaExpanded}
          aria-describedby={ariaDescribedBy}
          id={id}
          {...styleProps}
          {...buildDataAttributes(data)}
        >
          {children}
        </Box>
      )}
    </TextLinkRenderer>
  );
};
