import { useContext } from 'react';
import { useStyles } from 'sku/react-treat';
import classnames from 'classnames';

import { OptionalTitle } from '../../components/icons/SVGTypes';
import { BoxProps } from '../../components/Box/Box';
import TextContext from '../../components/Text/TextContext';
import HeadingContext from '../../components/Heading/HeadingContext';
import { useTextSize, useTextTone, UseTextProps } from '../typography';
import { useLineHeightContainer } from '../useLineHeightContainer/useLineHeightContainer';
import * as styleRefs from './icon.treat';

type IconSize = NonNullable<UseTextProps['size']> | 'fill';

export interface UseIconSizeProps {
  size?: Exclude<IconSize, 'fill'>;
}
export const useIconSize = ({ size = 'standard' }: UseIconSizeProps = {}) => {
  const styles = useStyles(styleRefs);

  return classnames(styles.size, useTextSize(size));
};

export interface UseIconContainerSizeProps {
  size?: Exclude<IconSize, 'fill'>;
}
export const useIconContainerSize = (
  size: Exclude<IconSize, 'fill'> = 'standard',
) => {
  const styles = useStyles(styleRefs);
  return classnames(styles.blockWidths[size], useLineHeightContainer(size));
};

export type UseIconProps = {
  size?: IconSize;
  tone?: UseTextProps['tone'];
  alignY?: 'uppercase' | 'lowercase';
} & OptionalTitle;

type PrivateIconProps = {
  verticalCorrection?: {
    lowercase: keyof typeof styleRefs.alignY.lowercase;
    uppercase: keyof typeof styleRefs.alignY.uppercase;
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
  const styles = useStyles(styleRefs);
  const textContext = useContext(TextContext);
  const headingContext = useContext(HeadingContext);
  const textTone = useTextTone({ tone: tone || 'neutral' });
  const isInline = textContext || headingContext;
  const toneStyles = tone || !isInline ? textTone : undefined;
  const blockSizeStyles = useIconContainerSize(
    size !== 'fill' ? size : 'standard',
  );

  if (process.env.NODE_ENV !== 'production') {
    if (isInline && size) {
      throw new Error(
        `Specifying a custom \`size\` for an \`Icon\` inside the context of a \`<${
          textContext ? 'Text' : 'Heading'
        }>\` component is invalid. See the documentation for correct usage: https://seek-oss.github.io/braid-design-system/components/`,
      );
    }

    if (!isInline && alignY) {
      throw new Error(
        `Specifying \`alignY\` for an \`Icon\` outside of a text component is invalid.`,
      );
    }
  }

  if (size === 'fill') {
    return {
      width: 'full',
      height: 'full',
      display: 'block',
      className: toneStyles,
      ...titleProps,
    };
  }

  return {
    display: isInline ? 'inlineBlock' : 'block',
    position: isInline ? 'relative' : undefined,
    className: [
      toneStyles,
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
    ...titleProps,
  };
};
