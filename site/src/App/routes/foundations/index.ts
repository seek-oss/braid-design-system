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


const foundationDescriptions: Record<keyof typeof foundations, string> = {
  '/foundations/layout':
    'Spacing, structure, and composition primitives.',
  '/foundations/tones':
    'Semantic colour language used across components.',
  '/foundations/iconography':
    'Guidance for using and browsing Braid icons.',
};

export const foundationLandingCards = [
  ...Object.entries(foundations).map(([href, foundation]) => ({
    href,
    label: foundation.title,
    description:
      foundationDescriptions[href as keyof typeof foundationDescriptions],
  })),
  ...cssFoundationDocs.map((doc) => ({
    href: doc.path,
    label: doc.title,
    description: doc.description,
  })),
];

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
