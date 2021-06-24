import { ReactNode } from 'react';
import { TextProps } from '../Text/Text';
import {
  UseDisclosureProps,
  DisclosureStateProps,
} from '../Disclosure/useDisclosure';
import { AccordionContextValue } from './AccordionContext';
import { DataAttributeMap } from '../private/buildDataAttributes';
export declare type AccordionItemBaseProps = {
  label: string;
  children: ReactNode;
  size?: TextProps['size'];
  tone?: AccordionContextValue['tone'];
  data?: DataAttributeMap;
};
export declare type AccordionItemProps = AccordionItemBaseProps &
  UseDisclosureProps;
export declare type AccordionItemStateProps = DisclosureStateProps;
export declare const AccordionItem: ({
  id,
  label,
  children,
  size: sizeProp,
  tone: toneProp,
  data,
  ...restProps
}: AccordionItemProps) => JSX.Element;
