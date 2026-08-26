import {
  TextLink,
  Stack,
  Heading,
  ButtonLink,
  Inline,
  Text,
  Tiles,
  IconNewWindow,
  IconSocialGitHub,
  IconHistory,
  Bleed,
  IconChevron,
  Link,
} from 'braid-design-system';
import { Box } from 'braid-src/lib/components/Box/Box';
import type { ReactNode } from 'react';

import { useConfig } from '../../ConfigContext';
import { ComponentsIllustration } from '../../LandingCard/Illustrations/ComponentsIllustration';
import { FoundationsIllustration } from '../../LandingCard/Illustrations/FoundationsIllustration';
import { StylesIllustration } from '../../LandingCard/Illustrations/StylesIllustration';
import { TemplatesIllustration } from '../../LandingCard/Illustrations/TemplatesIllustration';
import { LandingCard } from '../../LandingCard/LandingCard';
import { Logo } from '../../Logo/Logo';

import * as styles from './home.css';
import * as landingCardStyles from '../../LandingCard/LandingCard.css';

const DestinationCard = ({
  href,
  label,
  description,
  icon,
}: {
  href: string;
  label: string;
  description: string;
  icon: ReactNode;
}) => (
  <Box position="relative" height="full">
    <Link href={href} className={landingCardStyles.linkOverlay} aria-label={label} />
    <Box
      background={{ lightMode: 'surface', darkMode: 'surfaceDark' }}
      overflow="hidden"
      borderRadius="large"
      height="full"
      className={landingCardStyles.card}
    >
      <Box padding="gutter">
        <Stack space="medium">
          <Box className={styles.destinationIcon} aria-hidden>
            {icon}
          </Box>
          <Stack space="small">
            <Heading level="4">{label}</Heading>
            <Text tone="secondary">{description}</Text>
          </Stack>
        </Stack>
      </Box>
    </Box>
  </Box>
);

export const HomePage = () => {
  const { playroomUrl } = useConfig();
  return (
    <Stack space="xxxlarge">
      <Box className={styles.hero}>
        <Box className={styles.contentColumn}>
          <Box className={styles.heroCopy}>
            <Heading level="1">
              Welcome to Braid, the themeable design system for the{' '}
              <TextLink href="https://au.seek.com/about">SEEK Group.</TextLink>
            </Heading>
          </Box>
        </Box>
      </Box>

      <Stack space="xlarge">
        <Stack space="medium">
          <Heading level="2">Explore</Heading>
          <Text>
            Foundations, components, patterns, and more for building with Braid.
            Start with the concepts, then jump into the pieces you need — or use
            templates and styles when you want a head start.
          </Text>
        </Stack>
        <Stack space="medium">
          <Tiles space="medium" columns={[1, 2, 3]}>
            <LandingCard
              href="/foundations"
              label="Foundations"
              description="Core concepts like layout, tones, and iconography. The shared language behind how Braid looks and fits together."
              illustration={<FoundationsIllustration />}
            />
            <LandingCard
              href="/components"
              label="Components"
              description="The full suite of React components available in Braid. Accessible, themeable building blocks for product UI."
              illustration={<ComponentsIllustration />}
            />
            <LandingCard
              href="/patterns"
              label="Patterns"
              description="Reusable patterns composing components into common experiences. Practical recipes for forms, lists, and everyday layouts."
              illustration={<ComponentsIllustration />}
            />
          </Tiles>
          <Tiles space="medium" columns={[1, 2]}>
            <LandingCard
              href="/templates"
              label="Templates"
              description="Page-level starting points for building new screens. Copy a layout or section and swap in your content."
              illustration={<TemplatesIllustration />}
              illustrationSize="compact"
            />
            <LandingCard
              href="/css"
              label="Styles"
              description="Low-level CSS utilities and styling primitives. Atoms and helpers for custom layout when components aren’t enough."
              illustration={<StylesIllustration />}
              illustrationSize="compact"
            />
          </Tiles>
        </Stack>
      </Stack>

      <Bleed horizontal="xlarge">
        <Box className={styles.gettingStartedCard}>
          <Stack space="medium">
            <Heading level="2">New to Braid?</Heading>
            <Text>
              Start with a hands-on tutorial, then dig into the design and
              development workflows.
            </Text>
            <Inline space="small">
              <ButtonLink
                href="/getting-started/job-summary"
                variant="transparent"
                icon={<IconChevron direction="right" />}
                iconPosition="trailing"
              >
                Job Summary tutorial
              </ButtonLink>
              <ButtonLink
                href="/design-workflow"
                variant="transparent"
                icon={<IconChevron direction="right" />}
                iconPosition="trailing"
              >
                Start designing
              </ButtonLink>
              <ButtonLink
                href="/development-workflow"
                variant="transparent"
                icon={<IconChevron direction="right" />}
                iconPosition="trailing"
              >
                Start developing
              </ButtonLink>
            </Inline>
          </Stack>
        </Box>
      </Bleed>

      <Tiles space="medium" columns={[1, 2, 4]}>
        <DestinationCard
          href="/releases"
          label="Releases"
          description="What’s new in Braid."
          icon={
            <Box className={styles.destinationGlyph}>
              <IconHistory size="fill" />
            </Box>
          }
        />
        <DestinationCard
          href="/gallery"
          label="Gallery"
          description="Browse every component in one place."
          icon={
            <Box className={styles.destinationGlyph}>
              <Logo iconOnly height="100%" width="100%" />
            </Box>
          }
        />
        <DestinationCard
          href={playroomUrl}
          label="Playroom"
          description="Prototype with live Braid components."
          icon={
            <Box className={styles.destinationGlyph}>
              <IconNewWindow size="fill" />
            </Box>
          }
        />
        <DestinationCard
          href="https://github.com/seek-oss/braid-design-system"
          label="GitHub"
          description="Source, issues, and release history."
          icon={
            <Box className={styles.destinationGlyph}>
              <IconSocialGitHub size="fill" />
            </Box>
          }
        />
      </Tiles>
    </Stack>
  );
};
