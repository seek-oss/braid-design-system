import { Heading, Stack } from 'braid-design-system';

import { LandingSection } from '../../LandingCard/LandingSection';

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
] as const;

export const Templates = () => (
  <Stack space="xxlarge">
    <Heading level="1">Templates</Heading>
    <LandingSection
      heading="Explore templates"
      introduction="Placeholder cards for template groups. Content to be refined."
      cards={templateCards}
    />
  </Stack>
);
