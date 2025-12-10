import type { FC } from 'react';

import { type HeadingProps, Heading as BraidHeading } from './Heading';

export const Heading: FC<HeadingProps> = ({ level, ...restProps }) => (
  <BraidHeading level={level || '3'} {...restProps} />
);
