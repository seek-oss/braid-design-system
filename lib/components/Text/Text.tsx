import React, { ReactNode, useContext, useMemo } from 'react';
import assert from 'assert';
import TextContext from './TextContext';
import { Box, BoxProps } from '../Box/Box';
import buildDataAttributes, {
  DataAttributeMap,
} from '../private/buildDataAttributes';
import { useText, UseTextProps, useTruncate } from '../../hooks/typography';
import { DefaultTextToneContext } from '../private/DefaultTextToneContext';

export interface TextProps extends Pick<BoxProps, 'component'> {
  id?: string;
  children?: ReactNode;
  size?: UseTextProps['size'];
  tone?: UseTextProps['tone'];
  weight?: UseTextProps['weight'];
  baseline?: UseTextProps['baseline'];
  align?: BoxProps['textAlign'];
  truncate?: boolean;
  _LEGACY_SPACE_?: boolean;
  data?: DataAttributeMap;
}

export const Text = ({
  id,
  component = 'span',
  size,
  tone: toneProp,
  align,
  weight,
  baseline = true,
  truncate = false,
  _LEGACY_SPACE_ = false,
  data,
  children,
}: TextProps) => {
  assert(
    !useContext(TextContext),
    'Text components should not be nested within each other',
  );

  const defaultTone = useContext(DefaultTextToneContext);
  const tone = toneProp ?? defaultTone ?? undefined;
  const textStyles = useText({ weight, size, baseline, tone, _LEGACY_SPACE_ });
  const truncateStyles = useTruncate();

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

  const content = truncate ? (
    <Box
      component="span"
      display="block"
      overflow="hidden"
      className={truncateStyles}
    >
      {children}
    </Box>
  ) : (
    children
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
        {content}
      </Box>
    </TextContext.Provider>
  );
};
