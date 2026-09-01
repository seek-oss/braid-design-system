import {
  LandingCardTiles,
  SectionLanding,
} from '../../SectionLanding/SectionLanding';

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
  <SectionLanding
    title="Templates"
    intro="Placeholder cards for template groups. Content to be refined."
  >
    <LandingCardTiles cards={templateCards} />
  </SectionLanding>
);
