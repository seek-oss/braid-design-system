import { Heading, Stack } from 'braid-design-system';

import { LandingSection } from '../../LandingCard/LandingSection';

const patternCards = [
  {
    href: '/patterns#form-layout',
    label: 'Form layout',
    description: 'Placeholder for common form composition patterns.',
  },
  {
    href: '/patterns#empty-states',
    label: 'Empty states',
    description: 'Placeholder for empty and zero-result experiences.',
  },
  {
    href: '/patterns#filtering',
    label: 'Filtering',
    description: 'Placeholder for search and filter pattern guidance.',
  },
] as const;

export const Patterns = () => (
  <Stack space="xxlarge">
    <Heading level="1">Patterns</Heading>
    <LandingSection
      heading="Explore patterns"
      introduction="Placeholder cards until pattern pages are added. Links currently point back here."
      cards={patternCards}
    />
  </Stack>
);
