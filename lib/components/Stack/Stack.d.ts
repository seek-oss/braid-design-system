import type { ResponsiveSpace } from '../../atoms/atoms';
import { DividerProps } from '../Divider/Divider';
import { Align } from '../../utils/align';
import { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';
import { OptionalResponsiveValue } from '../../atoms/sprinkles.css';
import { DataAttributeMap } from '../private/buildDataAttributes';
export declare const validStackComponents: readonly ["div", "ol", "ul"];
export interface StackProps {
    component?: typeof validStackComponents[number];
    children: ReactNodeNoStrings;
    space: ResponsiveSpace;
    align?: OptionalResponsiveValue<Align>;
    dividers?: boolean | DividerProps['weight'];
    data?: DataAttributeMap;
}
export declare const Stack: ({ component, children, space, align, dividers, data, }: StackProps) => JSX.Element;
