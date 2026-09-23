import {
  LandingCardTiles,
  SectionLanding,
} from '../../SectionLanding/SectionLanding';
import { documentedCss } from '../../navigationHelpers';

const styleDescriptions: Record<string, string> = {
  atoms:
    'Atomic classes for Braid’s layout, spacing, and typography rules in custom stylesheets.',
  globalHeadingStyle:
    'Heading styles for global HTML you don’t control, like foreign markup.',
  globalTextStyle:
    'Text styles for global HTML you don’t control, like foreign markup.',
  outlineStyle:
    'Apply Braid’s focus outline to an element via a selector, typically the focus of another element.',
  responsiveStyle:
    'Author mobile-first responsive rules using Braid’s breakpoints.',
};

const styleCards = documentedCss.map(({ name }) => ({
  href: `/styles/${name}`,
  label: name,
  description: styleDescriptions[name] ?? '',
}));

export const Styles = () => (
  <SectionLanding
    title="Styles"
    intro="Low-level CSS utilities for layout, colour, and mobile-first custom styles when a component isn't the right fit."
  >
    <LandingCardTiles cards={styleCards} />
  </SectionLanding>
);
