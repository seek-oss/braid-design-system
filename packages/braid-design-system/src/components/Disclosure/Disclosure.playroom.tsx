import React from 'react';
import type { StateProp } from '../../playroom/playroomState';
import { useFallbackState } from '../../playroom/playroomState';
import { useFallbackId } from '../../playroom/utils';
import type {
  DisclosureProps,
  DisclosureBaseProps,
  DisclosureStateProps,
} from './Disclosure';
import { Disclosure as BraidDisclosure } from './Disclosure';

type OptionalProps = 'id';
type PlayroomDisclosureProps = StateProp &
  DisclosureBaseProps &
  DisclosureStateProps &
  Partial<Pick<DisclosureProps, OptionalProps>>;

export const Disclosure = ({
  id,
  stateName,
  expanded,
  expandLabel,
  collapseLabel,
  onToggle,
  ...restProps
}: PlayroomDisclosureProps) => {
  const fallbackId = useFallbackId();
  const [state, handleChange] = useFallbackState(
    stateName,
    expanded,
    onToggle,
    false,
  );

  return (
    <BraidDisclosure
      id={id ?? fallbackId}
      expanded={state}
      onToggle={handleChange}
      expandLabel={typeof expandLabel !== 'boolean' ? expandLabel : ''}
      collapseLabel={typeof collapseLabel !== 'boolean' ? collapseLabel : ''}
      {...restProps}
    />
  );
};
