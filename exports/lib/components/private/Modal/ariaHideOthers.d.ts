export declare type Cleanup = () => void;
declare const defaultParent: HTMLElement | null;
declare type Options = {
    parentNode?: typeof defaultParent;
    markerName?: string;
    delay?: number;
};
export declare const ariaHideOthers: (originalTarget: HTMLElement | HTMLElement[], { parentNode, markerName, delay, }?: Options) => Cleanup;
export {};
