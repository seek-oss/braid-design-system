import React, {
  useRef,
  useCallback,
  AllHTMLAttributes,
  ReactNode,
  KeyboardEvent,
} from 'react';
import { Box } from '../Box/Box';
import {
  PrivateTextLinkRenderer,
  PrivateTextLinkRendererProps,
} from '../TextLinkRenderer/TextLinkRenderer';
import buildDataAttributes, {
  DataAttributeMap,
} from '../private/buildDataAttributes';

type NativeSpanProps = AllHTMLAttributes<HTMLSpanElement>;
export interface TextLinkButtonProps
  extends Omit<
    PrivateTextLinkRendererProps,
    'reset' | 'children' | 'showVisited'
  > {
  id?: NativeSpanProps['id'];
  onClick?: NativeSpanProps['onClick'];
  data?: DataAttributeMap;
  children: ReactNode;
  'aria-controls'?: NativeSpanProps['aria-controls'];
  'aria-expanded'?: NativeSpanProps['aria-expanded'];
  'aria-describedby'?: NativeSpanProps['aria-describedby'];
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
}: TextLinkButtonProps) => {
  const buttonRef = useRef<HTMLSpanElement>(null);

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
    <PrivateTextLinkRenderer reset={false} weight={weight} hitArea={hitArea}>
      {(styleProps) => (
        <Box
          ref={buttonRef}
          role="button"
          tabIndex={0}
          component="span"
          onClick={onClick}
          onKeyDown={handleKeyboard}
          aria-controls={ariaControls}
          aria-expanded={ariaExpanded}
          aria-describedby={ariaDescribedBy}
          id={id}
          {...styleProps}
          {...(data ? buildDataAttributes(data) : undefined)}
        >
          {children}
        </Box>
      )}
    </PrivateTextLinkRenderer>
  );
};
