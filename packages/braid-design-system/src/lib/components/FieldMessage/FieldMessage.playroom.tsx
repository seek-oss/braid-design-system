import { useId } from 'react';
import type { Optional } from 'utility-types';

import {
  type FieldMessageProps,
  FieldMessage as BraidFieldMessage,
  tones,
} from './FieldMessage';

type PlayroomFieldMessageProps = Optional<FieldMessageProps, 'id'>;

export const FieldMessage = ({
  id,
  tone,
  ...restProps
}: PlayroomFieldMessageProps) => {
  const fallbackId = useId();

  return (
    <BraidFieldMessage
      id={id ?? fallbackId}
      tone={tone && tones.indexOf(tone) > -1 ? tone : undefined}
      {...restProps}
    />
  );
};
