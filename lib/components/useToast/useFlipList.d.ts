export declare const useFlipList: () => {
    itemRef: (id: string) => (ref: HTMLElement | null) => void;
    remove: (id: string, cb: () => void) => void;
};
