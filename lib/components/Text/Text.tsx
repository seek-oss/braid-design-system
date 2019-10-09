import React, { ReactNode, useContext, useMemo } from 'react';
import TextContext from './TextContext';
import { Box, BoxProps } from '../Box/Box';
import { useText, UseTextProps } from '../../hooks/typography';

export interface TextProps extends Pick<BoxProps, 'component'> {
  id?: string;
  children?: ReactNode;
  size?: UseTextProps['size'];
  tone?: UseTextProps['tone'];
  weight?: UseTextProps['weight'];
  baseline?: UseTextProps['baseline'];
  _LEGACY_SPACE_?: boolean;
}

export const Text = ({
  id,
  component = 'span',
  size,
  tone,
  weight,
  baseline = true,
  _LEGACY_SPACE_ = false,
  children,
}: TextProps) => {
  const textStyles = useText({ weight, size, baseline, tone, _LEGACY_SPACE_ });

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
    const inText = useContext(TextContext);

    if (inText) {
      throw new Error(
        'Text components should not be nested within each other.',
      );
    }
  }

  return (
    <TextContext.Provider value={textContextValue}>
      <Box id={id} display="block" component={component} className={textStyles}>
        {children}
      </Box>
    </TextContext.Provider>
  );
};
