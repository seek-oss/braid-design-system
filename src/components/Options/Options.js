import React from 'react';
import Box from '../Box/Box';
import FieldLabel from '../FieldLabel/FieldLabel';
import FieldMessage from '../FieldMessage/FieldMessage';

const Options = ({
  id,
  label,
  tone,
  message,
  labelProps,
  messageProps,
  children,
  ...props
}) => {
  const fieldMessageId = `${id}-message`;

  return (
    <Box {...props}>
      <div id={id} aria-describedby={fieldMessageId}>
        <FieldLabel marginBottom="medium" {...labelProps}>
          {label}
        </FieldLabel>
        {React.Children.map(children, child =>
          React.cloneElement(child, { message: false })
        )}
      </div>
      {message !== false && (
        <FieldMessage
          tone={tone}
          message={message}
          id={fieldMessageId}
          {...messageProps}
        />
      )}
    </Box>
  );
};

Options.displayName = 'Options';

export default Options;
