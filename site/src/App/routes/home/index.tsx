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
  Bleed,
  IconChevron,
} from 'braid-design-system';
import { Box } from 'braid-src/lib/components/Box/Box';

import { useConfig } from '../../ConfigContext';
import { ComponentsIllustration } from '../../LandingCard/Illustrations/ComponentsIllustration';
import { FoundationsIllustration } from '../../LandingCard/Illustrations/FoundationsIllustration';
import { LandingCard } from '../../LandingCard/LandingCard';

import * as styles from './home.css';

export const HomePage = () => {
  const { playroomUrl } = useConfig();
  return (
    <Stack space="xxlarge">
      <Box className={styles.hero}>
        <Box className={styles.contentColumn}>
          <Box className={styles.heroCopy}>
            <Stack space="large">
              <Heading level="1">
                Welcome to Braid, the themeable design system for the{' '}
                <TextLink href="https://au.seek.com/about">
                  SEEK Group.
                </TextLink>
              </Heading>
              <Inline space="small">
                <ButtonLink href="/releases" variant="ghost">
                  Releases
                </ButtonLink>
                {/* <ButtonLink href="/gallery" variant="ghost">
                  Gallery
                </ButtonLink> */}
                <ButtonLink
                  href={playroomUrl}
                  variant="ghost"
                  icon={<IconNewWindow />}
                >
                  Playroom
                </ButtonLink>
                <ButtonLink
                  href="https://github.com/seek-oss/braid-design-system"
                  variant="ghost"
                  icon={<IconSocialGitHub />}
                >
                  GitHub
                </ButtonLink>
              </Inline>
            </Stack>
          </Box>
        </Box>
      </Box>
      <Stack space="xxxlarge">
        <Stack space="medium">
          <Tiles space="medium" columns={[1, 2, 3]}>
            <LandingCard
              href="/foundations"
              label="Foundations"
              description="Core concepts like layout, tones and iconography."
              illustration={<FoundationsIllustration />}
              illustrationTheme="foundations"
            />
            <LandingCard
              href="/components"
              label="Components"
              description="The full suite of React components available in Braid."
              illustration={<ComponentsIllustration />}
              illustrationTheme="components"
            />
            <LandingCard
              href="/patterns"
              label="Patterns"
              description="Reusable patterns composing components into common experiences."
              illustration={<ComponentsIllustration />}
              illustrationTheme="patterns"
            />
          </Tiles>
          <Tiles space="medium" columns={[1, 2]}>
            <LandingCard
              href="/templates"
              label="Templates"
              description="Page-level starting points for building new screens."
            />
            <LandingCard
              href="/css"
              label="Styles"
              description="Low-level CSS utilities and styling primitives."
            />
          </Tiles>
        </Stack>

        <Bleed horizontal="xlarge">
          <Box className={styles.gettingStartedCard}>
            <Stack space="medium">
              <Heading level="2">New to Braid? </Heading>
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
      </Stack>
    </Stack>
  );
};
