import {
  LandingCardTiles,
  SectionLanding,
} from '../../SectionLanding/SectionLanding';

import { guideLandingCards } from '.';

export const Guides = () => (
  <SectionLanding
    title="Guides"
    intro="Design, development, and contribution guidance for working with Braid."
  >
    <LandingCardTiles cards={guideLandingCards} />
  </SectionLanding>
);
