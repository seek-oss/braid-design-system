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
  _LEGACY_SPACE_?: boolean;
}

export const useText = ({
  weight = 'regular',
  size = 'standard',
  tone,
  baseline,
  backgroundContext,
  _LEGACY_SPACE_ = false,
}: UseTextProps) => {
  const styles = useStyles(styleRefs);
  const inTextLinkRenderer = useContext(TextLinkRendererContext);

  return classnames(
    styles.fontFamily,
    styles.text[size].base,
    inTextLinkRenderer
      ? useTouchableSpace(size)
      : [
          useTextTone({ tone, backgroundContext }),
          styles.fontWeight[weight],
          baseline ? styles.text[size].baseline : null,
          baseline && !_LEGACY_SPACE_ ? styles.text[size].cropFirstLine : null,
        ],
  );
};

export type HeadingLevel = keyof typeof styleRefs.heading;
export type HeadingWeight = 'regular' | 'weak';

interface UseHeadingParams {
  weight?: HeadingWeight;
  level: HeadingLevel;
  baseline: boolean;
  backgroundContext?: BoxProps['background'];
  _LEGACY_SPACE_?: boolean;
}

export const useHeading = ({
  weight = 'regular',
  level,
  baseline,
  backgroundContext,
  _LEGACY_SPACE_ = false,
}: UseHeadingParams) => {
  const styles = useStyles(styleRefs);

  return classnames(
    styles.fontFamily,
    styles.headingWeight[weight],
    styles.heading[level].base,
    _LEGACY_SPACE_ ? null : styles.heading[level].cropFirstLine,
    useTextTone({ backgroundContext }),
    {
      [styles.heading[level].baseline]: baseline,
    },
  );
};

export const useTextSize = (size: keyof typeof styleRefs.text) =>
  useStyles(styleRefs).text[size].base;

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
