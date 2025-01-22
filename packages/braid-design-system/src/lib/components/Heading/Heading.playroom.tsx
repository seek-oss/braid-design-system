import { type HeadingProps, Heading as BraidHeading } from './Heading';

export const Heading = ({ level, ...restProps }: HeadingProps) => (
  <BraidHeading level={level || '3'} {...restProps} />
);
