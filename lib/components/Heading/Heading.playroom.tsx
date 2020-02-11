import React from 'react';
import { Optional } from 'utility-types';
import { Heading as BraidHeading, HeadingProps } from './Heading';
import { Text } from '../Text/Text';

type PlayroomHeadingProps = Optional<HeadingProps, 'level'>;

export const Heading = ({
  level,
  children,
  ...restProps
}: PlayroomHeadingProps) => {
  if (!level) {
    return (
      <Text tone="critical" weight="strong">
        Heading must have a level
        <br />
        {children}
      </Text>
    );
  }

  return (
    <BraidHeading level={level} {...restProps}>
      {children}
    </BraidHeading>
  );
};
