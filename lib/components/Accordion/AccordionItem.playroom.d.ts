import { StateProp } from '../../playroom/playroomState';
import { AccordionItemProps, AccordionItemBaseProps, AccordionItemStateProps } from './AccordionItem';
declare type OptionalProps = 'id';
declare type PlayroomAccordionItemProps = StateProp & AccordionItemBaseProps & AccordionItemStateProps & Partial<Pick<AccordionItemProps, OptionalProps>>;
export declare const AccordionItem: ({ id, label, stateName, expanded, onToggle, size, tone, ...restProps }: PlayroomAccordionItemProps) => JSX.Element;
export {};
