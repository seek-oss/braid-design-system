import { useContext } from 'react';
import assert from 'assert';
import clsx from 'clsx';

import { OptionalTitle } from '../../components/icons/SVGTypes';
import { PublicBoxProps } from '../../components/Box/Box';
import { TextContext } from '../../components/Text/TextContext';
import HeadingContext from '../../components/Heading/HeadingContext';
import { lineHeightContainer } from '../../css/lineHeightContainer.css';
import buildDataAttributes, {
  DataAttributeMap,
} from '../../components/private/buildDataAttributes';
import * as typographyStyles from '../../css/typography.css';
import * as styles from './icon.css';

type IconSize = keyof typeof typographyStyles.textSizeUntrimmed | 'fill';

export interface IconSizeProps {
  size?: Exclude<IconSize, 'fill'>;
}
export const iconSize = ({ size = 'standard' }: IconSizeProps = {}) =>
  clsx(styles.size, typographyStyles.textSizeUntrimmed[size]);

export interface IconContainerSizeProps {
  size?: Exclude<IconSize, 'fill'>;
}
export const iconContainerSize = (
  size: Exclude<IconSize, 'fill'> = 'standard',
) => clsx(styles.blockWidths[size], lineHeightContainer[size]);

export type UseIconProps = {
  size?: IconSize;
  tone?: keyof typeof typographyStyles.tone;
  alignY?: 'uppercase' | 'lowercase';
  data?: DataAttributeMap;
} & OptionalTitle;

type PrivateIconProps = {
  verticalCorrection?: {
    lowercase: keyof typeof styles.alignY.lowercase;
    uppercase: keyof typeof styles.alignY.uppercase;
  };
};

const defaultVerticalCorrection = {
  uppercase: 'none',
  lowercase: 'none',
} as const;

export default (
  { size, tone, alignY, data, ...titleProps }: UseIconProps,
  { verticalCorrection = defaultVerticalCorrection }: PrivateIconProps = {},
  // TODO: COLORMODE RELEASE
  // Revert to BoxProps
): PublicBoxProps => {
  const textContext = useContext(TextContext);
  const headingContext = useContext(HeadingContext);
  const resolvedTone =
    typographyStyles.tone[tone || textContext?.tone || 'neutral'];
  const toneClass =
    tone || (!headingContext && !textContext?.tone) ? resolvedTone : undefined;
  const isInline = Boolean(textContext || headingContext);
  const a11yProps = titleProps.title
    ? { ...titleProps, role: 'img' }
    : { 'aria-hidden': true };

  assert(
    !(size && isInline),
    `Specifying a custom \`size\` for an \`Icon\` inside the context of a \`<${
      textContext ? 'Text' : 'Heading'
    }>\` component is invalid. See the documentation for correct usage: https://seek-oss.github.io/braid-design-system/components/${
      textContext ? 'Text' : 'Heading'
    }`,
  );

  assert(
    !(alignY && !isInline),
    `Specifying \`alignY\` for an \`Icon\` outside of a text component is invalid.`,
  );

  if (size === 'fill') {
    return {
      width: 'full',
      height: 'full',
      display: 'block',
      className: toneClass,
      ...(data ? buildDataAttributes(data) : undefined),
      ...a11yProps,
    };
  }

  return {
    display: isInline ? 'inlineBlock' : 'block',
    position: isInline ? 'relative' : undefined,
    className: [
      toneClass,
      isInline
        ? [
            styles.size,
            styles.inline,
            styles.alignY[alignY || 'uppercase'][
              verticalCorrection[alignY || 'uppercase']
            ],
          ]
        : iconContainerSize(size),
    ],
    ...(data ? buildDataAttributes(data) : undefined),
    ...a11yProps,
  };
};
