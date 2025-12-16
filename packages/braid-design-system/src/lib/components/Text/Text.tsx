import assert from 'assert';

import { type FC, useContext, useMemo } from 'react';

import { type TextStyleProps, textStyles } from '../../css/typography';
import {
  type TypographyProps,
  Typography,
} from '../private/Typography/Typography';
import { useDefaultTextProps } from '../private/defaultTextProps';

import { TextContext } from './TextContext';

export interface TextProps extends TypographyProps {
  size?: TextStyleProps['size'];
  tone?: TextStyleProps['tone'];
  weight?: TextStyleProps['weight'];
  baseline?: TextStyleProps['baseline'];
}

export const Text: FC<TextProps> = ({
  size: sizeProp,
  tone: toneProp,
  weight: weightProp,
  maxLines: maxLinesProp,
  baseline = true,
  ...typographyProps
}) => {
  assert(
    !useContext(TextContext),
    'Text components should not be nested within each other',
  );

  const { size, weight, tone, maxLines } = useDefaultTextProps({
    size: sizeProp,
    weight: weightProp,
    tone: toneProp,
    maxLines: maxLinesProp,
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
        maxLines={maxLines}
        {...typographyProps}
        className={textStyles(textStylingProps)}
      />
    </TextContext.Provider>
  );
};
