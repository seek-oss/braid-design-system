import { useContext } from 'react';
import assert from 'assert';
import clsx from 'clsx';

import { OptionalTitle } from '../../components/icons/SVGTypes';
import { BoxProps } from '../../components/Box/Box';
import { TextContext } from '../../components/Text/TextContext';
import HeadingContext from '../../components/Heading/HeadingContext';
import { textSize, useTextTone, UseTextProps } from '../typography';
import { lineHeightContainer } from '../../css/lineHeightContainer.css';
import buildDataAttributes, {
  DataAttributeMap,
} from '../../components/private/buildDataAttributes';
import * as styles from './icon.css';

type IconSize = NonNullable<UseTextProps['size']> | 'fill';

export interface IconSizeProps {
  size?: Exclude<IconSize, 'fill'>;
}
export const iconSize = ({ size = 'standard' }: IconSizeProps = {}) =>
  clsx(styles.size, textSize(size));

export interface IconContainerSizeProps {
  size?: Exclude<IconSize, 'fill'>;
}
export const iconContainerSize = (
  size: Exclude<IconSize, 'fill'> = 'standard',
) => clsx(styles.blockWidths[size], lineHeightContainer[size]);

export type UseIconProps = {
  size?: IconSize;
  tone?: UseTextProps['tone'];
  alignY?: 'uppercase' | 'lowercase';
  data?: DataAttributeMap;
} & OptionalTitle;

type PrivateIconProps = {
  verticalCorrection?: {
    lowercase: keyof typeof styles.alignY.lowercase;
    uppercase: keyof typeof styles.alignY.uppercase;
  };
};

const detaultVerticalCorrection = {
  uppercase: 'none',
  lowercase: 'none',
} as const;

export default (
  { size, tone, alignY, data, ...titleProps }: UseIconProps,
  { verticalCorrection = detaultVerticalCorrection }: PrivateIconProps = {},
): BoxProps => {
  const textContext = useContext(TextContext);
  const headingContext = useContext(HeadingContext);
  const inheritedTone =
    textContext && textContext.tone ? textContext.tone : 'neutral';
  const resolvedTone = useTextTone({ tone: tone || inheritedTone });
  const isInline = textContext || headingContext;
  const a11yProps = titleProps.title
    ? { ...titleProps, role: 'img' }
    : { 'aria-hidden': true };

  assert(
    !(size && isInline),
    `Specifying a custom \`size\` for an \`Icon\` inside the context of a \`<${
      textContext ? 'Text' : 'Heading'
    }>\` component is invalid. See the documentation for correct usage: https://seek-oss.github.io/braid-design-system/components/`,
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
      className: resolvedTone,
      ...(data ? buildDataAttributes(data) : undefined),
      ...a11yProps,
    };
  }

  return {
    display: isInline ? 'inlineBlock' : 'block',
    position: isInline ? 'relative' : undefined,
    className: [
      resolvedTone,
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
