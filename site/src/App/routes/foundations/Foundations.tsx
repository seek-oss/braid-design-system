import {
  LandingCardTiles,
  SectionLanding,
} from '../../SectionLanding/SectionLanding';

import { foundationLandingCards } from '.';

export const Foundations = () => (
  <SectionLanding
    title="Foundations"
    intro="The shared language behind Braid: layout, tone, iconography, tokens, and breakpoints."
  >
    <LandingCardTiles cards={foundationLandingCards} />
  </SectionLanding>
);
