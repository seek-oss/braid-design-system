import React, { useContext, useMemo } from 'react';
import assert from 'assert';
import { TextContext } from './TextContext';
import { useDefaultTextProps } from '../private/defaultTextProps';
import type { TextStyleProps } from '../../css/typography';
import { textStyles } from '../../css/typography';
import type { TypographyProps } from '../private/Typography/Typography';
import { Typography } from '../private/Typography/Typography';

export interface TextProps extends TypographyProps {
  size?: TextStyleProps['size'];
  tone?: TextStyleProps['tone'];
  weight?: TextStyleProps['weight'];
  baseline?: TextStyleProps['baseline'];
}

export const Text = ({
  size: sizeProp,
  tone: toneProp,
  weight: weightProp,
  baseline = true,
  ...typographyProps
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

  // Prevent re-renders when context values haven't changed
  const textStylingProps = useMemo(
    () => ({
      tone,
      size,
      weight,
      baseline,
    }),
    [tone, size, weight, baseline],
  );

  return (
    <TextContext.Provider value={textStylingProps}>
      <Typography
        {...typographyProps}
        className={textStyles(textStylingProps)}
      />
    </TextContext.Provider>
  );
};
