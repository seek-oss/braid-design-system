import React from 'react';
import { Heading as BraidHeading, HeadingProps } from './Heading';

export const Heading = ({ level, ...restProps }: HeadingProps) => (
  <BraidHeading level={level || '3'} {...restProps} />
);
