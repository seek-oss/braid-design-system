import { cssFoundationDocs } from './cssDocs';
import iconography from './iconography/iconography';
import layout from './layout/layout';
import tones from './tones/tones';

export { cssFoundationDocs } from './cssDocs';

const foundations = {
  '/foundations/layout': layout,
  '/foundations/tones': tones,
  '/foundations/iconography': iconography,
};

export default foundations;

export const foundationNavItems: Array<{
  name: string;
  path: string;
  badge?: 'New';
}> = [
  ...Object.entries(foundations).map(([path, foundation]) => ({
    name: foundation.title,
    badge: foundation.badge,
    path,
  })),
  ...cssFoundationDocs.map((doc) => ({
    name: doc.title,
    path: doc.path,
  })),
];
