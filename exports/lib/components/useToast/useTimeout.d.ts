interface UseTimeoutProps {
    onTimeout: () => void;
    duration: number;
}
export declare const useTimeout: ({ onTimeout, duration }: UseTimeoutProps) => {
    stopTimeout: () => void;
    startTimeout: () => void;
};
export {};
