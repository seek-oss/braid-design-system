/// <reference types="react" />
import { Action } from './MenuRenderer.actions';
interface MenuRendererItemContextValues {
    isHighlighted: boolean;
    index: number;
    dispatch: (action: Action) => void;
    focusTrigger: () => void;
}
export declare const MenuRendererItemContext: import("react").Context<MenuRendererItemContextValues | null>;
export {};
