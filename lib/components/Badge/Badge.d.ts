import React from 'react';
import { BoxProps } from '../Box/Box';
import { DataAttributeMap } from '../private/buildDataAttributes';
declare const validTones: readonly ["promote", "info", "neutral", "positive", "caution", "critical"];
declare type Tone = typeof validTones[number];
declare type BadgeWeight = 'strong' | 'regular';
export interface BadgeProps {
    tone?: Tone;
    weight?: BadgeWeight;
    bleedY?: boolean;
    title?: string;
    children: string;
    id?: string;
    data?: DataAttributeMap;
    tabIndex?: BoxProps['tabIndex'];
    'aria-describedby'?: string;
}
export declare const Badge: React.ForwardRefExoticComponent<BadgeProps & React.RefAttributes<HTMLDivElement>>;
export {};
