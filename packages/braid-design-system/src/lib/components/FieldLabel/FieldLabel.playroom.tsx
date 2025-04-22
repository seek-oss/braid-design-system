import { useId } from 'react';
import type { Optional } from 'utility-types';

import {
  type FieldLabelProps,
  FieldLabel as BraidFieldLabel,
} from './FieldLabel';

type PlayroomFieldLabelProps = Optional<FieldLabelProps, 'id' | 'htmlFor'>;

export const FieldLabel = ({
  id,
  htmlFor,
  ...restProps
}: PlayroomFieldLabelProps) => {
  const fallbackFor = useId();

  return <BraidFieldLabel htmlFor={htmlFor ?? fallbackFor} {...restProps} />;
};
