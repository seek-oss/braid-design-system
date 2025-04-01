import { type StateProp, useFallbackState } from '../../playroom/playroomState';

import {
  type DisclosureProps,
  type DisclosureBaseProps,
  type DisclosureStateProps,
  Disclosure as BraidDisclosure,
} from './Disclosure';

type OptionalProps = 'id';
type PlayroomDisclosureProps = StateProp &
  DisclosureBaseProps &
  DisclosureStateProps &
  Partial<Pick<DisclosureProps, OptionalProps>>;

export const Disclosure = ({
  stateName,
  expanded,
  expandLabel,
  collapseLabel,
  onToggle,
  ...restProps
}: PlayroomDisclosureProps) => {
  const [state, handleChange] = useFallbackState(
    stateName,
    expanded,
    onToggle,
    false,
  );

  return (
    <BraidDisclosure
      expanded={state}
      onToggle={handleChange}
      expandLabel={typeof expandLabel !== 'boolean' ? expandLabel : ''}
      collapseLabel={typeof collapseLabel !== 'boolean' ? collapseLabel : ''}
      {...restProps}
    />
  );
};
