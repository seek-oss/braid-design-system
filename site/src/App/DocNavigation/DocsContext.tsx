import { createContext } from 'react';

import type { PatternDocs } from '../../types';
import type { getHistory } from '../Updates';
import type {
  getComponentDocs,
  getComponentSnippets,
  getCssDoc,
} from '../navigationHelpers';

export interface DocsProviderContextValue {
  docsName: string;
  docsType: string;
  docsTitle?: string;
  docs?:
    | ReturnType<typeof getCssDoc>
    | ReturnType<typeof getComponentDocs>
    | PatternDocs;
  history?: ReturnType<typeof getHistory>;
  snippets?: ReturnType<typeof getComponentSnippets>;
}

export const DocsContext = createContext<DocsProviderContextValue>({
  docsName: '',
  docsType: '',
});
