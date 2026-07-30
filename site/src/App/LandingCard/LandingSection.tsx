import { Heading, Stack, Text, Tiles } from 'braid-design-system';

import { LandingCard, type LandingCardProps } from './LandingCard';

export interface LandingSectionProps {
  heading: string;
  introduction: string;
  cards: readonly LandingCardProps[];
}

export const LandingSection = ({
  heading,
  introduction,
  cards,
}: LandingSectionProps) => (
  <Stack space="large">
    <Stack space="small">
      <Heading level="2">{heading}</Heading>
      <Text tone="secondary">{introduction}</Text>
    </Stack>
    <Tiles space="medium" columns={{ mobile: 1, tablet: 2, desktop: 3 }}>
      {cards.map((card) => (
        <LandingCard key={card.href} {...card} />
      ))}
    </Tiles>
  </Stack>
);
