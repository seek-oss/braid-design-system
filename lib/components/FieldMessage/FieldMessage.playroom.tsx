import React from 'react';
import { Optional } from 'utility-types';
import { useFallbackId } from '../../playroom/utils';
import {
  FieldMessage as BraidFieldMessage,
  FieldMessageProps,
} from './FieldMessage';

type PlayroomFieldMessageProps = Optional<FieldMessageProps, 'id'>;

export const FieldMessage = ({
  id,
  ...restProps
}: PlayroomFieldMessageProps) => {
  const fallbackId = useFallbackId();

  return <BraidFieldMessage id={id ?? fallbackId} {...restProps} />;
};
