import { useContext } from 'react';
import { useStyles } from 'sku/react-treat';
import classnames from 'classnames';
import { BoxProps } from '../../components/Box/Box';
import TextContext from '../../components/Text/TextContext';
import HeadingContext from '../../components/Heading/HeadingContext';
import { useTextTone, UseTextProps } from '../../hooks/typography';
import * as styleRefs from './icon.treat';

type IconSize = NonNullable<UseTextProps['size']> | 'fill';

export interface UseIconProps {
  size?: IconSize;
  tone?: UseTextProps['tone'];
}

export default ({ size, tone }: UseIconProps): BoxProps => {
  const styles = useStyles(styleRefs);
  const inText = useContext(TextContext);
  const inHeading = useContext(HeadingContext);

  const defaultStyles = [styles.currentColor, useTextTone({ tone })];
  const isInline = inText || inHeading;

  if (process.env.NODE_ENV !== 'production') {
    if (isInline && size) {
      throw new Error(
        `Specifying a custom \`size\` for an \`Icon\` inside the context of a \`<${
          inText ? 'Text' : 'Heading'
        }>\` component is invalid. See the documentation for correct usage: https://seek-oss.github.io/braid-design-system/components/`,
      );
    }
  }

  if (size === 'fill') {
    return {
      width: 'full',
      height: 'full',
      display: 'block',
      className: classnames(defaultStyles),
    };
  }

  return {
    display: isInline ? 'inlineBlock' : 'block',
    position: isInline ? 'relative' : undefined,
    className: classnames(
      defaultStyles,
      isInline ? styles.inline : styles.blockSizes[size || 'standard'],
    ),
  };
};
