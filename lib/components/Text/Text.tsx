import React, { Component, ReactNode } from 'react';
import classnames from 'classnames';
import ThemeConsumer from '../ThemeConsumer/ThemeConsumer';
import styles from './Text.css.js';
import Box, { BoxProps } from '../Box/Box';
import {
  ColorVariants,
  FontSizeVariants,
  FontWeightVariants,
  TransformVariants
} from '../../themes/theme';

export interface TextProps extends Pick<BoxProps, 'component'> {
  children?: ReactNode;
  size?: FontSizeVariants;
  color?: ColorVariants;
  weight?: FontWeightVariants;
  baseline?: boolean;
}

const isTransformVariant = (
  atom: Record<TransformVariants, string>,
  transformSize: string
): transformSize is TransformVariants =>
  Object.keys(atom).indexOf(transformSize) > -1;

export default class Text extends Component<TextProps> {
  static displayName = 'Text';

  render() {
    return (
      <ThemeConsumer>
        {theme => {
          const {
            component,
            size = 'standard',
            color,
            weight,
            baseline = true,
            children
          } = this.props;

          const transformSize = `${size}Text`;
          const baselineTransform =
            isTransformVariant(theme.atoms.transform, transformSize) && baseline
              ? theme.atoms.transform[transformSize]
              : '';

          return (
            <Box
              component={component}
              className={classnames(
                styles.block,
                theme.atoms.fontFamily.text,
                theme.atoms.color[color || 'neutral'],
                theme.atoms.fontSize[size],
                theme.atoms.fontWeight[weight || 'regular'],
                baselineTransform,
                {
                  [styles.listItem]:
                    typeof component === 'string' && /^li$/i.test(component)
                }
              )}
            >
              {children}
            </Box>
          );
        }}
      </ThemeConsumer>
    );
  }
}
