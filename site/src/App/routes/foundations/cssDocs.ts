export const cssFoundationDocs = [
  {
    name: 'vars',
    title: 'Vars',
    path: '/foundations/vars',
    description: 'Theme CSS variables for custom stylesheets.',
  },
  {
    name: 'breakpoints',
    title: 'Breakpoints',
    path: '/foundations/breakpoints',
    description:
      'Named screen sizes that underpin all responsive rules in Braid.',
  },
] as const;

export const isCssFoundationDoc = (docsType: string, docsName: string) =>
  docsType === 'foundations' &&
  cssFoundationDocs.some((doc) => doc.name === docsName);

export const isCssDoc = (docsType: string, docsName: string) =>
  docsType === 'css' || isCssFoundationDoc(docsType, docsName);

export const getCssFoundationDoc = (docsName: string) =>
  cssFoundationDocs.find((doc) => doc.name === docsName);
