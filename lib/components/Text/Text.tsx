import React, { ReactNode, useContext, useMemo } from 'react';
import assert from 'assert';
import { TextContext } from './TextContext';
import { Box, BoxProps } from '../Box/Box';
import buildDataAttributes, {
  DataAttributeMap,
} from '../private/buildDataAttributes';
import { useText, UseTextProps } from '../../hooks/typography';
import { useDefaultTextProps } from '../private/defaultTextProps';
import { Truncate } from '../private/Truncate/Truncate';

export interface TextProps extends Pick<BoxProps, 'component'> {
  id?: string;
  children?: ReactNode;
  size?: UseTextProps['size'];
  tone?: UseTextProps['tone'];
  weight?: UseTextProps['weight'];
  baseline?: UseTextProps['baseline'];
  align?: BoxProps['textAlign'];
  truncate?: boolean;
  data?: DataAttributeMap;
}

export const Text = ({
  id,
  component = 'span',
  size: sizeProp,
  tone: toneProp,
  align,
  weight: weightProp,
  baseline = true,
  truncate = false,
  data,
  children,
}: TextProps) => {
  assert(
    !useContext(TextContext),
    'Text components should not be nested within each other',
  );

  const { size, weight, tone } = useDefaultTextProps({
    size: sizeProp,
    weight: weightProp,
    tone: toneProp,
  });
  const textStyles = useText({ weight, size, baseline, tone });

  // Prevent re-renders when context values haven't changed
  const textContextValue = useMemo(
    () => ({
      tone,
      size,
      weight,
      baseline,
    }),
    [tone, size, weight, baseline],
  );

  return (
    <TextContext.Provider value={textContextValue}>
      <Box
        id={id}
        display="block"
        component={component}
        textAlign={align}
        className={textStyles}
        {...(data ? buildDataAttributes(data) : undefined)}
      >
        {truncate ? <Truncate>{children}</Truncate> : children}
      </Box>
    </TextContext.Provider>
  );
};
