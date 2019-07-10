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
} as const;

export interface HeadingProps {
  children: ReactNode;
  level: HeadingLevel;
  weight?: HeadingWeight;
  component?: BoxProps['component'];
  id?: string;
}

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
      paddingBottom={level === '1' ? 'small' : 'xsmall'}
      className={useHeading({ weight, level, baseline: true })}
    >
      {children}
    </Box>
  </HeadingContext.Provider>
);
