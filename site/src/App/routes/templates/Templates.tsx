import {
  LandingCardTiles,
  SectionLanding,
} from '../../SectionLanding/SectionLanding';

import { templateLandingCards } from './templateDocs';

export const Templates = () => (
  <SectionLanding
    title="Templates"
    intro="Placeholder cards for template groups. Content to be refined."
  >
    <LandingCardTiles cards={templateLandingCards} />
  </SectionLanding>
);
