import React, { Component } from 'react';
import { Omit } from 'utility-types';
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

export interface TextProps extends Omit<BoxProps, 'size'> {
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
            size,
            color,
            weight,
            baseline = true,
            className,
            ...restProps
          } = this.props;
          const fontSize = size || 'standard';

          const transformSize = `${fontSize}Text`;
          const baselineTransform =
            isTransformVariant(theme.atoms.transform, transformSize) && baseline
              ? theme.atoms.transform[transformSize]
              : '';

          return (
            <Box
              component={component}
              className={classnames(
                className,
                styles.block,
                theme.atoms.fontFamily.text,
                theme.atoms.color[color || 'neutral'],
                theme.atoms.fontSize[fontSize],
                theme.atoms.fontWeight[weight || 'regular'],
                baselineTransform,
                {
                  [styles.listItem]:
                    typeof component === 'string' && /^li$/i.test(component)
                }
              )}
              {...restProps}
            />
          );
        }}
      </ThemeConsumer>
    );
  }
}
