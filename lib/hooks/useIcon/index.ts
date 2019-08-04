import { useStyles } from 'sku/react-treat';
import classnames from 'classnames';
import { BoxProps } from '../../components/Box/Box';
import { useTextTone, UseTextProps } from '../../hooks/typography';
import * as styleRefs from './icon.treat';

type IconSize = NonNullable<UseTextProps['size']> | 'fill';

export interface UseIconProps {
  size?: IconSize;
  inline?: boolean;
  tone?: UseTextProps['tone'];
}

const resolveSizeClasses = (size: IconSize, inline: boolean) => {
  const styles = useStyles(styleRefs);

  if (size === 'fill') {
    return styles.fullHeight;
  }

  return inline
    ? [styles.inline, styles.inlineSizes[size]]
    : styles.blockSizes[size];
};

export default ({
  size = 'standard',
  inline = false,
  tone,
}: UseIconProps): BoxProps => {
  const styles = useStyles(styleRefs);

  return {
    width: size === 'fill' ? 'full' : undefined,
    display: inline ? 'inlineBlock' : 'block',
    position: inline ? 'relative' : undefined,
    className: classnames(
      resolveSizeClasses(size, inline),
      styles.currentColor,
      useTextTone({ tone }),
    ),
  };
};
