import {
  LandingCardTiles,
  SectionLanding,
} from '../../SectionLanding/SectionLanding';

const styleCards = [
  {
    href: '/styles/atoms',
    label: 'Atoms',
    description: 'Reusable atomic classes for layout and colour.',
  },
  {
    href: '/styles/responsiveStyle',
    label: 'Responsive style',
    description: 'Helpers for authoring mobile-first custom CSS.',
  },
];

export const Styles = () => (
  <SectionLanding
    title="Styles"
    intro="Low-level CSS utilities for layout, colour, and mobile-first custom styles when a component isn't the right fit."
  >
    <LandingCardTiles cards={styleCards} />
  </SectionLanding>
);
