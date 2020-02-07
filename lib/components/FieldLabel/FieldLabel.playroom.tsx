import React from 'react';
import { Optional } from 'utility-types';
import { useFallbackId } from '../../playroom/utils';
import { FieldLabel as BraidFieldLabel, FieldLabelProps } from './FieldLabel';

type PlayroomFieldLabelProps = Optional<FieldLabelProps, 'id' | 'htmlFor'>;

export const FieldLabel = ({
  id,
  htmlFor,
  ...restProps
}: PlayroomFieldLabelProps) => {
  const fallbackId = useFallbackId();
  const fallbackFor = useFallbackId();

  return (
    <BraidFieldLabel
      id={id ?? fallbackId}
      htmlFor={htmlFor ?? fallbackFor}
      {...restProps}
    />
  );
};
