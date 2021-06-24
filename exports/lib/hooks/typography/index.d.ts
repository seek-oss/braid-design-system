import type { StyleRule } from '@vanilla-extract/css';
import { BoxProps } from '../../components/Box/Box';
import * as styles from './typography.css';
declare type TextTone = keyof typeof styles.tone | 'neutral';
export interface UseTextProps {
    weight?: keyof typeof styles.fontWeight;
    size?: keyof typeof styles.text;
    tone?: TextTone;
    baseline: boolean;
    backgroundContext?: BoxProps['background'];
}
export declare const globalTextStyle: ({ weight, size, }?: Pick<UseTextProps, 'weight' | 'size'>) => StyleRule;
export declare function useText({ weight, size, tone, baseline, backgroundContext, }: UseTextProps): string;
export declare type HeadingLevel = keyof typeof styles.heading;
export declare type HeadingWeight = 'regular' | 'weak';
interface UseHeadingProps {
    weight?: HeadingWeight;
    level: HeadingLevel;
    baseline: boolean;
    backgroundContext?: BoxProps['background'];
}
export declare const globalHeadingStyle: ({ weight, level, }: Pick<UseHeadingProps, 'weight' | 'level'>) => StyleRule;
export declare function useHeading({ weight, level, baseline, backgroundContext, }: UseHeadingProps): string;
export declare function textSize(size: keyof typeof styles.text): string;
export declare function useWeight(weight: keyof typeof styles.fontWeight): string | undefined;
export declare function useTextTone({ tone: toneProp, backgroundContext: backgroundContextOverride, }: {
    tone: TextTone;
    backgroundContext?: BoxProps['background'];
}): string;
export declare const touchableText: Record<"large" | "small" | "xsmall" | "standard", string>;
export {};
