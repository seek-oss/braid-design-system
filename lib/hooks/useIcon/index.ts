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
} & OptionalTitle;

export default ({ size, tone, ...titleProps }: UseIconProps): BoxProps => {
  const styles = useStyles(styleRefs);
  const textContext = useContext(TextContext);
  const headingContext = useContext(HeadingContext);
  const inheritedTone =
    textContext && textContext.tone ? textContext.tone : 'neutral';
  const resolvedTone = useTextTone({ tone: tone || inheritedTone });
  const isInline = textContext || headingContext;
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
  }

  if (size === 'fill') {
    return {
      width: 'full',
      height: 'full',
      display: 'block',
      className: resolvedTone,
      ...titleProps,
    };
  }

  return {
    display: isInline ? 'inlineBlock' : 'block',
    position: isInline ? 'relative' : undefined,
    className: [
      resolvedTone,
      styles.size,
      isInline ? styles.inline : blockSizeStyles,
    ],
    ...titleProps,
  };
};
