import React from 'react';
import {
  Heading,
  Text,
  TextLink,
  Divider,
  BulletList,
  Bullet,
} from '../../../../../lib/components';
import { TextStack } from '../../TextStack/TextStack';
import { useConfig } from '../../ConfigContext';
import { Page } from '../../../types';

const braidDesignSupportLink = (
  <TextLink href="https://seekchat.slack.com/channels/braid-design-support">
    #braid-design-support
  </TextLink>
);

const DesignWorkflow = () => {
  const { playroomUrl } = useConfig();
  const playroomLink = <TextLink href={playroomUrl}>Playroom</TextLink>;

  return (
    <TextStack>
      <Heading level="2">Design Workflow</Heading>
      <Text tone="secondary">
        This guide is presented as a series of questions that you might
        reasonably ask if you’re trying to leverage Braid during a typical
        product design workflow.
      </Text>

      <Divider />

      <Heading level="3">How do I get started with a new concept?</Heading>
      <Text>
        All design tools are still at your disposal. Paper and pencil, Sketch,
        Axure, Keynote... whatever you like! Iterate quickly. Don’t feel like
        you need to get overly hung up on Braid early in the design process.
      </Text>
      <Text>
        That said, regardless of your tool of choice, it’s a good idea to
        familiarise yourself with our current component suite before getting
        started. Using existing patterns will always be faster than defining new
        ones.
      </Text>

      <Heading level="3">Is there a library for Sketch/Figma/etc.?</Heading>
      <Text>
        No. Braid is a living component system that’s designed to run in
        production, as opposed to being a static design library.
      </Text>
      <Text>
        Our objective with Braid is not to improve the quality of our mock ups,
        but rather to optimise the design workflow around the layer that our
        users actually interact with.
      </Text>
      <Text>
        Don’t feel like you need to meticulously recreate existing components in
        your mock ups. One of the major advantages of a design system like Braid
        is that it allows you to operate much more quickly during earlier stages
        of the design process.
      </Text>
      <Text>
        Braid also provides many features that are simply not supported by
        traditional design tools, including:
      </Text>
      <BulletList>
        <Bullet>Cross-brand theming.</Bullet>
        <Bullet>Spacing and layout components.</Bullet>
        <Bullet>Responsive design.</Bullet>
        <Bullet>Context-based colour switching.</Bullet>
        <Bullet>Dynamic content.</Bullet>
        <Bullet>Accessibility.</Bullet>
        <Bullet>Standardised interactions.</Bullet>
      </BulletList>

      <Heading level="3">How do I leverage Braid in my design process?</Heading>
      <Text>
        The best way to make use of Braid is for designers and developers to
        work closer together, and much earlier in the process than we typically
        have in the past. Braid’s primary goal is to enable you to design
        directly in the final medium, rather than constantly (and expensively!)
        translating from one medium to another.
      </Text>
      <Text>
        To help empower this workflow, we’ve provided {playroomLink} as a tool
        for rapidly prototyping with Braid. In this environment, you have access
        to the entire suite of components, along with an instant preview across
        a variety of screen sizes and brands.
      </Text>

      <Heading level="3">What is {playroomLink}? Why should I use it?</Heading>
      <Text>
        {playroomLink} is a browser-based design tool that allows for real-time
        prototyping with interactive components, ensuring designers and
        developers are working together in the same medium, collaborating on the
        end product rather than handing off from one medium to another.
      </Text>
      <Text>
        If something already exists in Braid, it’s generally much more efficient
        to prototype with the components directly. As you iterate, you’ll be
        able to see how layouts react across different screen resolutions and
        brands, which is something that static design tools are simply unable to
        do.
      </Text>
      <Text>
        {playroomLink} deliberately rewards reuse of existing components.
        Creating something from scratch is harder than reaching for an existing
        pattern, and this is by design. While at first glance this might seem
        like an issue, this is actually an important step forwards in regards to
        design consistency, build quality, and speed of delivery.
      </Text>
      <Text>
        Because {playroomLink} runs in the browser, you can easily share your
        work with others by copying and pasting the URL. It’s also open source
        and publicly available, which means you don’t need an account to create,
        view or edit designs. If you have any questions about something you’re
        working on, drop a link in {braidDesignSupportLink} so we can help you
        out.
      </Text>
      <Text>
        Once you’re happy with a prototype in {playroomLink}, moving it into
        your application shouldn’t require much work at all since it’s built
        with the design system itself. This is in stark contrast to the
        traditional process of manually translating from Sketch/Figma/etc. which
        is typically slow and error prone.
      </Text>

      <Heading level="3">Do I need to write code?</Heading>
      <Text>
        Not necessarily. You might prefer to pair up with a developer to iterate
        on your designs together. It’s entirely up to you.
      </Text>
      <Text>
        That said, Braid and {playroomLink} are specifically designed to be
        approachable for non-developers. While they may seem more intimidating
        than most design tools at first glance, we’ve worked hard to keep the
        learning curve as low as possible and to minimise the amount of
        knowledge required to be productive.
      </Text>
      <Text>
        This might sound like a massive change, but we’re hoping that it’s not
        as big of a jump as you might think. Braid components allow you to work
        with high-level design-centric terms like{' '}
        <TextLink href="/components/Text">Text</TextLink>,{' '}
        <TextLink href="/components/Card">Card</TextLink> and{' '}
        <TextLink href="/components/Columns">Columns</TextLink>, rather than the
        low-level technical details of HTML and CSS.
      </Text>

      <Heading level="3">When should I use high fidelity design tools?</Heading>
      <Text>
        If you’ve recognised a gap in our system, feel free to use traditional
        high fidelity design tools to define that new experience. However, when
        doing so, you should be mindful not to inadvertently redesign existing
        patterns.
      </Text>
      <Text>
        Always try to leverage lower level design elements such as colour,
        spacing, typography and iconography. If you need help designing new
        patterns, reach out in {braidDesignSupportLink} to see if we can offer
        any assistance.
      </Text>

      <Heading level="3">Won’t this slow us down?</Heading>
      <Text>The goal is to actually let you design faster!</Text>
      <Text>
        If working in {playroomLink} is too slow, that’s probably a sign that
        either our design system is incomplete, or that we’re creating too many
        new patterns. It’s important that we discuss these issues early in the
        design process where we have more opportunity to fix them.
      </Text>
      <Text>
        Of course, this means that we may be slower in certain scenarios, but
        it’s an opportunity for us to invest in design standards that will
        continue to speed us up over the long term.
      </Text>

      <Heading level="3">What if I need some help?</Heading>
      <Text>
        We recommend reaching out in our {braidDesignSupportLink} Slack channel.
        We’ll be more than happy to work with you to make sure that you’re
        comfortable working in this environment.
      </Text>

      <Heading level="3">What if my designs look different to Braid?</Heading>
      <Text>
        A design system’s job is to help standardise the look and feel of an
        entire product suite, not to match individual concept designs
        pixel-for-pixel. It’s a good idea to start by iterating on your design
        in {playroomLink} to try alternative approaches.
      </Text>
      <Text>
        You should be open to changing minor details that aren’t critical to the
        success of the product. The goal is to solve the end user’s problem, not
        to perfectly match an existing concept design.
      </Text>
      <Text>
        However, it’s natural that most designs will feature some degree of
        customisation that isn’t officially supported within the existing
        system. You may even be using a pattern that is unique to your product.
        Don’t feel like every single component needs to exist in Braid.
      </Text>
      <Text>
        It’s also possible that you’re using a pattern that should ideally be in
        Braid but hasn’t been built yet. In this case, it’s best to have a quick
        chat in {braidDesignSupportLink} so we can give you personalised advice
        on how best to move forwards.
      </Text>

      <Heading level="3">How do I add a new component to Braid?</Heading>
      <Text>
        Read our{' '}
        <TextLink href="/guides/contribution">contribution guide</TextLink>.
      </Text>

      <Divider />

      <Heading level="3">Have a question that wasn’t answered?</Heading>
      <Text>Reach out to us in {braidDesignSupportLink}.</Text>
    </TextStack>
  );
};

const page: Page = {
  title: 'Design Workflow',
  component: DesignWorkflow,
};

export default page;
