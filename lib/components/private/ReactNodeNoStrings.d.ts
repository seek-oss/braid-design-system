import { ReactElement } from 'react';
interface ReactNodeArray extends Array<ReactNodeNoStrings> {
}
export declare type ReactNodeNoStrings = ReactElement | ReactNodeArray | boolean | null | undefined;
export {};
