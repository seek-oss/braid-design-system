import { Heading, Stack } from 'braid-design-system';

import { LandingSection } from '../../LandingCard/LandingSection';

const styleCards = [
  {
    href: '/css/atoms',
    label: 'Atoms',
    description: 'Reusable atomic classes for layout and colour.',
  },
  {
    href: '/css/vars',
    label: 'Vars',
    description: 'Theme CSS variables for custom stylesheets.',
  },
  {
    href: '/css/responsiveStyle',
    label: 'Responsive style',
    description: 'Helpers for authoring mobile-first custom CSS.',
  },
] as const;

export const Styles = () => (
  <Stack space="xxlarge">
    <Heading level="1">Styles</Heading>
    <LandingSection
      heading="Explore styles"
      introduction="Placeholder cards for CSS utilities. Content to be refined."
      cards={styleCards}
    />
  </Stack>
);
