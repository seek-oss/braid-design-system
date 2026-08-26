import { Heading, Stack, Text, Tiles } from 'braid-design-system';

import { LandingCard } from '../../LandingCard/LandingCard';

const templateCards = [
  {
    href: '/templates/layouts',
    label: 'Layouts',
    description: 'Full-page structural starting points for new screens.',
  },
  {
    href: '/templates/sections',
    label: 'Sections',
    description: 'Composable content blocks to drop into page layouts.',
  },
  {
    href: '/templates',
    label: 'Coming soon',
    description: 'Placeholder for additional template groups.',
  },
];

export const Templates = () => (
  <Stack space="xxlarge">
    <Stack space="medium">
      <Heading component="h1" level="2">
        Templates
      </Heading>
      <Text>
        Placeholder cards for template groups. Content to be refined.
      </Text>
    </Stack>
    <Tiles space="medium" columns={[1, 2, 3]}>
      {templateCards.map((card) => (
        <LandingCard key={card.href} {...card} />
      ))}
    </Tiles>
  </Stack>
);
