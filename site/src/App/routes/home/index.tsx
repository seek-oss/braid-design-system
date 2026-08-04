import {
  TextLink,
  Stack,
  Heading,
  ButtonLink,
  Inline,
  IconNewWindow,
  IconSocialGitHub,
} from 'braid-design-system';
import { Box } from 'braid-src/lib/components/Box/Box';

import { useConfig } from '../../ConfigContext';
import { DesignWorkflowIllustration } from '../../LandingCard/Illustrations/DesignWorkflowIllustration';
import { DevelopmentWorkflowIllustration } from '../../LandingCard/Illustrations/DevelopmentWorkflowIllustration';
import { TutorialIllustration } from '../../LandingCard/Illustrations/TutorialIllustration';
import { LandingSection } from '../../LandingCard/LandingSection';

import * as styles from './home.css';

const gettingStartedCards = [
  {
    href: '/getting-started/job-summary',
    label: 'Job Summary tutorial',
    description:
      'Build a real component from scratch and see how Braid pieces fit together.',
    illustration: <TutorialIllustration />,
  },
  {
    href: '/guides/design-workflow',
    label: 'Design workflow',
    description:
      'How designers use Braid and Playroom to iterate in the same medium as engineers.',
    illustration: <DesignWorkflowIllustration />,
  },
  {
    href: '/guides/development-workflow',
    label: 'Development workflow',
    description:
      'Set up Braid in your app and start composing accessible UI quickly.',
    illustration: <DevelopmentWorkflowIllustration />,
  },
];

const exploreCards = [
  {
    href: '/foundations',
    label: 'Foundations',
    description: 'Core concepts like layout, tones and iconography.',
  },
  {
    href: '/components',
    label: 'Components',
    description: 'The full suite of React components available in Braid.',
  },
  {
    href: '/patterns',
    label: 'Patterns',
    description:
      'Reusable patterns composing components into common experiences.',
  },
  {
    href: '/templates',
    label: 'Templates',
    description: 'Page-level starting points for building new screens.',
  },
  {
    href: '/css',
    label: 'Styles',
    description: 'Low-level CSS utilities and styling primitives.',
  },
] as const;

export const HomePage = () => {
  const { playroomUrl } = useConfig();
  return (
    <Stack space="xxlarge">
      <Box className={styles.hero} background="customDark">
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
      <Stack space="xxlarge">
        <LandingSection
          heading="Getting started"
          introduction="New to Braid? Start with a hands-on tutorial, then dig into the design and development workflows."
          cards={gettingStartedCards}
        />

        <LandingSection
          heading="Explore Braid"
          introduction="Jump into the areas of the system you need most."
          cards={exploreCards}
        />
      </Stack>
    </Stack>
  );
};
