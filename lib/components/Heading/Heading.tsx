import React, { ReactNode } from 'react';
import { useClassNames } from 'sku/treat';
import { Box, BoxProps } from '../Box/Box';
import { useTheme } from '../private/ThemeContext';
import {
  useHeading,
  HeadingLevel,
  HeadingWeight,
} from '../../hooks/useTypography';

/* tslint:disable-next-line no-object-literal-type-assertion */
const resolveDefaultComponent = {
  '1': 'h1',
  '2': 'h2',
  '3': 'h3',
} as const;

export interface HeadingProps {
  children: ReactNode;
  level: HeadingLevel;
  weight?: HeadingWeight;
  component?: BoxProps['component'];
}

export const Heading = ({
  level,
  weight,
  component,
  children,
}: HeadingProps) => {
  const theme = useTheme();

  return (
    <Box
      component={component || resolveDefaultComponent[level]}
      paddingBottom={level === '1' ? 'small' : 'xsmall'}
      className={useClassNames(
        useHeading({ weight, level, baseline: true }),
        theme.atoms.color.neutral,
      )}
    >
      {children}
    </Box>
  );
};
