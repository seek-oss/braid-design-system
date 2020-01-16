import { useContext } from 'react';
import { useStyles } from 'sku/react-treat';
import classnames from 'classnames';

import { SVGProps, OptionalTitle } from '../../components/icons/SVGTypes';
import TextContext from '../../components/Text/TextContext';
import HeadingContext from '../../components/Heading/HeadingContext';
import { useBoxStyles } from '../../components/Box/useBoxStyles';
import { useTextSize, useTextTone, UseTextProps } from '../typography';
import { useLineHeightContainer } from '../useLineHeightContainer/useLineHeightContainer';
import * as styleRefs from './icon.treat';

type CustomSVGSize = 'fill' | 'crop';
type IconSize = NonNullable<UseTextProps['size']> | CustomSVGSize;

const isCustomSize = (size: IconSize | undefined): size is CustomSVGSize =>
  size === 'fill' || size === 'crop';

export interface UseIconSizeProps {
  size?: Exclude<IconSize, CustomSVGSize>;
}
export const useIconSize = ({ size = 'standard' }: UseIconSizeProps = {}) => {
  const styles = useStyles(styleRefs);

  return classnames(styles.size, useTextSize(size));
};

export interface UseIconContainerSizeProps {
  size?: Exclude<IconSize, CustomSVGSize>;
}
export const useIconContainerSize = (
  size: Exclude<IconSize, CustomSVGSize> = 'standard',
) => {
  const styles = useStyles(styleRefs);
  return classnames(styles.blockWidths[size], useLineHeightContainer(size));
};

export type UseIconProps = {
  size?: IconSize;
  tone?: UseTextProps['tone'];
} & OptionalTitle;

export default ({ size, tone, ...titleProps }: UseIconProps): SVGProps => {
  const styles = useStyles(styleRefs);
  const textContext = useContext(TextContext);
  const headingContext = useContext(HeadingContext);
  const inheritedTone =
    textContext && textContext.tone ? textContext.tone : 'neutral';
  const resolvedTone = useTextTone({ tone: tone || inheritedTone });
  const isInline = textContext || headingContext;

  const blockSizeStyles = useIconContainerSize(
    isCustomSize(size) ? 'standard' : size,
  );

  const customSize = isCustomSize(size);
  const boxStyles = useBoxStyles(
    customSize
      ? {
          component: 'svg',
          width: 'full',
          height: 'full',
          display: 'block',
        }
      : {
          component: 'svg',
          display: isInline ? 'inlineBlock' : 'block',
          position: isInline ? 'relative' : undefined,
        },
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

  if (customSize) {
    return {
      crop: size === 'crop',
      className: classnames(boxStyles, resolvedTone),
      ...titleProps,
    };
  }

  return {
    className: classnames(
      boxStyles,
      resolvedTone,
      styles.size,
      isInline ? styles.inline : blockSizeStyles,
    ),
    ...titleProps,
  };
};
