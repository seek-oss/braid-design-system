import type { ComponentProps } from 'react';
import { TextStack } from '../../TextStack/TextStack';

import { Heading, Stack, Text, TextLink } from 'braid-src/lib/components';
import Code from '../../Code/Code';
import { LinkableHeading } from '../../LinkableHeading/LinkableHeading';
import { PageTitle } from '../../Seo/PageTitle';

export const ExampleTitle = ({ title }: { title: string }) => (
  <Stack space="medium">
    <Heading level="3" weight="weak">
      <PageTitle title={`${title} Example`} />
      Examples /
    </Heading>
    <Heading component="h1" level="2">
      {title}
    </Heading>
  </Stack>
);

export const ExampleIntro = () => (
  <TextStack>
    <Heading level="3">How do I build this example for myself?</Heading>

    <Text>
      Designs like this are rarely built top-to-bottom in a single pass.
      Instead, they typically start very simple, with further details and
      refinements added over time.
    </Text>
    <Text>
      To give you a sense of what this looks like, the following tutorial will
      guide you through the design process that you might go through when using{' '}
      <TextLink href="/playroom">Playroom</TextLink>.
    </Text>

    <Text>
      At any stage you can click the &ldquo;Open in Playroom&rdquo; button under
      the examples to view the design across themes and viewports.
    </Text>
  </TextStack>
);

interface StepProps {
  heading?: string;
  detail: ComponentProps<typeof Stack>['children'];
  children: ComponentProps<typeof Code>['children'];
  conclusion?: ComponentProps<typeof Stack>['children'];
}
export const ExampleStep = ({
  heading,
  detail,
  children,
  conclusion,
}: StepProps) => (
  <Stack space="xlarge">
    {heading ? <LinkableHeading level="3">{heading}</LinkableHeading> : null}
    {detail}
    <Code>{children}</Code>
    {conclusion}
  </Stack>
);
