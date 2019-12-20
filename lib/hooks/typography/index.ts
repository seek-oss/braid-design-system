import { useContext } from 'react';
import { useStyles } from 'sku/react-treat';
import classnames from 'classnames';
import {
  useBackground,
  useBackgroundLightness,
} from '../../components/Box/BackgroundContext';
import { BoxProps } from '../../components/Box/Box';
import TextLinkRendererContext from '../../components/TextLinkRenderer/TextLinkRendererContext';
import * as styleRefs from './typography.treat';

type TextTone = keyof typeof styleRefs.tone | 'neutral';

export interface UseTextProps {
  weight?: keyof typeof styleRefs.fontWeight;
  size?: keyof typeof styleRefs.text;
  tone?: TextTone;
  baseline: boolean;
  backgroundContext?: BoxProps['background'];
  _LEGACY_SPACE_?: boolean;
}

export function useText({
  weight = 'regular',
  size = 'standard',
  tone = 'neutral',
  baseline,
  backgroundContext,
  _LEGACY_SPACE_ = false,
}: UseTextProps) {
  const styles = useStyles(styleRefs);
  const inTextLinkRenderer = useContext(TextLinkRendererContext);
  const space = useTouchableSpace(size);
  const textTone = useTextTone({ tone, backgroundContext });

  return classnames(
    styles.fontFamily,
    styles.text[size].base,
    inTextLinkRenderer
      ? space
      : [
          textTone,
          styles.fontWeight[weight],
          baseline ? styles.text[size].baseline : null,
          baseline && !_LEGACY_SPACE_ ? styles.text[size].cropFirstLine : null,
        ],
  );
}

export type HeadingLevel = keyof typeof styleRefs.heading;
export type HeadingWeight = 'regular' | 'weak';

interface UseHeadingParams {
  weight?: HeadingWeight;
  level: HeadingLevel;
  baseline: boolean;
  backgroundContext?: BoxProps['background'];
  _LEGACY_SPACE_?: boolean;
}

export function useHeading({
  weight = 'regular',
  level,
  baseline,
  backgroundContext,
  _LEGACY_SPACE_ = false,
}: UseHeadingParams) {
  const styles = useStyles(styleRefs);
  const textTone = useTextTone({ tone: 'neutral', backgroundContext });

  return classnames(
    styles.fontFamily,
    styles.headingWeight[weight],
    styles.heading[level].base,
    _LEGACY_SPACE_ ? null : styles.heading[level].cropFirstLine,
    textTone,
    {
      [styles.heading[level].baseline]: baseline,
    },
  );
}

export function useTextSize(size: keyof typeof styleRefs.text) {
  return useStyles(styleRefs).text[size].base;
}

export function useWeight(weight: keyof typeof styleRefs.fontWeight) {
  const styles = useStyles(styleRefs);
  const inTextLinkRenderer = useContext(TextLinkRendererContext);

  return inTextLinkRenderer ? undefined : styles.fontWeight[weight];
}

export function useTextTone({
  tone = 'neutral',
  backgroundContext: backgroundContextOverride,
}: {
  tone: TextTone;
  backgroundContext?: BoxProps['background'];
}) {
  const styles = useStyles(styleRefs);
  const inTextLinkRenderer = useContext(TextLinkRendererContext);
  const backgroundContext = useBackground();
  const backgroundLightness = useBackgroundLightness();
  const background = backgroundContextOverride || backgroundContext;

  const toneOverrides = styles.toneOverridesForBackground[background!];
  if (toneOverrides) {
    const toneOverride = toneOverrides[tone];

    if (toneOverride) {
      return toneOverride;
    }
  }

  if (tone !== 'neutral') {
    return styles.tone[tone];
  }

  if (inTextLinkRenderer) {
    return styles.tone.link;
  }

  return backgroundLightness === 'light'
    ? styles.neutral
    : styles.neutralInverted;
}

export function useTouchableSpace(size: keyof typeof styleRefs.touchable) {
  return useStyles(styleRefs).touchable[size];
}
