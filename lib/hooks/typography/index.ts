import { useContext } from 'react';
import { useStyles } from 'sku/react-treat';
import classnames from 'classnames';
import { useBackground } from '../../components/Box/BackgroundContext';
import { BoxProps } from '../../components/Box/Box';
import TextLinkRendererContext from '../../components/TextLinkRenderer/TextLinkRendererContext';
import * as styleRefs from './typography.treat';

export interface UseTextProps {
  weight?: keyof typeof styleRefs.fontWeight;
  size?: keyof typeof styleRefs.text;
  tone?: keyof typeof styleRefs.tone;
  baseline: boolean;
  backgroundContext?: BoxProps['background'];
}

export const useText = ({
  weight = 'regular',
  size = 'standard',
  tone,
  baseline,
  backgroundContext,
}: UseTextProps) => {
  const styles = useStyles(styleRefs);
  const inTextLinkRenderer = useContext(TextLinkRendererContext);

  return classnames(
    styles.fontFamily,
    styles.text[size].fontSize,
    inTextLinkRenderer
      ? useTouchableSpace(size)
      : [
          useTextTone({ tone, backgroundContext }),
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
  backgroundContext?: BoxProps['background'];
}

export const useHeading = ({
  weight = 'regular',
  level,
  baseline,
  backgroundContext,
}: HeadingParams) => {
  const styles = useStyles(styleRefs);

  return classnames(
    styles.fontFamily,
    styles.headingWeight[weight],
    styles.heading[level].fontSize,
    useTextTone({ backgroundContext }),
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

export const useTextTone = ({
  tone,
  backgroundContext: backgroundContextOverride,
}: {
  tone?: keyof typeof styleRefs.tone;
  backgroundContext?: BoxProps['background'];
} = {}) => {
  const styles = useStyles(styleRefs);
  const inTextLinkRenderer = useContext(TextLinkRendererContext);
  const backgroundContext = useBackground();
  const background = backgroundContextOverride || backgroundContext;

  const backgroundContrast = styles.backgroundContrast[background!];
  if (backgroundContrast) {
    const altColor = backgroundContrast[tone || 'default'];

    if (altColor) {
      return altColor;
    }
  }

  if (tone) {
    return styles.tone[tone];
  }

  if (inTextLinkRenderer) {
    return styles.tone.link;
  }

  return styles.tone.neutral;
};

export const useTouchableSpace = (size: keyof typeof styleRefs.touchable) =>
  useStyles(styleRefs).touchable[size];
