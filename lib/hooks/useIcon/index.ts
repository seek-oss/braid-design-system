import { useContext } from 'react';
import assert from 'assert';
import classnames from 'classnames';

import { OptionalTitle } from '../../components/icons/SVGTypes';
import { BoxProps } from '../../components/Box/Box';
import { TextContext } from '../../components/Text/TextContext';
import HeadingContext from '../../components/Heading/HeadingContext';
import { useTextSize, useTextTone, UseTextProps } from '../typography';
import { useLineHeightContainer } from '../useLineHeightContainer/useLineHeightContainer';
import * as styles from './icon.css';

type IconSize = NonNullable<UseTextProps['size']> | 'fill';

export interface UseIconSizeProps {
  size?: Exclude<IconSize, 'fill'>;
}
export const useIconSize = ({ size = 'standard' }: UseIconSizeProps = {}) =>
  classnames(styles.size, useTextSize(size));

export interface UseIconContainerSizeProps {
  size?: Exclude<IconSize, 'fill'>;
}
export const useIconContainerSize = (
  size: Exclude<IconSize, 'fill'> = 'standard',
) => classnames(styles.blockWidths[size], useLineHeightContainer(size));

export type UseIconProps = {
  size?: IconSize;
  tone?: UseTextProps['tone'];
  alignY?: 'uppercase' | 'lowercase';
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
  { size, tone, alignY, ...titleProps }: UseIconProps,
  { verticalCorrection = detaultVerticalCorrection }: PrivateIconProps = {},
): BoxProps => {
  const textContext = useContext(TextContext);
  const headingContext = useContext(HeadingContext);
  const inheritedTone =
    textContext && textContext.tone ? textContext.tone : 'neutral';
  const resolvedTone = useTextTone({ tone: tone || inheritedTone });
  const isInline = textContext || headingContext;
  const blockSizeStyles = useIconContainerSize(
    size !== 'fill' ? size : 'standard',
  );
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
      ...a11yProps,
    };
  }

  return {
    display: isInline ? 'inlineBlock' : 'block',
    position: isInline ? 'relative' : undefined,
    className: [
      resolvedTone,
      styles.size,
      isInline
        ? [
            styles.inline,
            styles.alignY[alignY || 'uppercase'][
              verticalCorrection[alignY || 'uppercase']
            ],
          ]
        : blockSizeStyles,
    ],
    ...a11yProps,
  };
};
