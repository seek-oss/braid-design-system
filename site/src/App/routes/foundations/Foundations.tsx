import { Heading, Stack, Text, Tiles } from 'braid-design-system';

import { LandingCard } from '../../LandingCard/LandingCard';

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
    <Stack space="medium">
      <Heading component="h1" level="2">
        Foundations
      </Heading>
      <Text>
        Placeholder cards for the core foundation topics. Content to be refined.
      </Text>
    </Stack>
    <Tiles space="xlarge" columns={[1, 2, 3]}>
      {foundationCards.map((card) => (
        <LandingCard key={card.href} {...card} />
      ))}
    </Tiles>
  </Stack>
);
