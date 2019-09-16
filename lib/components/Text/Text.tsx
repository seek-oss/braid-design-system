import React, { ReactNode, useContext, useMemo } from 'react';
import classnames from 'classnames';
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
}

export const Text = ({
  id,
  component = 'span',
  size,
  tone,
  weight,
  baseline = true,
  children,
}: TextProps) => {
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
      <Box
        id={id}
        display="block"
        component={component}
        className={classnames(textStyles)}
      >
        {children}
      </Box>
    </TextContext.Provider>
  );
};
