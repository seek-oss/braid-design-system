import { useStyles } from 'sku/react-treat';
import classnames from 'classnames';
import { useContrast } from '../../components/Box/ContrastContext';
import * as styleRefs from './typography.treat';

export interface UseTextProps {
  weight?: keyof typeof styleRefs.fontWeight;
  size?: keyof typeof styleRefs.text;
  color?: keyof typeof styleRefs.color;
  baseline: boolean;
}

export const useText = ({
  weight = 'regular',
  size = 'standard',
  color = 'neutral',
  baseline,
}: UseTextProps) => {
  const styles = useStyles(styleRefs);

  return classnames(
    styles.fontFamily,
    styles.fontWeight[weight],
    styles.text[size].fontSize,
    useTextColor(color),
    {
      [styles.text[size].transform]: baseline,
    },
  );
};

export type HeadingLevel = keyof typeof styleRefs.heading;
export type HeadingWeight = 'regular' | 'weak';

interface HeadingParams {
  weight?: HeadingWeight;
  level: HeadingLevel;
  baseline: boolean;
}

export const useHeading = ({
  weight = 'regular',
  level,
  baseline,
}: HeadingParams) => {
  const styles = useStyles(styleRefs);

  return classnames(
    styles.fontFamily,
    styles.headingWeight[weight],
    styles.heading[level].fontSize,
    useTextColor('neutral'),
    {
      [styles.heading[level].transform]: baseline,
    },
  );
};

export const useWeight = (weight: keyof typeof styleRefs.fontWeight) =>
  useStyles(styleRefs).fontWeight[weight];

export const useTextColor = (color: keyof typeof styleRefs.color) => {
  const styles = useStyles(styleRefs);
  const background = useContrast();

  if (background) {
    const backgroundContrast = styles.colorContrast[background];

    if (backgroundContrast) {
      const altColor = backgroundContrast[color];

      if (altColor) {
        return altColor;
      }
    }
  }

  return styles.color[color];
};

export const useTouchableSpace = (size: keyof typeof styleRefs.touchable) =>
  useStyles(styleRefs).touchable[size];
