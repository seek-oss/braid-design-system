import { ReactNode } from 'react';
import { BoxProps } from '../Box/Box';
import { HeadingLevel, HeadingWeight } from '../../hooks/typography';
import { DataAttributeMap } from '../private/buildDataAttributes';
export interface HeadingProps {
    children: ReactNode;
    level: HeadingLevel;
    weight?: HeadingWeight;
    align?: BoxProps['textAlign'];
    component?: BoxProps['component'];
    id?: string;
    truncate?: boolean;
    data?: DataAttributeMap;
}
export declare const Heading: ({ level, weight, component, children, align, id, truncate, data, }: HeadingProps) => JSX.Element;
