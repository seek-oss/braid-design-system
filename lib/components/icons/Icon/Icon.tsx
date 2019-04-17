import React, { ComponentType } from 'react';
import classnames from 'classnames';
import { TextSize, Fill, IconSize } from '../../../themes/theme';
import { Box } from '../../Box/Box';
import styles from './Icon.css.js';
import { useTheme } from '../../private/ThemeContext';
import { useForeground } from '../../Box/ContrastContext';

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

export const Icon = ({
  size = 'standard',
  svgComponent,
  inline = false,
  fill = 'currentColor',
}: IconProps) => {
  const theme = useTheme();
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
        theme.atoms.fill[useForeground(fill)],
        {
          [styles.fillSize]: size === 'fill',
          [styles.inline]: inline,
          [styles.block]: !inline,
        },
      )}
    />
  );
};
