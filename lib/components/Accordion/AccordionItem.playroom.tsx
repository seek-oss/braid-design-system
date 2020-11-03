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
  Partial<Pick<AccordionItemProps, OptionalProps>> & { name?: string };

export const AccordionItem = ({
  id,
  name,
  expanded,
  onToggle,
  ...restProps
}: PlayroomAccordionItemProps) => {
  const fallbackId = useFallbackId();
  const [state, handleChange] = useFallbackState(
    name,
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
