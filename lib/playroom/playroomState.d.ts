/// <reference types="lodash" />
import { ReactNode } from 'react';
export interface StateProp {
    stateName?: string;
}
export declare const PlayroomStateProvider: ({ defaultState: defaultStateProp, children, }: {
    defaultState?: Map<string, any> | undefined;
    children: ReactNode;
}) => JSX.Element;
export declare const usePlayroomStore: () => {
    setDefaultState: (key: string, value: any) => void;
    getState: (key: string) => any;
    setState: import("lodash").CurriedFunction2<string, any, void>;
    toggleState: (key: string) => void;
    resetState: (...keys: string[]) => void;
};
declare type Callback = (...args: any[]) => void;
export declare function useFallbackState<Value, Handler extends Callback>(stateKey: string | undefined, value: Value, onChange: Handler | undefined, defaultValue?: Value): [NonNullable<Value>, (...args: Parameters<Handler>) => void];
export {};
