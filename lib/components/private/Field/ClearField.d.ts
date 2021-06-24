import { Ref } from 'react';
interface Props {
    inputRef: Ref<HTMLInputElement>;
    onClear?: () => void;
    hide?: boolean;
}
export declare const ClearField: ({ hide, onClear, inputRef }: Props) => JSX.Element;
export {};
