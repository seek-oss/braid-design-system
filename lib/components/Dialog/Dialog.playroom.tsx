import React from 'react';
import { Optional } from 'utility-types';
import { useFallbackId } from '../../playroom/utils';
import { Dialog as BraidDialog, DialogProps } from './Dialog';

type PlayroomDialogProps = Optional<DialogProps, 'id'>;

export const Dialog = ({ id, ...restProps }: PlayroomDialogProps) => {
  const fallbackId = useFallbackId();

  return <BraidDialog id={id ?? fallbackId} {...restProps} />;
};
