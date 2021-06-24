import { ReactNode } from 'react';
import { ResponsiveRangeProps } from '../../utils/responsiveRangeProps';
import { DataAttributeMap } from '../private/buildDataAttributes';
export declare const validCardComponents: readonly ["div", "article", "aside", "details", "main", "section"];
declare type SimpleCardRounding = {
    rounded?: boolean;
    roundedAbove?: never;
};
declare type ResponsiveCardRounding = {
    rounded?: never;
    roundedAbove?: ResponsiveRangeProps['above'];
};
export declare type CardProps = {
    children: ReactNode;
    tone?: 'promote' | 'formAccent';
    component?: typeof validCardComponents[number];
    data?: DataAttributeMap;
} & (SimpleCardRounding | ResponsiveCardRounding);
export declare const Card: ({ children, component, tone, data, ...restProps }: CardProps) => JSX.Element;
export {};
