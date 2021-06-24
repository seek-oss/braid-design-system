export declare type AllOrNone<T> = T | {
    [K in keyof T]?: never;
};
