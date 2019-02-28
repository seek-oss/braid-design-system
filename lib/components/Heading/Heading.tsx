import React, { Component, ReactNode } from 'react';
import classnames from 'classnames';
import ThemeConsumer from '../ThemeConsumer/ThemeConsumer';
import Box, { BoxProps } from '../Box/Box';
import {
  HeadingSize,
  TransformVariant,
  FontWeightVariants,
  Tokens
} from 'lib/themes/theme';

type HeadingLevel = '1' | '2' | '3';
type HeadingWeight = 'regular' | 'weak';

const resolveComponent = (
  component: BoxProps['component'],
  level: HeadingLevel
): BoxProps['component'] => (component ? component : `h${level}`);

interface HeadingAtoms {
  fontSize: HeadingSize;
  transform: TransformVariant;
  fontWeight: FontWeightVariants;
}
const resolveHeadingAtoms = (
  level: HeadingLevel,
  weight: HeadingWeight,
  tokens: Tokens
): HeadingAtoms => {
  if (level === '1') {
    return {
      fontSize: 'level1',
      transform: 'level1Heading',
      fontWeight: tokens.heading.level1[weight]
    };
  }
  if (level === '2') {
    return {
      fontSize: 'level2',
      transform: 'level2Heading',
      fontWeight: tokens.heading.level2[weight]
    };
  }
  if (level === '3') {
    return {
      fontSize: 'level3',
      transform: 'level3Heading',
      fontWeight: tokens.heading.level3[weight]
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
          const { transform, fontSize, fontWeight } = resolveHeadingAtoms(
            level,
            weight,
            theme.tokens
          );

          return (
            <Box
              component={resolveComponent(component, level)}
              paddingBottom={level === '1' ? 'small' : 'xsmall'}
              className={classnames(
                theme.atoms.fontFamily.text,
                theme.atoms.color.neutral,
                theme.atoms.fontSize[fontSize],
                theme.atoms.fontWeight[fontWeight],
                theme.atoms.transform[transform]
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
