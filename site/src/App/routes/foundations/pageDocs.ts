export interface FoundationPageDoc {
  name: string;
  title: string;
  path: string;
  description: string;
}

export const foundationPageDocs: readonly FoundationPageDoc[] = [
  {
    name: 'layout',
    title: 'Layout',
    path: '/foundations/layout',
    description: 'Spacing, structure, and composition primitives.',
  },
];

export const getFoundationPageDocMeta = (docsName: string) =>
  foundationPageDocs.find((doc) => doc.name === docsName);

export const isFoundationPageDoc = (docsType: string, docsName: string) =>
  docsType === 'foundations' && Boolean(getFoundationPageDocMeta(docsName));
