import React, { ReactNode } from 'react';
import HeadingContext from './HeadingContext';
import { Box, BoxProps } from '../Box/Box';
import {
  useHeading,
  HeadingLevel,
  HeadingWeight,
} from '../../hooks/typography';

/* tslint:disable-next-line no-object-literal-type-assertion */
const resolveDefaultComponent = {
  '1': 'h1',
  '2': 'h2',
  '3': 'h3',
  '4': 'h4',
} as const;

export interface HeadingProps {
  children: ReactNode;
  level: HeadingLevel;
  weight?: HeadingWeight;
  component?: BoxProps['component'];
  id?: string;
}

const resolvePaddingForLevel = (level: HeadingLevel) => {
  if (level === '1') {
    return 'small';
  }

  if (level === '4') {
    return 'xxsmall';
  }

  return 'xsmall';
};

export const Heading = ({
  level,
  weight,
  component,
  children,
  id,
}: HeadingProps) => (
  <HeadingContext.Provider value={true}>
    <Box
      id={id}
      component={component || resolveDefaultComponent[level]}
      paddingBottom={resolvePaddingForLevel(level)}
      className={useHeading({ weight, level, baseline: true })}
    >
      {children}
    </Box>
  </HeadingContext.Provider>
);
