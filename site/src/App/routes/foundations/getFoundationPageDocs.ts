import type { PatternDocs } from '../../../types';

import layout from './layout/layout';

const foundationPageDocsByName: Record<string, PatternDocs> = {
  layout,
};

export const getFoundationPageDocs = (docsName: string): PatternDocs => {
  const docs = foundationPageDocsByName[docsName];

  if (!docs) {
    throw new Error(`Unknown foundation page: ${docsName}`);
  }

  return docs;
};
