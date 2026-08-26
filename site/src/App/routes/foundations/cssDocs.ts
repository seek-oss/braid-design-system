export interface CssFoundationDoc {
  name: string;
  title: string;
  path: string;
  description: string;
  /** Filename of the css docs module, if different from `name`. */
  docsFile?: string;
  /** Old paths that should redirect to `path`. */
  redirectsFrom?: readonly string[];
}

export const cssFoundationDocs: readonly CssFoundationDoc[] = [
  {
    name: 'tokens',
    title: 'Tokens',
    path: '/foundations/tokens',
    docsFile: 'vars',
    description: 'Theme CSS variables for custom stylesheets.',
    redirectsFrom: ['/foundations/vars', '/css/vars'],
  },
  {
    name: 'breakpoints',
    title: 'Breakpoints',
    path: '/foundations/breakpoints',
    description:
      'Named screen sizes that underpin all responsive rules in Braid.',
  },
];

export const isCssFoundationDoc = (docsType: string, docsName: string) =>
  docsType === 'foundations' &&
  cssFoundationDocs.some((doc) => doc.name === docsName);

export const isCssDoc = (docsType: string, docsName: string) =>
  docsType === 'css' || isCssFoundationDoc(docsType, docsName);

export const getCssFoundationDoc = (docsName: string) =>
  cssFoundationDocs.find((doc) => doc.name === docsName);

export const getCssDocFileName = (docsName: string) =>
  getCssFoundationDoc(docsName)?.docsFile ?? docsName;
