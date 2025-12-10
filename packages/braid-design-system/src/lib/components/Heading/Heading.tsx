import type { FC, ReactNode } from 'react';

import {
  type TypographyProps,
  Typography,
} from '../private/Typography/Typography';

import HeadingContext from './HeadingContext';

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

export const Heading: FC<HeadingProps> = ({
  level,
  weight,
  component,
  ...typographyProps
}) => (
  <HeadingContext.Provider value={true}>
    <Typography
      {...typographyProps}
      component={component || resolveDefaultComponent[level]}
      className={[
        typographyStyles.fontFamily,
        typographyStyles.headingWeight[weight || 'regular'],
        typographyStyles.heading[level],
        typographyStyles.tone.neutral,
      ]}
    />
  </HeadingContext.Provider>
);
