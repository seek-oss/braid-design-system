import { Heading, Stack, Text } from 'braid-design-system';

import {
  LandingCardTiles,
  SectionLanding,
} from '../../SectionLanding/SectionLanding';
import { templateLandingCards } from '../templates/templateDocs';

import { howToEntries, patternEntries, toLandingCard } from './catalog';

export const Patterns = () => (
  <SectionLanding
    title="Patterns"
    intro="Reusable compositions of Braid components for common product experiences, plus practical how-tos for applying them."
  >
    <LandingCardTiles
      cards={patternEntries.map((entry) => toLandingCard(entry))}
    />
    <Stack space="medium">
      <Heading level="3">Templates</Heading>
      <Text>
        Page-level starting points for building new screens. Copy a layout or
        section and swap in your content.
      </Text>
    </Stack>
    <LandingCardTiles cards={templateLandingCards} />
    <Stack space="medium">
      <Heading level="3">How to</Heading>
      <Text>
        Practical guidance for applying Braid to specific layout and visual
        problems.
      </Text>
    </Stack>
    <LandingCardTiles
      cards={howToEntries.map((entry) => toLandingCard(entry))}
    />
  </SectionLanding>
);
