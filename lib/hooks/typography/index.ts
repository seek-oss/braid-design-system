import { useContext } from 'react';
import { useStyles } from 'sku/react-treat';
import classnames from 'classnames';
import { useBackground } from '../../components/Box/BackgroundContext';
import * as styleRefs from './typography.treat';
import TextLinkRendererContext from '../../components/TextLinkRenderer/TextLinkRendererContext';

export interface UseTextProps {
  weight?: keyof typeof styleRefs.fontWeight;
  size?: keyof typeof styleRefs.text;
  tone?: keyof typeof styleRefs.tone;
  baseline: boolean;
}

export const useText = ({
  weight = 'regular',
  size = 'standard',
  tone,
  baseline,
}: UseTextProps) => {
  const styles = useStyles(styleRefs);
  const inTextLinkRenderer = useContext(TextLinkRendererContext);

  return classnames(
    styles.fontFamily,
    styles.text[size].fontSize,
    inTextLinkRenderer
      ? useTouchableSpace(size)
      : [
          useTextTone(tone),
          styles.fontWeight[weight],
          baseline ? styles.text[size].transform : null,
        ],
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
  const inTextLinkRenderer = useContext(TextLinkRendererContext);

  return classnames(
    styles.fontFamily,
    styles.headingWeight[weight],
    styles.heading[level].fontSize,
    useTextTone(inTextLinkRenderer ? 'link' : undefined),
    {
      [styles.heading[level].transform]: baseline,
    },
  );
};

export const useWeight = (weight: keyof typeof styleRefs.fontWeight) => {
  const styles = useStyles(styleRefs);
  const inTextLinkRenderer = useContext(TextLinkRendererContext);

  return inTextLinkRenderer ? undefined : styles.fontWeight[weight];
};

export const useTextTone = (tone?: keyof typeof styleRefs.tone) => {
  const styles = useStyles(styleRefs);
  const background = useBackground();

  const backgroundContrast = styles.backgroundContrast[background!];
  if (backgroundContrast) {
    const altColor = backgroundContrast[tone || 'default'];

    if (altColor) {
      return altColor;
    }
  }

  return styles.tone[tone || 'neutral'];
};

export const useTouchableSpace = (size: keyof typeof styleRefs.touchable) =>
  useStyles(styleRefs).touchable[size];
