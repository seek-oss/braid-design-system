declare type Direction = 'horizontal' | 'vertical';
interface ScrollOptions {
    duration?: number | null;
    speed?: number;
    minDuration?: number;
}
interface SmoothScrollOptions extends ScrollOptions {
    scrollContainer?: HTMLElement;
    direction?: Direction;
    offset?: number;
    position?: 'start' | 'end';
}
export declare const smoothScroll: (element: HTMLElement, { scrollContainer, direction, offset, position, ...scrollOptions }?: SmoothScrollOptions) => Promise<void>;
declare type SmoothScrollIntoViewOptions = Omit<SmoothScrollOptions, 'position'>;
export declare const smoothScrollIntoView: (element: HTMLElement, options: SmoothScrollIntoViewOptions) => void;
export {};
