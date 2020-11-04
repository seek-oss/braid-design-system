import React from 'react';
import { useFallbackState, StateProp } from '../../playroom/playroomState';
import { useFallbackId } from '../../playroom/utils';
import {
  AccordionItem as BraidAccordionItem,
  AccordionItemProps,
  AccordionItemBaseProps,
  AccordionItemStateProps,
} from './AccordionItem';

type OptionalProps = 'id';
type PlayroomAccordionItemProps = StateProp &
  AccordionItemBaseProps &
  AccordionItemStateProps &
  Partial<Pick<AccordionItemProps, OptionalProps>>;

export const AccordionItem = ({
  id,
  stateName,
  expanded,
  onToggle,
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
      {...restProps}
    />
  );
};
