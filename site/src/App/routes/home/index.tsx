import {
  TextLink,
  Stack,
  Heading,
  Inline,
  Text,
  Tiles,
  IconSocialGitHub,
  IconChevron,
  Spread,
  IconRocket,
  IconImage,
  IconRenderer,
} from 'braid-design-system';
import { Box } from 'braid-src/lib/components/Box/Box';

import { useConfig } from '../../ConfigContext';
import { ComponentsIllustration } from '../../LandingCard/Illustrations/ComponentsIllustration';
import { FoundationsIllustration } from '../../LandingCard/Illustrations/FoundationsIllustration';
import { PatternsIllustration } from '../../LandingCard/Illustrations/PatternsIllustration';
import { StylesIllustration } from '../../LandingCard/Illustrations/StylesIllustration';
import { TemplatesIllustration } from '../../LandingCard/Illustrations/TemplatesIllustration';
import { LandingCard } from '../../LandingCard/LandingCard';
import { guideLandingCards } from '../../routes/guides';

import { HeroShowcase } from './HeroShowcase';

import * as styles from './home.css';

export const HomePage = () => {
  const { playroomUrl } = useConfig();
  return (
    <Stack space="xxxlarge">
      <Box className={styles.hero}>
        <Box className={styles.contentColumn}>
          <Spread space="xlarge" alignY="center">
            <Box className={styles.heroColumn} background="customDark">
              <Stack space="large">
                <Heading level="1">
                  <span style={{ fontSize: '1.2em' }}>Braid Design System</span>
                </Heading>
                <Text size="large" tone="secondary">
                  A themeable design system for the{' '}
                  <TextLink href="https://au.seek.com/about">
                    SEEK Group.
                  </TextLink>
                </Text>
              </Stack>
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
              href="/patterns/templates"
              label="Templates"
              description="Page-level starting points for building new screens. Copy a layout or section and swap in your content."
              illustration={<TemplatesIllustration />}
              illustrationSize="compact"
            />
            <LandingCard
              href="/styles"
              label="Styles"
              description="Low-level CSS utilities and styling primitives. Atoms and helpers for custom layout when components aren’t enough."
              illustration={<StylesIllustration />}
              illustrationSize="compact"
            />
          </Tiles>
        </Stack>
      </Stack>

      <Box className={styles.gettingStartedCard} background="formAccentSoft">
        <Stack space="large">
          <Heading level="2">New to Braid?</Heading>
          <Text>
            Browse the guides for the design and development workflows.
          </Text>
          <Inline space="medium">
            {guideLandingCards.slice(0, 3).map(({ href, label }) => (
              <Text weight="strong" key={href}>
                <TextLink
                  href={href}
                  weight="weak"
                  icon={<IconChevron direction="right" />}
                  iconPosition="trailing"
                >
                  {label}
                </TextLink>
              </Text>
            ))}
          </Inline>
        </Stack>
      </Box>

      <Tiles space="medium" columns={[1, 2, 4]}>
        <LandingCard
          href="/releases"
          label="Releases"
          description="What’s new in Braid"
          icon={<IconRocket size="fill" />}
        />
        <LandingCard
          href="/gallery"
          label="Gallery"
          description="Browse on canvas-style artboard"
          icon={<IconImage size="fill" />}
        />
        <LandingCard
          href={playroomUrl}
          label="Playroom"
          description="Prototype with live components"
          icon={
            <IconRenderer size="fill">
              {({ className }) => (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  focusable="false"
                  display="block"
                  className={className}
                >
                  <path
                    d="M0 100V0L20.5 10.25V89.75L0 100Z"
                    fill="currentColor"
                  />
                  <path
                    d="M80 40L100 50L80 60L40.5 79.75V59.75L60 50L40.5 40.25V20.25L80 40Z"
                    fill="currentColor"
                  />
                </svg>
              )}
            </IconRenderer>
          }
        />
        <LandingCard
          href="https://github.com/seek-oss/braid-design-system"
          label="GitHub"
          description="Source code, issues, and PRs"
          icon={<IconSocialGitHub size="fill" />}
        />
      </Tiles>
    </Stack>
  );
};
