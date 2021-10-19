import React from 'react';
import type { Optional } from 'utility-types';
import { useFallbackId } from '../../playroom/utils';
import type { FieldMessageProps } from './FieldMessage';
import { FieldMessage as BraidFieldMessage, tones } from './FieldMessage';

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
