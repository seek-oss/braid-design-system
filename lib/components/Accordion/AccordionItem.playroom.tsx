import React from 'react';
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
  ...restProps
}: PlayroomAccordionItemProps) => {
  const fallbackId = useFallbackId();

  return <BraidAccordionItem id={id ?? fallbackId} {...restProps} />;
};
