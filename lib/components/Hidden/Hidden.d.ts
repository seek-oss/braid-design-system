import { ReactNode } from 'react';
import { BoxProps } from '../Box/Box';
import { ResponsiveRangeProps } from '../../utils/responsiveRangeProps';
import { DataAttributeMap } from '../private/buildDataAttributes';
export interface HiddenProps extends ResponsiveRangeProps {
    children: ReactNode;
    component?: BoxProps['component'];
    screen?: boolean;
    print?: boolean;
    inline?: boolean;
    data?: DataAttributeMap;
}
export declare const Hidden: ({ children, component, above, below, screen, print, inline: inlineProp, data, }: HiddenProps) => JSX.Element;
