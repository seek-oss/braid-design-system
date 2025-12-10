import type { FC } from 'react';
import type { Optional } from 'utility-types';

import { useFallbackId } from '../../hooks/useFallbackId';

import {
  type FieldMessageProps,
  FieldMessage as BraidFieldMessage,
  tones,
} from './FieldMessage';

type PlayroomFieldMessageProps = Optional<FieldMessageProps, 'id'>;

export const FieldMessage: FC<PlayroomFieldMessageProps> = ({
  id,
  tone,
  ...restProps
}) => {
  const resolvedId = useFallbackId(id);

  return (
    <BraidFieldMessage
      id={resolvedId}
      tone={tone && tones.indexOf(tone) > -1 ? tone : undefined}
      {...restProps}
    />
  );
};
