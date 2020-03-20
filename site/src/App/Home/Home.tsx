import React from 'react';
import { Text, Stack, Heading, Divider } from '../../../../lib/components';
import { Link, ExternalLink } from '../Documentation/Link';
import { ConfigConsumer } from '../ConfigContext';

export const Home = () => (
  <ConfigConsumer>
    {config => (
      <Stack space="xlarge">
        <Stack space="small">
          <Heading level="2">Braid Design System</Heading>
        </Stack>
        <Text>
          👋 Welcome to Braid, the themeable design system for the{' '}
          <ExternalLink href="https://www.seek.com.au/about/">
            SEEK Group
          </ExternalLink>
          .
        </Text>
        <Text>
          Braid aims to make cross-brand UI development as fast as possible
          while maintaining a high level of quality and accessibility. In order
          to achieve this, Braid is implemented as a series of{' '}
          <ExternalLink href="https://reactjs.org/">React</ExternalLink>{' '}
          components and{' '}
          <ExternalLink href="https://seek-oss.github.io/treat/">
            treat
          </ExternalLink>{' '}
          themes.
        </Text>
        <Divider />
        <Heading level="3">What makes Braid different</Heading>
        <Text>
          As much as possible, we want Braid code to make sense to
          non-developers. We&rsquo;re aggressively focused on the simplicity and
          composability of its API.
        </Text>
        <Text>
          Along with our work on{' '}
          <ExternalLink href="https://github.com/seek-oss/playroom">
            Playroom
          </ExternalLink>
          , our goal is to empower designers and developers to iterate together
          in the same medium using the same components, reducing the need for
          high fidelity mock ups before development starts. We want to allow you
          to spend less time polishing mock ups and more time polishing the
          product. For more information about our philosophy, check out our{' '}
          <Link to="/guides/design-workflow">design workflow guide</Link>.
        </Text>
        <Divider />
        <Heading level="3">Getting started</Heading>
        <Text>
          First, we recommend reading the{' '}
          <Link to="/guides/design-workflow">design workflow</Link> and{' '}
          <Link to="/guides/development-workflow">development workflow</Link>{' '}
          guides. These capture our current views on how best to make use of
          Braid in your daily work.
        </Text>
        <Text>
          Next, you should read our{' '}
          <Link to="/foundations/layout">layout guide</Link>. This goes into
          detail about how we manage component composition and layout, which
          forms the backbone of our system.
        </Text>
        <Text>
          Then, read our <Link to="/foundations/tones">tones guide</Link> to get
          an understanding of the common set of tones (positive, critical, etc.)
          used throughout Braid.
        </Text>
        <Text>
          Finally, there&rsquo;s really no substitute for looking at all the
          available components, so just jump right in and start looking around.
          As you explore, you should familiarise yourself with our{' '}
          <ExternalLink href={config.playroomUrl}>Braid Playroom</ExternalLink>{' '}
          which allows you to try out the components without requiring a
          development environment.
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
    )}
  </ConfigConsumer>
);
