import React from 'react';
import { Heading, Text, TextLink, Strong } from '../../../../lib/components';
import { TextStack } from '../TextStack/TextStack';
import { useConfig } from '../ConfigContext';
import { Page } from '../../types.d';

const page: Page = {
  title: 'Workflow',
  Component: () => {
    const { playroomUrl } = useConfig();

    return (
      <TextStack>
        <Heading level="2">Workflow</Heading>
        <Text tone="secondary">
          This guide is presented as a series of questions that a consumer might
          reasonably ask as they make their way through a typical product design
          and development workflow.
        </Text>
        <Heading level="3">How do I design with Braid?</Heading>
        <Text>
          Early on in your design process, you're likely to reach for something
          relatively low fidelity like Sketch, Figma, Axure... even pencil and
          paper. Exploring concepts with minimal overhead is an important first
          step in the design process.
        </Text>
        <Text>
          But there's are tradeoff here. The longer your design process spends
          away from code, the higher the risk that you'll create something
          that's non-standard and/or difficult to implement. Design systems like
          Braid are specially placed to deal with this problem by enabling you
          to design directly in code rather than constantly paying the cost of
          translating from one medium to another.
        </Text>
        <Text>
          As part of the Braid site, we offer a{' '}
          <TextLink href={playroomUrl}>Playroom</TextLink> tool for rapidly
          prototyping with Braid directly. Obviously, there's a slight learning
          curve to this, but it's well worth the investment if you're looking to
          streamline the communication between design and development and ensure
          that your designs are as feasible as possible.
        </Text>
        <Text>
          One of the primary goals of Playroom is to help surface the disconnect
          between concept design work and the design system. If something is
          missing in Braid, that's fine, but this should be highlighted as early
          as possible.
        </Text>
        <Heading level="3">Am I supposed to write code now?</Heading>
        <Text>
          Not necessarily. You might prefer to pair up with a developer to
          iterate on your designs together. It's entirely up to you. However,
          Braid and Playroom are specifically designed to be approachable for
          non-developers, even if they're slightly more intimidating than most
          design tools at first glance. That said,
        </Text>
        <Text>
          This might sound like a massive change, but we're hoping that it's not
          as big of a jump as you might think. Braid components are designed to
          let you create UI at a high level using design-centric terms (e.g.
          Text, Card, Columns) rather than low level HTML and CSS constructs.
          The typical concern with code is that it will slow you down, but we're
          actually hoping that this will actually let you design faster!
        </Text>
        <Heading level="3">Won't this slow us down?</Heading>
        <Text>
          If working in Playroom is too slow, that's a sign that our design
          system is incomplete, so it's important that we have these discussions
          early during the design process where we have an opportunity to fix
          it.
        </Text>
        <Text>
          If this is your first time using Playroom, we recommend reaching out
          in our #braid-design-support Slack channel. We'll be more than happy
          to work with you to make sure that you're comfortable working in this
          environment.
        </Text>
        <Text>
          Another option is to reach out to your local front-end developer who
          may already be familiar with Playroom.
        </Text>
        <Heading level="3">What if my designs look different to Braid?</Heading>
        <Text>
          Keep in mind that a design system's job is to standardise the look and
          feel of your product, not to match concept designs pixel-for-pixel.
        </Text>
        <Text>
          If you're looking to minimise issues during the development process,
          the ideal approach is to iterate on your design in Playroom, making
          full use of Braid's existing components rather than accidentally
          inventing custom solutions. Working with a design system effectively
          is all about making tradeoffs. You should be open to changing minor
          details that aren't critical to the success of the end product. You
          might end up using fewer borders, different colours, different spacing
          might be different. The goal is to solve the end user's problem, not
          to perfectly match an existing concept design.
        </Text>
        <Text>
          However, it's natural that most designs will feature some degree of
          customisation that is impossible within the current system. Don't feel
          like every single component needs to exist in the design system.
        </Text>
        <Text>
          That said, it's possible that you're using a pattern that should be in
          Braid but currently isn't. Let us know in #braid-design-support and
          we'll give you personalised advice on how best to navigate this.
        </Text>
        <Heading level="3">What if I need a new component right away?</Heading>
        <Text>
          <Strong>
            Generally speaking, you should never be blocked waiting for Braid.
          </Strong>{' '}
          Developers are perfectly capable of writing new components and custom
          styling within their projects, and they should always err on the side
          of delivery. When this happens, it's a good idea to let us know in
          #braid-design-support so that we can keep an eye on the current gaps
          in our system and work towards long term solutions, but this shouldn't
          come at the expense of delivering real value to users.
        </Text>
        <Heading level="3">How do I know which </Heading>
      </TextStack>
    );
  },
};

export default page;
