import React, { ReactNode } from 'react';
import HeadingContext from './HeadingContext';
import { Typography, TypographyProps } from '../private/Typography/Typography';
import * as typographyStyles from '../../css/typography.css';

const resolveDefaultComponent = {
  '1': 'h1',
  '2': 'h2',
  '3': 'h3',
  '4': 'h4',
} as const;

export interface HeadingProps extends TypographyProps {
  level: keyof typeof typographyStyles.heading;
  weight?: keyof typeof typographyStyles.headingWeight;
  children: ReactNode;
}

export const Heading = ({
  level,
  weight,
  component,
  ...typographyProps
}: HeadingProps) => (
  <HeadingContext.Provider value={true}>
    <Typography
      component={component || resolveDefaultComponent[level]}
      className={[
        typographyStyles.fontFamily,
        typographyStyles.headingWeight[weight || 'regular'],
        typographyStyles.heading[level],
        typographyStyles.tone.neutral,
      ]}
      {...typographyProps}
    />
  </HeadingContext.Provider>
);
