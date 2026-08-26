import { Heading, Stack, Text, Tiles } from 'braid-design-system';

import { LandingCard } from '../../LandingCard/LandingCard';

import { howToEntries, patternEntries, toLandingCard } from './catalog';

export const Patterns = () => (
  <Stack space="xxlarge">
    <Stack space="medium">
      <Heading component="h1" level="2">
        Patterns
      </Heading>
      <Text>
        Reusable compositions of Braid components for common product
        experiences, plus practical how-tos for applying them.
      </Text>
    </Stack>
    <Tiles space="medium" columns={[1, 2, 3]}>
      {patternEntries.map((entry) => (
        <LandingCard key={entry.slug} {...toLandingCard(entry)} />
      ))}
    </Tiles>
    <Stack space="medium">
      <Heading level="3">How to</Heading>
      <Text>
        Practical guidance for applying Braid to specific layout and visual
        problems.
      </Text>
    </Stack>
    <Tiles space="medium" columns={[1, 2, 3]}>
      {howToEntries.map((entry) => (
        <LandingCard key={entry.slug} {...toLandingCard(entry)} />
      ))}
    </Tiles>
  </Stack>
);
