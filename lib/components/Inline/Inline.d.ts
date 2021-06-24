import { ResponsiveSpace } from '../../atoms/atoms';
import { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';
import { CollapsibleAlignmentProps } from '../../utils/collapsibleAlignmentProps';
import { DataAttributeMap } from '../private/buildDataAttributes';
export declare const validInlineComponents: readonly ["div", "ol", "ul"];
export interface InlineProps extends CollapsibleAlignmentProps {
    space: ResponsiveSpace;
    component?: typeof validInlineComponents[number];
    data?: DataAttributeMap;
    children: ReactNodeNoStrings;
}
export declare const Inline: ({ space, align, alignY, collapseBelow, reverse, component, data, children, }: InlineProps) => JSX.Element;
