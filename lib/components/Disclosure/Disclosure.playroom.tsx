import React from 'react';
import { useFallbackState } from '../../playroom/playroomState';
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
  Partial<Pick<DisclosureProps, OptionalProps>> & { name?: string };

export const Disclosure = ({
  id,
  name,
  expanded,
  onToggle,
  ...restProps
}: PlayroomDisclosureProps) => {
  const fallbackId = useFallbackId();
  const [state, handleChange] = useFallbackState(
    name,
    expanded,
    onToggle,
    false,
  );

  return (
    <BraidDisclosure
      id={id ?? fallbackId}
      expanded={state}
      onToggle={handleChange}
      {...restProps}
    />
  );
};
