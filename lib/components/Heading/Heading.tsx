import React, { ReactNode } from 'react';
import { useClassNames } from 'sku/treat';
import { Box, BoxProps } from '../Box/Box';
import { HeadingSize, Transform, FontWeight, Tokens } from '../../themes/theme';
import { useTheme } from '../private/ThemeContext';
import useTypography from '../../hooks/useTypography';

type HeadingLevel = '1' | '2' | '3';
type HeadingWeight = 'regular' | 'weak';

interface HeadingOptions {
  fontSize: HeadingSize;
  transform: Transform;
  fontWeight: FontWeight;
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

export const Heading = ({
  level,
  weight = 'regular',
  component,
  children,
}: HeadingProps) => {
  const theme = useTheme();
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
      className={useClassNames(
        useTypography(),
        theme.atoms.color.neutral,
        theme.atoms.fontSize[fontSize],
        theme.atoms.fontWeight[fontWeight],
        theme.atoms.transform[transform],
      )}
    >
      {children}
    </Box>
  );
};
