import type { FC } from 'react';
import type { Optional } from 'utility-types';

import {
  type FieldLabelProps,
  FieldLabel as BraidFieldLabel,
} from './FieldLabel';

type PlayroomFieldLabelProps = Optional<FieldLabelProps, 'htmlFor'>;

export const FieldLabel: FC<PlayroomFieldLabelProps> = ({
  htmlFor,
  ...restProps
}) => <BraidFieldLabel htmlFor={htmlFor ?? false} {...restProps} />;
