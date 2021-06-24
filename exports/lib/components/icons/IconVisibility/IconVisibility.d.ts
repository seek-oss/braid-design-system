import { UseIconProps } from '../../../hooks/useIcon';
export declare type IconVisibilityProps = UseIconProps & {
    hidden?: boolean;
};
export declare const IconVisibility: ({ hidden, ...props }: IconVisibilityProps) => JSX.Element;
