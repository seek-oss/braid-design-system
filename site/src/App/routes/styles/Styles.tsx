import {
  LandingCardTiles,
  SectionLanding,
} from '../../SectionLanding/SectionLanding';

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
  <SectionLanding
    title="Styles"
    intro="Placeholder cards for CSS utilities. Content to be refined."
  >
    <LandingCardTiles cards={styleCards} />
  </SectionLanding>
);
