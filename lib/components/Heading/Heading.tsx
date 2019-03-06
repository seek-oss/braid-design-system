import React, { Component, ReactNode } from 'react';
import classnames from 'classnames';
import ThemeConsumer from '../ThemeConsumer/ThemeConsumer';
import Box, { BoxProps } from '../Box/Box';
import {
  HeadingSize,
  TransformVariant,
  FontWeightVariants,
  Tokens,
} from '../../themes/theme';

type HeadingLevel = '1' | '2' | '3';
type HeadingWeight = 'regular' | 'weak';

interface HeadingOptions {
  fontSize: HeadingSize;
  transform: TransformVariant;
  fontWeight: FontWeightVariants;
  component: Exclude<BoxProps['component'], undefined>;
}
const resolveHeadingOptions = (
  level: HeadingLevel,
  weight: HeadingWeight,
  tokens: Tokens,
  component: BoxProps['component'],
): HeadingOptions => {
  if (level === '1') {
    return {
      fontSize: 'level1',
      transform: 'level1Heading',
      fontWeight: tokens.heading.level1[weight],
      component: component || 'h1',
    };
  }
  if (level === '2') {
    return {
      fontSize: 'level2',
      transform: 'level2Heading',
      fontWeight: tokens.heading.level2[weight],
      component: component || 'h2',
    };
  }
  if (level === '3') {
    return {
      fontSize: 'level3',
      transform: 'level3Heading',
      fontWeight: tokens.heading.level3[weight],
      component: component || 'h3',
    };
  }
  throw new Error('No valid heading level provided');
};

export interface HeadingProps {
  children: ReactNode;
  level: HeadingLevel;
  weight?: HeadingWeight;
  component?: BoxProps['component'];
}

export default class Heading extends Component<HeadingProps> {
  static displayName = 'Heading';

  render() {
    const { level, weight = 'regular', component, children } = this.props;

    return (
      <ThemeConsumer>
        {theme => {
          const {
            transform,
            fontSize,
            fontWeight,
            component: resolvedComponent,
          } = resolveHeadingOptions(level, weight, theme.tokens, component);

          return (
            <Box
              component={resolvedComponent}
              paddingBottom={level === '1' ? 'small' : 'xsmall'}
              className={classnames(
                theme.atoms.fontFamily.text,
                theme.atoms.color.neutral,
                theme.atoms.fontSize[fontSize],
                theme.atoms.fontWeight[fontWeight],
                theme.atoms.transform[transform],
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
