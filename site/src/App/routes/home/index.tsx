import {
  Text,
  TextLink,
  Stack,
  Heading,
  Divider,
  Card,
  Tiles,
  ButtonLink,
  Inline,
  IconNewWindow,
  IconSocialGitHub,
} from 'braid-design-system';
// TODO: COLORMODE RELEASE
// Use public import
import { Box } from 'braid-src/lib/components/Box/Box';

import { useConfig } from '../../ConfigContext';
import { navSections } from '../../navigationSections';

import * as styles from './home.css';

const SectionCard = ({
  href,
  label,
  description,
}: {
  href: string;
  label: string;
  description: string;
}) => (
  <Card>
    <Stack space="small">
      <Heading level="4">
        <TextLink href={href}>{label}</TextLink>
      </Heading>
      <Text tone="secondary">{description}</Text>
    </Stack>
  </Card>
);

export const HomePage = () => {
  const { playroomUrl } = useConfig();
  return (
    <>
      <Stack space="xlarge">
        <Box
          className={styles.hero}
          background={{ lightMode: 'customLight', darkMode: 'customDark' }}
        >
          <Box className={styles.contentColumn}>
            <Box style={{ maxWidth: '50%' }}>
              <Stack space="large">
                <Text size="small">
                  <TextLink href="/releases">Releases</TextLink>
                </Text>
                <Heading level="1">
                  Welcome to Braid, the themeable design system for the{' '}
                  <TextLink href="https://au.seek.com/about">
                    SEEK Group.
                  </TextLink>
                </Heading>
                <Inline space="small">
                  <ButtonLink href="/gallery" variant="ghost">
                    Gallery
                  </ButtonLink>
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

        <Text>
          👋 Welcome to Braid, the themeable design system for the{' '}
          <TextLink href="https://au.seek.com/about/">SEEK Group.</TextLink>
        </Text>
        <Text>
          Braid aims to make cross-brand UI development as fast as possible
          while maintaining a high level of quality and accessibility. In order
          to achieve this, Braid provides as a set of{' '}
          <TextLink href="https://reactjs.org/">React</TextLink> components and
          CSS variable-based styling themes using{' '}
          <TextLink href="https://vanilla-extract.style/">
            vanilla-extract
          </TextLink>
          .
        </Text>

        <Divider />

        <Heading level="3">Getting started</Heading>
        <Text>
          New to Braid? Follow the{' '}
          <TextLink href="/getting-started/job-summary">
            Job Summary tutorial
          </TextLink>{' '}
          to build a real component from scratch and get a feel for how Braid
          pieces fit together.
        </Text>
        <Text>
          From there, we recommend reading the{' '}
          <TextLink href="/guides/design-workflow">design workflow</TextLink>{' '}
          and{' '}
          <TextLink href="/guides/development-workflow">
            development workflow
          </TextLink>{' '}
          guides, followed by the{' '}
          <TextLink href="/foundations/layout">layout</TextLink> and{' '}
          <TextLink href="/foundations/tones">tones</TextLink> foundations. When
          you&rsquo;re ready to experiment, jump into{' '}
          <TextLink href={playroomUrl}>Playroom</TextLink> to try out components
          without a development environment.
        </Text>

        <Divider />

        <Heading level="3">Explore Braid</Heading>
        <Tiles space="medium" columns={{ mobile: 1, tablet: 2 }}>
          {navSections.map((section) => (
            <SectionCard
              key={section.id}
              href={section.href}
              label={section.label}
              description={section.description}
            />
          ))}
        </Tiles>

        <Divider />

        <Heading level="3">What makes Braid different</Heading>
        <Text>
          As much as possible, we want Braid code to make sense to
          non-developers. We&rsquo;re aggressively focused on the simplicity and
          composability of its API.
        </Text>
        <Text>
          Along with our work on{' '}
          <TextLink href="https://github.com/seek-oss/playroom">
            Playroom
          </TextLink>
          , our goal is to empower designers and developers to iterate together
          in the same medium using the same components, reducing the need for
          high fidelity mock ups before development starts. We want to allow you
          to spend less time polishing mock ups and more time polishing the
          product. For more information about our philosophy, check out our{' '}
          <TextLink href="/guides/design-workflow">
            design workflow guide
          </TextLink>
          .
        </Text>

        <Divider />

        <Heading level="3">Support</Heading>
        <Text>
          If you work at SEEK, we have a couple of internal Slack channels
          dedicated to support. For design related questions, head to
          #braid-design-support. For more technical questions, direct them to
          #braid-support. We try to respond to everyone as quickly as we can,
          and we&rsquo;re always happy to help.
        </Text>
      </Stack>
    </>
  );
};
