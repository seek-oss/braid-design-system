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
  Spread,
} from 'braid-design-system';
import { Box } from 'braid-src/lib/components/Box/Box';

import { useConfig } from '../../ConfigContext';
import { ComponentsIllustration } from '../../LandingCard/Illustrations/ComponentsIllustration';
import { FoundationsIllustration } from '../../LandingCard/Illustrations/FoundationsIllustration';
import { PatternsIllustration } from '../../LandingCard/Illustrations/PatternsIllustration';
import { StylesIllustration } from '../../LandingCard/Illustrations/StylesIllustration';
import { TemplatesIllustration } from '../../LandingCard/Illustrations/TemplatesIllustration';
import { LandingCard } from '../../LandingCard/LandingCard';
import { Logo } from '../../Logo/Logo';
import { gettingStartedLinks } from '../../gettingStartedLinks';

import { HeroShowcase } from './HeroShowcase';

import * as styles from './home.css';

export const HomePage = () => {
  const { playroomUrl } = useConfig();
  return (
    <Stack space="xxxlarge">
      <Box className={styles.hero}>
        <Box className={styles.contentColumn}>
          <Spread space="xlarge" alignY="center">
            <Box className={styles.heroColumn}>
              <Heading level="1">
                Welcome to Braid, the themeable design system for the{' '}
                <TextLink href="https://au.seek.com/about">
                  SEEK Group.
                </TextLink>
              </Heading>
            </Box>
            <Box
              className={styles.heroColumn}
              display={{ mobile: 'none', desktop: 'block' }}
            >
              <HeroShowcase />
            </Box>
          </Spread>
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
              illustration={<PatternsIllustration />}
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
              {gettingStartedLinks.map(({ href, label }) => (
                <ButtonLink
                  key={href}
                  href={href}
                  variant="transparent"
                  icon={<IconChevron direction="right" />}
                  iconPosition="trailing"
                >
                  {label}
                </ButtonLink>
              ))}
            </Inline>
          </Stack>
        </Box>
      </Bleed>

      <Tiles space="medium" columns={[1, 2, 4]}>
        <LandingCard
          href="/releases"
          label="Releases"
          description="What’s new in Braid."
          icon={<IconHistory size="fill" />}
        />
        <LandingCard
          href="/gallery"
          label="Gallery"
          description="Browse every component in one place."
          icon={<Logo iconOnly height="100%" width="100%" />}
        />
        <LandingCard
          href={playroomUrl}
          label="Playroom"
          description="Prototype with live Braid components."
          icon={<IconNewWindow size="fill" />}
        />
        <LandingCard
          href="https://github.com/seek-oss/braid-design-system"
          label="GitHub"
          description="Source, issues, and release history."
          icon={<IconSocialGitHub size="fill" />}
        />
      </Tiles>
    </Stack>
  );
};
