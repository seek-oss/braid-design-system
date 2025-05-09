import { LinkableHeading } from '@braid-design-system/docs-ui';
import {
  Heading,
  Text,
  TextLink,
  Strong,
  Divider,
} from 'braid-src/lib/components';

import type { Page } from '../../../types';
import { PageTitle } from '../../Seo/PageTitle';
import { TextStack } from '../../TextStack/TextStack';

const Contribution = () => (
  <TextStack>
    <Heading component="h1" level="2">
      <PageTitle title="Contribution" />
      Contribution
    </Heading>
    <LinkableHeading level="3">Want to add something to Braid?</LinkableHeading>
    <Text>
      <Strong>We operate on a pull-based model.</Strong> Rather than trying to
      “add something” to Braid, let us know that you think something is missing
      and we’ll do our best to provide guidance.
    </Text>
    <Text>
      We’re a tiny team with a lot of consumers. To avoid being a bottleneck, we
      operate on the principle that teams should avoid waiting for us as much as
      possible.
    </Text>
    <Text>
      Adding something to Braid takes time. We have to think about every use
      case. Multiple brands. Mobile, tablet, desktop. Variable content.
      Different languages. Server rendering. Progressive enhancement.
      Accessibility. API design and documentation. Hard-coding for a single use
      case is much easier than generalising across all use cases.
    </Text>
    <Text>
      If you think something is missing from Braid,{' '}
      <TextLink href="https://seekchat.slack.com/channels/braid-design-support">
        let us know
      </TextLink>{' '}
      so that we can offer support and keep an eye on emerging trends, but your
      team should still build it locally in the meantime. Shipping value to
      users is the ultimate priority.
    </Text>
    <Divider />
    <LinkableHeading level="3">Fixing a bug?</LinkableHeading>
    <Text>
      <Strong>
        Feel free to open a pull request, but please take care to properly
        explain the issue.
      </Strong>{' '}
      We want to know what behaviour you were expecting, what went wrong and
      why, and how your solution works at a technical level.
    </Text>
    <Divider />
    <LinkableHeading level="3">Don’t work at SEEK?</LinkableHeading>
    <Text>
      <Strong>Please consider this project read-only.</Strong> We’re happy for
      you to follow along with our work, copy it, fork it, ask us questions on
      Twitter, etc. but we’re also wanting to minimise the overhead of managing
      contributions.
    </Text>
  </TextStack>
);

const page: Page = {
  title: 'Contribution',
  element: <Contribution />,
};

export default page;
