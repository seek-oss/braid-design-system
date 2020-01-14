import { ReactElement } from 'react';

interface ReactNodeArray extends Array<ReactNodeNoStrings> {}
export type ReactNodeNoStrings =
  | ReactElement
  | ReactNodeArray
  | boolean
  | null
  | undefined;
