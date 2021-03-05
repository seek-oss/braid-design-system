import { useContext } from 'react';
import classnames from 'classnames';
import {
  useBackground,
  useBackgroundLightness,
} from '../../components/Box/BackgroundContext';
import { BoxProps } from '../../components/Box/Box';
import { useDefaultTextProps } from '../../components/private/defaultTextProps';
import TextLinkRendererContext from '../../components/TextLinkRenderer/TextLinkRendererContext';
import * as styles from './typography.css';

type TextTone = keyof typeof styles.tone | 'neutral';

export interface UseTextProps {
  weight?: keyof typeof styles.fontWeight;
  size?: keyof typeof styles.text;
  tone?: TextTone;
  baseline: boolean;
  backgroundContext?: BoxProps['background'];
}

export function useText({
  weight = 'regular',
  size = 'standard',
  tone = 'neutral',
  baseline,
  backgroundContext,
}: UseTextProps) {
  const textTone = useTextTone({ tone, backgroundContext });

  return classnames(
    styles.fontFamily,
    styles.text[size].base,
    textTone,
    styles.fontWeight[weight],
    baseline ? styles.text[size].leadingTrim : null,
  );
}

export type HeadingLevel = keyof typeof styles.heading;
export type HeadingWeight = 'regular' | 'weak';

interface UseHeadingParams {
  weight?: HeadingWeight;
  level: HeadingLevel;
  baseline: boolean;
  backgroundContext?: BoxProps['background'];
}

export function useHeading({
  weight = 'regular',
  level,
  baseline,
  backgroundContext,
}: UseHeadingParams) {
  const textTone = useTextTone({ tone: 'neutral', backgroundContext });

  return classnames(
    styles.fontFamily,
    styles.headingWeight[weight],
    styles.heading[level].base,
    textTone,
    {
      [styles.heading[level].leadingTrim]: baseline,
    },
  );
}

export function useTextSize(size: keyof typeof styles.text) {
  return styles.text[size].base;
}

export function useWeight(weight: keyof typeof styles.fontWeight) {
  const inTextLinkRenderer = useContext(TextLinkRendererContext);

  return inTextLinkRenderer ? undefined : styles.fontWeight[weight];
}

export function useTextTone({
  tone: toneProp,
  backgroundContext: backgroundContextOverride,
}: {
  tone: TextTone;
  backgroundContext?: BoxProps['background'];
}) {
  const textLinkContext = useContext(TextLinkRendererContext);
  const backgroundContext = useBackground();
  const background = backgroundContextOverride || backgroundContext;
  const backgroundLightness = useBackgroundLightness(background);
  const { tone } = useDefaultTextProps({ tone: toneProp });

  const toneOverrides = styles.toneOverridesForBackground[background!];
  if (toneOverrides) {
    const toneOverride = toneOverrides[tone];

    if (toneOverride) {
      return toneOverride;
    }
  }

  if (tone !== 'neutral') {
    return tone in styles.invertableTone
      ? styles.invertableTone[tone as keyof typeof styles.invertableTone][
          backgroundLightness
        ]
      : styles.tone[tone];
  }

  if (textLinkContext && textLinkContext !== 'weak') {
    return styles.tone.link;
  }

  return styles.invertableTone.neutral[backgroundLightness];
}

export function useTouchableSpace(size: keyof typeof styles.touchable) {
  return styles.touchable[size];
}

export function useTruncate() {
  return styles.truncate;
}
