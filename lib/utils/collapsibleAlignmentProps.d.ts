import { ReactNode } from 'react';
import { OptionalResponsiveValue } from '../atoms/sprinkles.css';
import { ResponsiveRangeProps } from './responsiveRangeProps';
import { Align, AlignY } from './align';
export interface CollapsibleAlignmentProps {
    collapseBelow?: ResponsiveRangeProps['below'];
    align?: OptionalResponsiveValue<Align>;
    alignY?: OptionalResponsiveValue<AlignY>;
    reverse?: boolean;
}
export declare function resolveCollapsibleAlignmentProps({ align, alignY, collapseBelow, reverse, }: CollapsibleAlignmentProps): {
    readonly collapseMobile: boolean;
    readonly collapseTablet: boolean;
    readonly orderChildren: (children: ReactNode) => (import("react").ReactChild | import("react").ReactFragment | import("react").ReactPortal)[];
    readonly collapsibleAlignmentProps: {
        readonly display: readonly ("flex" | "block" | null)[] & {
            length: 3 | 2;
        } & {
            0: "flex" | "block" | null;
        };
        readonly flexDirection: readonly ("column" | "row" | "rowReverse" | null)[] & {
            length: 3 | 2;
        } & {
            0: "column" | "row" | "rowReverse" | null;
        };
        readonly justifyContent: (readonly ("center" | "flexStart" | "flexEnd" | null)[] & {
            length: 3 | 2;
        } & {
            0: "center" | "flexStart" | "flexEnd" | null;
        }) | undefined;
        readonly alignItems: "center" | "flexStart" | "flexEnd" | Partial<Record<"mobile" | "tablet" | "desktop", "center" | "flexStart" | "flexEnd">> | undefined;
    };
    readonly collapsibleAlignmentChildProps: {
        readonly display: readonly ("flex" | "block" | null)[] & {
            length: 3 | 2;
        } & {
            0: "flex" | "block" | null;
        };
        readonly justifyContent: readonly ("center" | "flexStart" | "flexEnd" | null)[] & {
            length: 3 | 2;
        } & {
            0: "center" | "flexStart" | "flexEnd" | null;
        };
    };
};
