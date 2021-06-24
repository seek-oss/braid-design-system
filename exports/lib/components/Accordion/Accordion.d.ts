import { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';
import { RequiredResponsiveValue } from '../../atoms/sprinkles.css';
import { DataAttributeMap } from '../private/buildDataAttributes';
import { AccordionContextValue } from './AccordionContext';
export declare const validSpaceValues: readonly ['medium', 'large', 'xlarge'];
export interface AccordionProps {
  children: ReactNodeNoStrings;
  dividers?: boolean;
  size?: AccordionContextValue['size'];
  tone?: AccordionContextValue['tone'];
  space?: RequiredResponsiveValue<typeof validSpaceValues[number]>;
  data?: DataAttributeMap;
}
export declare const Accordion: ({
  children,
  size,
  tone,
  space: spaceProp,
  dividers,
  data,
}: AccordionProps) => JSX.Element;
