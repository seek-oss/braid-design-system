declare type ResponsiveArray<Value extends string | number> = ReadonlyArray<Value | null> & {
    length: 2 | 3;
} & {
    0: Value | null;
};
export declare const optimizeResponsiveArray: <Value extends string | number>(value: ResponsiveArray<Value>) => ResponsiveArray<Value>;
export {};
