import { useContext } from 'react';
import clsx from 'clsx';
import type { StyleRule } from '@vanilla-extract/css';
import assert from 'assert';

import {
  useBackground,
  useBackgroundLightness,
} from '../../components/Box/BackgroundContext';
import { BoxProps } from '../../components/Box/Box';
import { useDefaultTextProps } from '../../components/private/defaultTextProps';
import TextLinkRendererContext from '../../components/TextLinkRenderer/TextLinkRendererContext';
import { vars } from '../../themes/vars.css';
import { responsiveStyle } from '../../css/responsiveStyle';
import * as styles from './typography.css';

type TextTone = keyof typeof styles.tone | 'neutral';

export interface UseTextProps {
  weight?: keyof typeof styles.fontWeight;
  size?: keyof typeof styles.text;
  tone?: TextTone;
  baseline: boolean;
  backgroundContext?: BoxProps['background'];
}

export const globalTextStyle = ({
  weight = 'regular',
  size = 'standard',
}: Pick<UseTextProps, 'weight' | 'size'> = {}): StyleRule => ({
  fontFamily: vars.fontFamily,
  fontWeight: vars.textWeight[weight],
  color: vars.foregroundColor.neutral,
  ...responsiveStyle({
    mobile: {
      fontSize: vars.textSize[size].mobile.fontSize,
      lineHeight: vars.textSize[size].mobile.lineHeight,
    },
    tablet: {
      fontSize: vars.textSize[size].tablet.fontSize,
      lineHeight: vars.textSize[size].tablet.lineHeight,
    },
  }),
});

export function useText({
  weight = 'regular',
  size = 'standard',
  tone = 'neutral',
  baseline,
  backgroundContext,
}: UseTextProps) {
  const textTone = useTextTone({ tone, backgroundContext });

  return clsx(
    styles.fontFamily,
    textTone,
    styles.fontWeight[weight],
    baseline ? styles.text[size].trimmed : styles.text[size].untrimmed,
  );
}

export type HeadingLevel = keyof typeof styles.heading;
export type HeadingWeight = 'regular' | 'weak';

interface UseHeadingProps {
  weight?: HeadingWeight;
  level: HeadingLevel;
  baseline: boolean;
  backgroundContext?: BoxProps['background'];
}

export const globalHeadingStyle = ({
  weight = 'regular',
  level,
}: Pick<UseHeadingProps, 'weight' | 'level'>): StyleRule => ({
  fontFamily: vars.fontFamily,
  fontWeight: vars.headingWeight[weight],
  color: vars.foregroundColor.neutral,
  ...responsiveStyle({
    mobile: {
      fontSize: vars.headingLevel[level].mobile.fontSize,
      lineHeight: vars.headingLevel[level].mobile.lineHeight,
    },
    tablet: {
      fontSize: vars.headingLevel[level].tablet.fontSize,
      lineHeight: vars.headingLevel[level].tablet.lineHeight,
    },
  }),
});

export function useHeading({
  weight = 'regular',
  level,
  baseline,
  backgroundContext,
}: UseHeadingProps) {
  const textTone = useTextTone({ tone: 'neutral', backgroundContext });

  return clsx(
    styles.fontFamily,
    styles.headingWeight[weight],
    baseline ? styles.heading[level].trimmed : styles.heading[level].untrimmed,
    textTone,
  );
}

export function textSize(size: keyof typeof styles.text) {
  return styles.text[size].untrimmed;
}

export function useWeight(weight: keyof typeof styles.fontWeight) {
  const inTextLinkRenderer = useContext(TextLinkRendererContext);

  return inTextLinkRenderer ? undefined : styles.fontWeight[weight];
}

const neutralToneOverrideForBackground: Partial<
  Record<NonNullable<BoxProps['background']>, keyof typeof styles.tone>
> = {
  formAccentSoft: 'formAccent',
  formAccentSoftActive: 'formAccent',
  formAccentSoftHover: 'formAccent',
  criticalLight: 'critical',
  criticalSoft: 'critical',
  criticalSoftActive: 'critical',
  criticalSoftHover: 'critical',
  caution: 'caution',
  cautionLight: 'caution',
  positiveLight: 'positive',
  infoLight: 'info',
  promoteLight: 'promote',
};

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

  if (tone === 'neutral' && background in neutralToneOverrideForBackground) {
    const toneOverride =
      neutralToneOverrideForBackground[
        background as keyof typeof neutralToneOverrideForBackground
      ];

    assert(toneOverride, `Tone override not found for tone: ${tone}`);

    return styles.tone[toneOverride];
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

export const touchableText = styles.touchable;
