import { ReactNode, CSSProperties, ComponentType } from 'react';
export declare const buttonVariants: readonly ["solid", "ghost", "soft", "transparent"];
export declare const buttonWeights: readonly ["weak", "regular", "strong"];
declare type ButtonSize = 'standard' | 'small';
declare type ButtonTone = 'brandAccent' | 'critical';
declare type ButtonWeight = typeof buttonWeights[number];
declare type ButtonVariant = typeof buttonVariants[number];
interface ButtonChildrenProps {
    children: ReactNode;
}
export interface PrivateButtonRendererProps {
    size?: ButtonSize;
    tone?: ButtonTone;
    variant?: ButtonVariant;
    bleedY?: boolean;
    /** @deprecated The `weight` prop has been deprecated. Please choose a [variant](https://seek-oss.github.io/braid-design-system/components/Button#variants) instead. */
    weight?: ButtonWeight;
    loading?: boolean;
    children: (ButtonChildren: ComponentType<ButtonChildrenProps>, styleProps: {
        style: CSSProperties;
        className: string;
    }) => ReactNode;
}
export declare const PrivateButtonRenderer: ({ size: sizeProp, tone: toneProp, variant: variantProp, bleedY, weight, loading, children, }: PrivateButtonRendererProps) => JSX.Element;
/** @deprecated `ButtonRenderer` has been deprecated. Use [Button](https://seek-oss.github.io/braid-design-system/components/Button) or [ButtonLink](https://seek-oss.github.io/braid-design-system/components/ButtonLink) instead. If your usage of `ButtonRenderer` is not covered by either of these, please let us know. */
export declare const ButtonRenderer: ({ size: sizeProp, tone: toneProp, variant: variantProp, bleedY, weight, loading, children, }: PrivateButtonRendererProps) => JSX.Element;
export {};
