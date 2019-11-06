import React from 'react';
import { Heading, Text, TextLink, Divider } from '../../../../lib/components';
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
          workflow.
        </Text>

        <Divider />

        <Heading level="3">How do I get started with a new design?</Heading>
        <Text>
          All design tools are still at your disposal. Paper and pencil, Sketch,
          Axure, Keynote... whatever you like! Iterate quickly. Don’t feel like
          you need to get overly hung up on Braid early in the design process.
        </Text>
        <Text>
          However, regardless of your tool of choice, it's a good idea to
          familiarise yourself with everything we currently support in order to
          minimise the amount of work further along the design process. Using
          existing Braid patterns will always be faster than defining new ones.
        </Text>
        <Heading level="3">
          So how do I leverage Braid in my design process?
        </Heading>
        <Text>
          The best way to make use of Braid is for designers and developers to
          work closer together, and much earlier in the process than we
          typically have in the past. Braid's primary goal is to enable you to
          design directly in the final medium, rather than constantly (and
          expensively!) translating from one medium to another.
        </Text>
        <Text>
          To help empower this workflow, we provide{' '}
          <TextLink href={playroomUrl}>Playroom</TextLink> as a tool for rapidly
          prototyping with Braid. In this environment, you have access to the
          entire suite of Braid components, along with an instant preview across
          a variety of screen sizes and brands.
        </Text>
        <Text>
          Traditional design tools are still important, but they should be
          viewed as a means of quickly generating concept designs rather than
          high fidelity specifications.
        </Text>
        <Heading level="3">Is there a library for Sketch/Figma/etc.?</Heading>
        <Text>
          We do not provide a static design library. Our objective with Braid is
          to optimise the design workflow around the layer that our users
          actually interact with rather than improving the quality of our mock
          ups.
        </Text>
        <Heading level="3">
          What advantages does Braid have over traditional design tools?
        </Heading>
        <Text>
          Braid allows real time prototyping with interactive components which
          ensure designers and developers are aligned into a more streamlined
          workflow for quickly creating consistently great products.
        </Text>
        <Text>
          Once you're happy with a Braid prototype, it shouldn't require much
          work to move it into your application. This is in stark contrast to
          the usual process of translating from Sketch/Figma/etc. into code
          which is often slow and error prone.
        </Text>
        <Text>
          It also has the added benefit of allowing you to see how layouts react
          across different screen resolutions and brands while you iterate,
          which static design tools are simply unable to do.
        </Text>
        <Text>
          If something already exists in Braid, it's usually much more efficient
          to prototype with the components directly. It also ensures that you’ll
          always get future improvements down the line for free as updated
          versions of Braid are released.
        </Text>
        <Heading level="3">
          When should I use high fidelity design tools?
        </Heading>
        <Text>
          If you’ve recognised a gap in our system, feel free to use traditional
          high fidelity design tools to define that new experience.
        </Text>
        <Text>
          Always try to use lower level design elements such as colour, spacing,
          typography and iconography. If you need help designing new patterns,
          reach out in #braid-design-support to see if we can offer any
          assistance. If we think it’s something that other teams might need, it
          may even end up in the design system itself at some point in the
          future.
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
          learning curve as low as possible and to minimise the amount of
          knowledge required to be productive.
        </Text>
        <Text>
          This might sound like a massive change, but we're hoping that it's not
          as big of a jump as you might think. Braid components allow you to
          work with design-centric terms like "Text", "Card" and "Columns"
          rather than the low-level technical details of HTML and CSS.
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
          Of course, this means that we may be slower in certain scenarios in
          the short term, but it's an opportunity fot us to invest in design
          standards that will continue to speed us up in the long term.
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
          in Playroom to try alternative approaches.
        </Text>
        <Text>
          You should be open to changing minor details that aren't critical to
          the success of the product. The goal is to solve the end user's
          problem, not to perfectly match an existing concept design.
        </Text>
        <Text>
          That said, it's natural that most designs will feature some degree of
          customisation that isn't officially supported within the existing
          system. You may even be using a pattern that is unique to your
          product. Don't feel like every single component needs to exist in
          Braid.
        </Text>
        <Text>
          It's also possible that you're using a pattern that should ideally be
          in Braid but hasn't been built yet. In this case, it's best to have a
          quick chat in #braid-design-support so we can give you personalised
          advice on how best to move forwards.
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

        <Divider />

        <Heading level="3">Have a question that wasn't answered?</Heading>
        <Text>
          As always, if you have any questions or need further assistance,
          please reach out to us in the{' '}
          <TextLink href="https://seekchat.slack.com/channels/braid-design-support">
            #braid-design-support Slack channel.
          </TextLink>
        </Text>
      </TextStack>
    );
  },
};

export default page;
