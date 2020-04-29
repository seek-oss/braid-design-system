import React from 'react';
import { useFallbackId } from '../../playroom/utils';
import {
  AccordionItem as BraidAccordionItem,
  AccordionItemBaseProps,
  AccordionItemStateProps,
} from './AccordionItem';

type OptionalProps = 'id';
type PlayroomAccordionItemProps = Omit<AccordionItemBaseProps, OptionalProps> &
  Partial<Pick<AccordionItemBaseProps, OptionalProps>> &
  AccordionItemStateProps;

export const AccordionItem = ({
  id,
  ...restProps
}: PlayroomAccordionItemProps) => {
  const fallbackId = useFallbackId();

  return <BraidAccordionItem id={id ?? fallbackId} {...restProps} />;
};
