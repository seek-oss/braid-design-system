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

export default ({
  size = 'standard',
  inline = false,
  tone,
}: UseIconProps): BoxProps => {
  const styles = useStyles(styleRefs);
  const defaultStyles = [styles.currentColor, useTextTone({ tone })];

  if (size === 'fill') {
    return {
      width: 'full',
      height: 'full',
      className: classnames(defaultStyles),
    };
  }

  return {
    display: inline ? 'inlineBlock' : 'block',
    position: inline ? 'relative' : undefined,
    className: classnames(
      defaultStyles,
      inline
        ? [styles.inline, styles.inlineSizes[size]]
        : styles.blockSizes[size],
    ),
  };
};
