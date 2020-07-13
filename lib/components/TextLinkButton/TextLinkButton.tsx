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
  extends Omit<TextLinkRendererProps, 'children'> {
  id?: NativeSpanProps['id'];
  onClick?: () => void;
  data?: DataAttributeMap;
  children: ReactNode;
}

const noop = () => {};
export const TextLinkButton = ({
  showVisited,
  hitArea,
  id,
  onClick = noop,
  data,
  children,
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
    <TextLinkRenderer showVisited={showVisited} hitArea={hitArea}>
      {(styleProps) => (
        <Box
          role="button"
          tabIndex={0}
          component="span"
          onClick={handleClick}
          onKeyDown={handleKeyboard}
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
