import { Stack } from 'braid-design-system';

import { LandingSection } from '../../LandingCard/LandingSection';

import { howToEntries, patternEntries, toLandingCard } from './catalog';

export const Patterns = () => (
  <Stack space="xxlarge">
    <LandingSection
      heading="Patterns"
      headingComponent="h1"
      introduction="Reusable compositions of Braid components for common product experiences, plus practical how-tos for applying them."
      cards={patternEntries.map(toLandingCard)}
    />
    <LandingSection
      heading="How to"
      headingLevel="3"
      introduction="Practical guidance for applying Braid to specific layout and visual problems."
      cards={howToEntries.map(toLandingCard)}
    />
  </Stack>
);
