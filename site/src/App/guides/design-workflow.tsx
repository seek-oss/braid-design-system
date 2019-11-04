import React from 'react';
import {
  Heading,
  Text,
  TextLink,
  BulletList,
  Bullet,
} from '../../../../lib/components';
import { TextStack } from '../TextStack/TextStack';
import { useConfig } from '../ConfigContext';
import { Page } from '../../types';

const page: Page = {
  title: 'Design Workflow',
  Component: () => {
    const { playroomUrl } = useConfig();

    return (
      <TextStack>
        <Heading level="2">Design Workflow</Heading>
        <Text tone="secondary">
          This guide is presented as a series of questions that you might
          reasonably ask as you make your way through a typical product design
          and development workflow.
        </Text>
        <Heading level="3">How do I get started with a new design?</Heading>
        <Text>
          All design tools are still at your disposal. Paper and pencil, Sketch,
          Axure, Keynote... whatever you like! Iterate quickly. Don’t feel like
          you beed to get overly hung up on Braid early in the design process.
        </Text>
        <Heading level="3">
          How do I leverage Braid in my design process?
        </Heading>
        <Text>
          The primary goal of design systems like Braid is to enable you to
          design directly in the final medium, rather than constantly (and
          expensively!) translating from one medium to another.
        </Text>
        <Text>
          Traditional design tools are still important, but they should be
          viewed as a means of quickly generating concepts that feed into the
          code prototyping phase. We need to start thinking of code as part of
          the design process itself, not something we write once all design work
          is finished. Designers and developers should ideally work closer
          together, and much earlier in the process than we typically have in
          the past.
        </Text>
        <Text>
          To help empower this workflow, we provide{' '}
          <TextLink href={playroomUrl}>Playroom</TextLink> as a tool for rapidly
          prototyping with Braid directly. You have access to the entire suite
          of Braid components, along with an instant preview of what your
          interface will look like across a variety of screen sizes and brands.
          There's obviously a slight learning curve to this, but we think it's
          well worth the investment.
        </Text>
        <Text>
          By prototyping in code, you'll find yourself surfacing the gaps
          between your concept design work and the existing design system. If
          something is missing in Braid, the code prototyping phase should
          highlight this much earlier.
        </Text>
        <Heading level="3">Is there a Sketch library?</Heading>
        <Text>
          Braid has many features that are more powerful than what illustration
          tools like Sketch can support, including:
        </Text>
        <BulletList>
          <Bullet>Design tokens.</Bullet>
          <Bullet>Cross-brand theming.</Bullet>
          <Bullet>Responsive layouts.</Bullet>
          <Bullet>Standardised spacing and layout components.</Bullet>
          <Bullet>Contextual colour palettes.</Bullet>
          <Bullet>Standardised interactions.</Bullet>
          <Bullet>Dynamic content.</Bullet>
        </BulletList>
        <Text>
          Translating these to a static medium like Sketch would be an exercise
          in throwing away most of what makes Braid valuable.
        </Text>
        <Text>
          Rather than trying to improve the quality of our mock ups, we're
          instead aiming to optimise the design workflow around the layer that
          users actually interact with.
        </Text>
        <Heading level="3">Do I need to write code?</Heading>
        <Text>
          Not necessarily. You might prefer to pair up with a developer to
          iterate on your designs together. It's entirely up to you.
        </Text>
        <Text>
          However, Braid and Playroom are specifically designed to be
          approachable for non-developers. While they may seem more intimidating
          than most design tools at first glance, we've worked hard to keep the
          learning curve as low as possible and minimise the amount of knowledge
          required to be productive.
        </Text>
        <Text>
          This might sound like a massive change, but we're hoping that it's not
          as big of a jump as you might think. Braid components let you create
          UI at a high level using design-centric terms (e.g. Text, Card,
          Columns) rather than low level HTML and CSS constructs, which is
          essential in opening up the system to non-developers.
        </Text>
        <Heading level="3">Won't this slow us down?</Heading>
        <Text>The goal is to actually let you design faster!</Text>
        <Text>
          If working in Playroom is too slow, that's probably a sign that our
          design system is incomplete. It's important that we discuss these
          issues early during the design process where we have more opportunity
          to fix them.
        </Text>
        <Text>
          In cases like these, traditional design tools are still an appropriate
          way to fill the gaps, but you should let us know in our
          #braid-design-support Slack channel when this is required so we can
          better support your needs in the future.
        </Text>
        <Heading level="3">What if this is too much of a leap for me?</Heading>
        <Text>
          We recommend reaching out in our #braid-design-support Slack channel.
          We'll be more than happy to work with you to make sure that you're
          comfortable working in this environment.
        </Text>
        <Heading level="3">What if my designs look different to Braid?</Heading>
        <Text>
          A design system's job is to help standardise the look and feel of an
          entire product suite, not to match individual concept designs
          pixel-for-pixel. It's a good idea to start by iterating on your design
          in code to try alternative approaches.
        </Text>
        <Text>
          You should be open to changing minor details that aren't critical to
          the success of the product. You might end up using fewer borders,
          different colours, different spacing. The goal is to solve the end
          user's problem, not to perfectly match an existing concept design.
        </Text>
        <Text>
          That said, it's natural that most designs will feature some degree of
          customisation that isn't officially supported within the existing
          system. It's entirely possible that you're using a pattern that is
          truly unique to your product. Don't feel like every single component
          needs to exist in Braid.
        </Text>
        <Text>
          It's also possible that you're using a pattern that should be in Braid
          but currently isn't. Whether or not we adopt a new pattern, and how
          quickly we adopt it, depends heavily on a wide variety of factors, so
          having a quick chat is the best way to manage this. Reach out in
          #braid-design-support and we'll give you personalised advice on how
          best to move forwards.
        </Text>
        <Heading level="3">What if I need a new component right away?</Heading>
        <Text>
          Generally speaking, you should never be blocked waiting for Braid.
        </Text>
        <Text>
          Our job is to standardise existing patterns, not to hold back new
          ones. Developers are perfectly capable of writing new components and
          custom styling within their projects, and they should always err on
          the side of delivery.
        </Text>
        <Text>
          When you inevitably create new patterns, it's a good idea to let us
          know in #braid-design-support so that we can keep an eye on it and
          work towards long term solutions.
        </Text>
      </TextStack>
    );
  },
};

export default page;
