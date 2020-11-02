import React from 'react';
import { useFallbackState } from '../../playroom/playroomState';
import { useFallbackId } from '../../playroom/utils';
import {
  AccordionItem as BraidAccordionItem,
  AccordionItemProps,
  AccordionItemBaseProps,
  AccordionItemStateProps,
} from './AccordionItem';

type OptionalProps = 'id';
type PlayroomAccordionItemProps = AccordionItemBaseProps &
  AccordionItemStateProps &
  Partial<Pick<AccordionItemProps, OptionalProps>>;

export const AccordionItem = ({
  id,
  expanded,
  onToggle,
  ...restProps
}: PlayroomAccordionItemProps) => {
  const fallbackId = useFallbackId();
  const [state, handleChange] = useFallbackState(id, expanded, onToggle, false);

  return (
    <BraidAccordionItem
      id={id ?? fallbackId}
      expanded={state}
      onToggle={handleChange}
      {...restProps}
    />
  );
};
