import type { ReactElement } from 'react';

type ReactNodeArray = ReactNodeNoStrings[];
export type ReactNodeNoStrings =
  | ReactElement
  | ReactNodeArray
  | boolean
  | null
  | undefined;
