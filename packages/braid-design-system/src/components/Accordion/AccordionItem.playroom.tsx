import React from 'react';
import type { StateProp } from '../../playroom/playroomState';
import { useFallbackState } from '../../playroom/playroomState';
import { useFallbackId } from '../../playroom/utils';
import type {
  AccordionItemProps,
  AccordionItemBaseProps,
  AccordionItemStateProps,
} from './AccordionItem';
import { AccordionItem as BraidAccordionItem } from './AccordionItem';

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
      {...restProps}
    />
  );
};
