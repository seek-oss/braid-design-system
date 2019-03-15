import React, { Component, ComponentType } from 'react';
import classnames from 'classnames';
import Box from '../../Box/Box';
import ThemeConsumer from '../../ThemeConsumer/ThemeConsumer';
import styles from './Icon.css.js';
import { TextSize, Fill, IconSize } from '../../../themes/theme';

export interface IconProps {
  size?: TextSize | 'fill';
  inline?: boolean;
  fill?: Fill;
  svgComponent: ComponentType;
}

const isIconSize = (
  atom: Record<IconSize, string>,
  sizeAtom: string,
): sizeAtom is IconSize => Object.keys(atom).indexOf(sizeAtom) > -1;

const Icon = ({
  size = 'standard',
  svgComponent,
  inline = false,
  fill,
}: IconProps) => (
  <ThemeConsumer>
    {theme => {
      const sizeAtom = `${size}Text${inline ? 'Inline' : ''}`;
      const widthAtom = isIconSize(theme.atoms.width, sizeAtom)
        ? theme.atoms.width[sizeAtom]
        : '';
      const heightAtom = isIconSize(theme.atoms.height, sizeAtom)
        ? theme.atoms.height[sizeAtom]
        : '';

      return (
        <Box
          component={svgComponent}
          width={size === 'fill' ? 'full' : undefined}
          className={classnames(
            widthAtom,
            heightAtom,
            theme.atoms.fill[fill!],
            {
              [styles.fillSize]: size === 'fill',
              [styles.inline]: inline,
              [styles.block]: !inline,
            },
          )}
        />
      );
    }}
  </ThemeConsumer>
);

Icon.displayName = 'Icon';

export default Icon;
