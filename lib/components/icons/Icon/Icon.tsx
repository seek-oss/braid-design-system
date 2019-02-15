import React, { Component, ComponentType } from 'react';
import classnames from 'classnames';
import Box from '../../Box/Box';
import ThemeConsumer from '../../ThemeConsumer/ThemeConsumer';
import styles from './Icon.css.js';
import { TextSize, FillVariants, SizeVariants } from '../../../themes/theme';

export interface IconProps {
  size?: TextSize | 'fill';
  inline?: boolean;
  fill?: FillVariants;
  svgComponent: ComponentType;
}

const isSizeVariant = (
  atom: Record<SizeVariants, string>,
  sizeAtom: string
): sizeAtom is SizeVariants => Object.keys(atom).indexOf(sizeAtom) > -1;

export default class Icon extends Component<IconProps> {
  static displayName = 'Icon';

  render() {
    return (
      <ThemeConsumer>
        {theme => {
          const {
            size = 'standard',
            svgComponent,
            inline = false,
            fill
          } = this.props;
          const sizeAtom = `${size}Text${inline ? 'Inline' : ''}`;
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
                styles.root,
                widthAtom,
                heightAtom,
                theme.atoms.fill[fill!],
                {
                  [styles.fillSize]: size === 'fill',
                  [styles.inline]: inline
                }
              )}
            />
          );
        }}
      </ThemeConsumer>
    );
  }
}
