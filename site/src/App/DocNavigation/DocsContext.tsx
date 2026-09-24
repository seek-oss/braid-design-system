import { createContext } from 'react';

import type { getHistory } from '../Updates';
import type {
  getComponentDocs,
  getComponentSnippets,
  getCssDoc,
} from '../navigationHelpers';

export interface DocsProviderContextValue {
  docsName: string;
  docsType: string;
  docs?: ReturnType<typeof getCssDoc | typeof getComponentDocs>;
  history?: ReturnType<typeof getHistory>;
  snippets?: ReturnType<typeof getComponentSnippets>;
}

export const DocsContext = createContext<DocsProviderContextValue>({
  docsName: '',
  docsType: '',
});
