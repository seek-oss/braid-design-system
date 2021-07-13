import React from 'react';
import { Optional } from 'utility-types';
import { useFallbackId } from '../../playroom/utils';
import {
  FieldMessage as BraidFieldMessage,
  FieldMessageProps,
  tones,
} from './FieldMessage';

type PlayroomFieldMessageProps = Optional<FieldMessageProps, 'id'>;

export const FieldMessage = ({
  id,
  tone,
  ...restProps
}: PlayroomFieldMessageProps) => {
  const fallbackId = useFallbackId();

  return (
    <BraidFieldMessage
      id={id ?? fallbackId}
      tone={tone && tones.indexOf(tone) > -1 ? tone : undefined}
      {...restProps}
    />
  );
};
