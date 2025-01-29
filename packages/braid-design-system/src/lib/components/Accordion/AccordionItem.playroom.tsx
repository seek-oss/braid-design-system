import { type StateProp, useFallbackState } from '../../playroom/playroomState';
import { useFallbackId } from '../../playroom/utils';

import {
  type AccordionItemProps,
  type AccordionItemBaseProps,
  type AccordionItemStateProps,
  AccordionItem as BraidAccordionItem,
} from './AccordionItem';

type OptionalProps = 'id';
type PlayroomAccordionItemProps = StateProp &
  AccordionItemBaseProps &
  AccordionItemStateProps &
  Partial<Pick<AccordionItemProps, OptionalProps>>;

export const AccordionItem = ({
  id,
  label,
  stateName,
  expanded,
  onToggle,
  size,
  tone,
  weight,
  badge,
  icon,
  ...restProps
}: PlayroomAccordionItemProps) => {
  const fallbackId = useFallbackId();
  const [state, handleChange] = useFallbackState(
    stateName,
    expanded,
    onToggle,
    false,
  );

  return (
    <BraidAccordionItem
      id={id ?? fallbackId}
      expanded={state}
      onToggle={handleChange}
      label={typeof label !== 'boolean' ? label : ''}
      size={typeof size === 'boolean' ? undefined : size}
      tone={typeof tone === 'boolean' ? undefined : tone}
      weight={typeof weight === 'boolean' ? undefined : weight}
      badge={typeof badge === 'boolean' ? undefined : badge}
      icon={typeof icon === 'boolean' ? undefined : icon}
      {...restProps}
    />
  );
};
