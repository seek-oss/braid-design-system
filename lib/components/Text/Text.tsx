import * as React from 'react';
import { ReactNode, useContext, useMemo } from 'react';
import TextContext from './TextContext';
import { Box, BoxProps } from '../Box/Box';
import { useText, UseTextProps, useTruncate } from '../../hooks/typography';

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
}

export const Text = ({
  id,
  component = 'span',
  size,
  tone,
  align,
  weight,
  baseline = true,
  truncate = false,
  _LEGACY_SPACE_ = false,
  children,
}: TextProps) => {
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

  if (process.env.NODE_ENV !== 'production') {
    // NODE_ENV is static so hook call is not conditional
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const inText = useContext(TextContext);

    if (inText) {
      throw new Error(
        'Text components should not be nested within each other.',
      );
    }
  }

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
      >
        {content}
      </Box>
    </TextContext.Provider>
  );
};
