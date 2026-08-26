import { Heading, Stack, Text, Tiles } from 'braid-design-system';

import { LandingCard } from '../../LandingCard/LandingCard';

const styleCards = [
  {
    href: '/css/atoms',
    label: 'Atoms',
    description: 'Reusable atomic classes for layout and colour.',
  },
  {
    href: '/css/responsiveStyle',
    label: 'Responsive style',
    description: 'Helpers for authoring mobile-first custom CSS.',
  },
];

export const Styles = () => (
  <Stack space="xxlarge">
    <Stack space="medium">
      <Heading component="h1" level="2">
        Styles
      </Heading>
      <Text>Placeholder cards for CSS utilities. Content to be refined.</Text>
    </Stack>
    <Tiles space="medium" columns={[1, 2, 3]}>
      {styleCards.map((card) => (
        <LandingCard key={card.href} {...card} />
      ))}
    </Tiles>
  </Stack>
);
