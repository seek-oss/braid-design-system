import React, { Component, ComponentType } from 'react';
import classnames from 'classnames';
import Box from '../../Box/Box';
import withTheme, { WithThemeProps } from '../../private/withTheme';
import styles from './Icon.css.js';
import { TextSize, FillVariants, SizeVariants } from '../../../themes/theme';

interface Props extends WithThemeProps {
  svgComponent: ComponentType;
  size?: TextSize | 'fill';
  inline?: boolean;
  fill?: FillVariants;
  className?: string;
}

const isSizeVariant = (
  atom: Record<SizeVariants, string>,
  sizeAtom: string
): sizeAtom is SizeVariants => Object.keys(atom).indexOf(sizeAtom) > -1;

export default withTheme(
  class Icon extends Component<Props> {
    static displayName = 'Icon';

    render() {
      const {
        className,
        theme,
        size,
        svgComponent,
        inline = false,
        fill,
        ...restProps
      } = this.props;
      const sizeAtom = `${size || 'standard'}Text${inline ? 'Inline' : ''}`;
      const widthAtom = isSizeVariant(theme.atoms.width, sizeAtom)
        ? theme.atoms.width[sizeAtom]
        : '';
      const heightAtom = isSizeVariant(theme.atoms.height, sizeAtom)
        ? theme.atoms.height[sizeAtom]
        : '';

      return (
        <Box
          component={svgComponent}
          className={classnames(
            className,
            theme.atoms.fill[fill!],
            widthAtom,
            heightAtom,
            {
              [styles.fillSize]: size === 'fill',
              [styles.inline]: inline
            }
          )}
          {...restProps}
        />
      );
    }
  }
);
