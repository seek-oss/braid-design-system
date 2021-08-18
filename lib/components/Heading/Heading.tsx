import React, { ReactNode } from 'react';
import HeadingContext from './HeadingContext';
import { Box, BoxProps } from '../Box/Box';
import {
  useHeading,
  HeadingLevel,
  HeadingWeight,
} from '../../hooks/typography';
import buildDataAttributes, {
  DataAttributeMap,
} from '../private/buildDataAttributes';
import { Truncate } from '../private/Truncate/Truncate';

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
  align?: BoxProps['textAlign'];
  component?: BoxProps['component'];
  id?: string;
  truncate?: boolean;
  data?: DataAttributeMap;
}

export const Heading = ({
  level,
  weight,
  component,
  children,
  align,
  id,
  truncate = false,
  data,
}: HeadingProps) => (
  <HeadingContext.Provider value={true}>
    <Box
      id={id}
      component={component || resolveDefaultComponent[level]}
      textAlign={align}
      className={useHeading({ weight, level, baseline: true })}
      {...(data ? buildDataAttributes(data) : undefined)}
    >
      {truncate ? <Truncate>{children}</Truncate> : children}
    </Box>
  </HeadingContext.Provider>
);
