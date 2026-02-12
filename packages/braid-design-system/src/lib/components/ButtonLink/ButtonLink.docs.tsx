import source from '@braid-design-system/source.macro';
import type { ComponentDocs } from 'site/types';

import { ButtonLink, Strong, Text, Inline, Stack, List, Heading } from '../';
import { TextLink } from '../TextLink/TextLink';

const docs: ComponentDocs = {
  category: 'Content',
  Example: () =>
    source(
      <Inline space="small" collapseBelow="desktop">
        <ButtonLink href="#" variant="solid">
          Solid
        </ButtonLink>
        <ButtonLink href="#" variant="ghost">
          Ghost
        </ButtonLink>
        <ButtonLink href="#" variant="soft">
          Soft
        </ButtonLink>
        <ButtonLink href="#" variant="transparent">
          Transparent
        </ButtonLink>
      </Inline>,
    ),
  accessibility: (
    <Text>
      Even though it looks like a{' '}
      <TextLink href="/components/Button">Button</TextLink>, this is actually a
      semantic link.
    </Text>
  ),
  alternatives: [
    {
      name: 'Button',
      description: 'For a semantic button.',
    },
    {
      name: 'ButtonIcon',
      description: 'For buttons containing only an icon.',
    },
    {
      name: 'TextLinkButton',
      description: 'For a semantic button that looks like a TextLink.',
    },
  ],
  docSections: {
    appearance: [
      {
        label: 'Choosing a button style',
        description: (
          <>
            <Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
              unde tempora, nesciunt totam eligendi animi est qui modi,
              explicabo labore ipsum rem iusto deserunt aliquid? Debitis
              repellendus quasi corporis magni?
            </Text>
            <Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
              unde tempora, nesciunt totam eligendi animi est qui modi,
              explicabo labore ipsum rem iusto deserunt aliquid? Debitis
              repellendus quasi corporis magni?
            </Text>
          </>
        ),
      },
      {
        label: 'Tones',
        description: (
          <Stack space="large">
            <Heading level="4">brandAccent</Heading>
            <Text>
              For hero actions that want to leverage the brand colour, you can
              set the button&rsquo;s <Strong>tone</Strong> to{' '}
              <Strong>brandAccent</Strong>. This is our most visibly strong tone
              and should be used sparingly.
            </Text>
            <Text>
              Use brandAccent to draw attention to our products most important
              actions, such as:
            </Text>
            <List space="medium">
              <Text>starting a key flow like apply or job posting</Text>
              <Text>submitting a form or payment</Text>
              <Text>
                submitting a primary search query (such as a new job or
                candidate search).
              </Text>
            </List>
            <Text>
              Avoid using multiple brandAccent buttons on the same page.
            </Text>
          </Stack>
        ),
      },
    ],
    states: [
      {
        description: (
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            doloribus illo delectus debitis facere non cum illum earum ab aut,
            repellat reprehenderit iusto in nemo minus? Corrupti voluptate
            officiis beatae.
          </Text>
        ),
      },
      {
        label: 'States 1',
        description: (
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            doloribus illo delectus debitis facere non cum illum earum ab aut,
            repellat reprehenderit iusto in nemo minus? Corrupti voluptate
            officiis beatae.
          </Text>
        ),
      },
      {
        label: 'States 2',
        description: (
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            doloribus illo delectus debitis facere non cum illum earum ab aut,
            repellat reprehenderit iusto in nemo minus? Corrupti voluptate
            officiis beatae.
          </Text>
        ),
      },
      {
        label: 'States 3',
        description: (
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            doloribus illo delectus debitis facere non cum illum earum ab aut,
            repellat reprehenderit iusto in nemo minus? Corrupti voluptate
            officiis beatae.
          </Text>
        ),
      },
      {
        label: 'States 4',
        description: (
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            doloribus illo delectus debitis facere non cum illum earum ab aut,
            repellat reprehenderit iusto in nemo minus? Corrupti voluptate
            officiis beatae.
          </Text>
        ),
      },
      {
        label: 'States 5',
        description: (
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            doloribus illo delectus debitis facere non cum illum earum ab aut,
            repellat reprehenderit iusto in nemo minus? Corrupti voluptate
            officiis beatae.
          </Text>
        ),
      },
    ],
  },
  additional: [
    {
      label: 'Custom link rendering',
      description: (
        <Text>
          This component renders a native <Strong>a</Strong> element by default,
          but this can be customised via the <Strong>linkComponent</Strong> prop
          on <TextLink href="/components/BraidProvider">BraidProvider</TextLink>
          .
        </Text>
      ),
    },
  ],
};

export default docs;
