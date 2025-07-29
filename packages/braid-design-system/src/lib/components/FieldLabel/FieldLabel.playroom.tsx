import type { Optional } from 'utility-types';

import {
  type FieldLabelProps,
  FieldLabel as BraidFieldLabel,
} from './FieldLabel';

type PlayroomFieldLabelProps = Optional<FieldLabelProps, 'htmlFor'>;

export const FieldLabel = ({
  htmlFor,
  ...restProps
}: PlayroomFieldLabelProps) => (
  <BraidFieldLabel htmlFor={htmlFor ?? false} {...restProps} />
);
