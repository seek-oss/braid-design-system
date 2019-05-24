import { useClassNames } from 'sku/treat';
import * as styles from './typography.treat';
import { useTheme } from '../../components/private/ThemeContext';
import { useForeground } from '../../components/Box/ContrastContext';

export interface UseTextProps {
  weight?: keyof typeof styles.fontWeight;
  size?: keyof typeof styles.text;
  color?: keyof typeof styles.color;
  baseline: boolean;
}

export const useText = ({
  weight = 'regular',
  size = 'standard',
  color = 'neutral',
  baseline,
}: UseTextProps) =>
  useClassNames(
    styles.fontFamily,
    styles.fontWeight[weight],
    styles.text[size].fontSize,
    useTextColor(color),
    {
      [styles.text[size].transform]: baseline,
    },
  );

export type HeadingLevel = keyof typeof styles.heading;
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
    styles.fontFamily,
    styles.fontWeight[resolveLevelToken(level)[weight]],
    styles.heading[level].fontSize,
    useTextColor('neutral'),
    {
      [styles.heading[level].transform]: baseline,
    },
  );

export const useWeight = (weight: keyof typeof styles.fontWeight) =>
  useClassNames(styles.fontWeight[weight]);

export const useTextColor = (color: keyof typeof styles.color) =>
  useClassNames(styles.color[useForeground(color)]);
