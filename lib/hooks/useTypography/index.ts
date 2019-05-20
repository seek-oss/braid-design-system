import { useClassNames } from 'sku/treat';
import { fontFamily, fontWeight, heading, text } from './index.treat';
import { useTheme } from '../../components/private/ThemeContext';

export type TextWeight = 'regular' | 'medium' | 'strong';

interface TextParams {
  weight?: TextWeight;
  size?: keyof typeof text;
  baseline: boolean;
}

export const useText = ({
  weight = 'regular',
  size = 'standard',
  baseline,
}: TextParams) =>
  useClassNames(fontFamily, fontWeight[weight], text[size].fontSize, {
    [text[size].transform]: baseline,
  });

export type HeadingLevel = keyof typeof heading;
export type HeadingWeight = 'regular' | 'weak';

interface HeadingParams {
  weight?: HeadingWeight;
  level: HeadingLevel;
  baseline: boolean;
}

const resolveLevelToken = (level: HeadingLevel) => {
  const { tokens } = useTheme();

  return {
    '1': tokens.heading.level1,
    '2': tokens.heading.level2,
    '3': tokens.heading.level3,
  }[level];
};

export const useHeading = ({
  weight = 'regular',
  level,
  baseline,
}: HeadingParams) =>
  useClassNames(
    fontFamily,
    fontWeight[resolveLevelToken(level)[weight]],
    heading[level].fontSize,
    {
      [heading[level].transform]: baseline,
    },
  );

export const useWeight = (weight: TextWeight) =>
  useClassNames(fontWeight[weight]);
