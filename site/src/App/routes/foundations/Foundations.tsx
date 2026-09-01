import {
  LandingCardTiles,
  SectionLanding,
} from '../../SectionLanding/SectionLanding';

import { foundationLandingCards } from '.';

export const Foundations = () => (
  <SectionLanding
    title="Foundations"
    intro="Placeholder cards for the core foundation topics. Content to be refined."
  >
    <LandingCardTiles cards={foundationLandingCards} />
  </SectionLanding>
);
