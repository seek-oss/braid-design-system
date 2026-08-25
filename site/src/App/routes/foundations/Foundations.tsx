import { Heading, Stack } from 'braid-design-system';

import { LandingSection } from '../../LandingCard/LandingSection';

import { cssFoundationDocs } from './cssDocs';

const foundationCards = [
  {
    href: '/foundations/layout',
    label: 'Layout',
    description: 'Spacing, structure, and composition primitives.',
  },
  {
    href: '/foundations/tones',
    label: 'Tones',
    description: 'Semantic colour language used across components.',
  },
  {
    href: '/foundations/iconography',
    label: 'Iconography',
    description: 'Guidance for using and browsing Braid icons.',
  },
  ...cssFoundationDocs.map((doc) => ({
    href: doc.path,
    label: doc.title,
    description: doc.description,
  })),
];

export const Foundations = () => (
  <Stack space="xxlarge">
    <Heading level="1">Foundations</Heading>
    <LandingSection
      heading="Explore foundations"
      introduction="Placeholder cards for the core foundation topics. Content to be refined."
      cards={foundationCards}
    />
  </Stack>
);
