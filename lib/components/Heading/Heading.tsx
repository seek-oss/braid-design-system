import React, { ReactNode } from 'react';
import HeadingContext from './HeadingContext';
import { Box, BoxProps } from '../Box/Box';
import {
  useHeading,
  useTruncate,
  HeadingLevel,
  HeadingWeight,
} from '../../hooks/typography';
import buildDataAttributes, {
  DataAttributeMap,
} from '../private/buildDataAttributes';

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
}: HeadingProps) => {
  const truncateStyles = useTruncate();
  const content = truncate ? (
    <Box
      component="span"
      display="block"
      overflow="hidden"
      className={truncateStyles}
    >
      {children}
    </Box>
  ) : (
    children
  );

  return (
    <HeadingContext.Provider value={true}>
      <Box
        id={id}
        component={component || resolveDefaultComponent[level]}
        textAlign={align}
        className={useHeading({ weight, level, baseline: true })}
        {...(data ? buildDataAttributes(data) : undefined)}
      >
        {content}
      </Box>
    </HeadingContext.Provider>
  );
};
