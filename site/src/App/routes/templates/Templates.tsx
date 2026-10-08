import {
  LandingCardTiles,
  SectionLanding,
} from '../../SectionLanding/SectionLanding';

import { templateLandingCards } from './templateDocs';

export const Templates = () => (
  <SectionLanding
    title="Templates"
    intro="Page-level starting points you can copy into Playroom and swap in your content. Layouts set the structure of a screen; sections drop into those layouts as reusable blocks."
  >
    <LandingCardTiles cards={templateLandingCards} />
  </SectionLanding>
);
