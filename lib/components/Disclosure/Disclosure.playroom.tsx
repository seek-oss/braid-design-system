import React from 'react';
import { useFallbackId } from '../../playroom/utils';
import {
  Disclosure as BraidDisclosure,
  DisclosureProps,
  DisclosureBaseProps,
  DisclosureStateProps,
} from './Disclosure';

type OptionalProps = 'id';
type PlayroomDisclosureProps = DisclosureBaseProps &
  DisclosureStateProps &
  Partial<Pick<DisclosureProps, OptionalProps>>;

export const Disclosure = ({ id, ...restProps }: PlayroomDisclosureProps) => {
  const fallbackId = useFallbackId();

  return <BraidDisclosure id={id ?? fallbackId} {...restProps} />;
};
