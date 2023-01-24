import * as styles from './typography.css';

export interface TextStyleProps {
  weight?: keyof typeof styles.fontWeight;
  size?: keyof typeof styles.textSizeUntrimmed;
  tone?: keyof typeof styles.tone;
  baseline: boolean;
}

export function textStyles({
  weight = 'regular',
  size = 'standard',
  tone = 'neutral',
  baseline,
}: TextStyleProps) {
  return [
    styles.fontFamily,
    styles.fontWeight[weight],
    styles.tone[tone],
    styles[baseline ? 'textSizeTrimmed' : 'textSizeUntrimmed'][size],
  ];
}
