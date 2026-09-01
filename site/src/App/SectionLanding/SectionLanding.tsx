import { Heading, Stack, Text, Tiles } from 'braid-design-system';
import type { ComponentProps, ReactNode } from 'react';

import {
  LandingCard,
  type LandingCardProps,
} from '../LandingCard/LandingCard';

export const SectionLanding = ({
  title,
  intro,
  children,
}: {
  title: string;
  intro: ReactNode;
  children: ComponentProps<typeof Stack>['children'];
}) => (
  <Stack space="xxlarge">
    <Stack space="medium">
      <Heading component="h1" level="2">
        {title}
      </Heading>
      <Text>{intro}</Text>
    </Stack>
    {children}
  </Stack>
);

export const LandingCardTiles = ({ cards }: { cards: LandingCardProps[] }) => (
  <Tiles space="medium" columns={[1, 2, 3]}>
    {cards.map((card) => (
      <LandingCard key={card.href} {...card} />
    ))}
  </Tiles>
);
