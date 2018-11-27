import React, { Component, ReactNode, ReactType } from 'react';
import classnames from 'classnames';
import withTheme, { WithThemeProps } from '../private/withTheme';
import styles from './Text.css.js';
import Box from '../Box/Box';
import {
  ColorVariants,
  FontSizeVariants,
  FontWeightVariants,
  TransformVariants,
  Theme
} from '../../themes/theme';

export interface Props extends WithThemeProps {
  component?: ReactType;
  size?: FontSizeVariants;
  color?: ColorVariants;
  weight?: FontWeightVariants;
  baseline?: boolean;
  className?: string;
  children: ReactNode;
}

const isTransformVariant = (
  theme: Theme,
  transformSize: string
): transformSize is TransformVariants =>
  Object.keys(theme.atoms.transform).indexOf(transformSize) > -1;

export default withTheme(
  class Text extends Component<Props> {
    static displayName = 'Text';

    render() {
      const {
        theme,
        component,
        size,
        color,
        weight,
        baseline = true,
        className = '',
        ...restProps
      } = this.props;
      const fontSize = size || 'standard';

      const transformSize = `${fontSize}Text`;
      const baselineTransform =
        isTransformVariant(theme, transformSize) && baseline
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
    }
  }
);
