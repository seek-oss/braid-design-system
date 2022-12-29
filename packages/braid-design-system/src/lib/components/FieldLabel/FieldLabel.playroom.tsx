import React from 'react';
import type { Optional } from 'utility-types';
import { useFallbackId } from '../../playroom/utils';
import type { FieldLabelProps } from './FieldLabel';
import { FieldLabel as BraidFieldLabel } from './FieldLabel';

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
