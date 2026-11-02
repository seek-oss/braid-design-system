import source from '@braid-design-system/source.macro';
import { useEffect, useState } from 'react';
import Code from 'site/App/Code/Code';
import type { ComponentDocs } from 'site/types';

import {
  Badge,
  Box,
  Button,
  ButtonIcon,
  Card,
  Column,
  Columns,
  Divider,
  Heading,
  Inline,
  List,
  Rating,
  Skeleton,
  Stack,
  Strong,
  Text,
  TextLink,
} from '../';
import { Placeholder } from '../../playroom/components';
import {
  IconBookmark,
  IconLanguage,
  IconLocation,
  IconMoney,
  IconTag,
} from '../icons';
import { dataAttributeDocs } from '../private/dataAttribute.docs';

import { CoverageRecipe, coveragePlayroom } from './Skeleton.coverage';

import { animationDelayValueInMs } from './Skeleton.css';

const jobCardLoading = source(
  <Stack space="large">
    <Columns space="small">
      <Column>
        <Stack space="small">
          <Skeleton type="badge" />
          <Skeleton type="heading" level="4" width="small" />
          <Inline space="small" alignY="center">
            <Skeleton type="text" width="small" />
            <Skeleton type="text" width="xsmall" />
          </Inline>
        </Stack>
      </Column>
      <Column width="content">
        <Box
          width="touchable"
          height="touchable"
          borderRadius="standard"
          overflow="hidden"
        >
          <Skeleton type="rectangle" height="full" />
        </Box>
      </Column>
    </Columns>
    <Stack space="small">
      <Skeleton type="text" icon width="small" />
      <Skeleton type="text" icon width="medium" />
      <Skeleton type="text" icon width="xsmall" />
    </Stack>
    <Skeleton type="text" lines={2} />
    <Columns space="small" alignY="center">
      <Column>
        <Skeleton type="text" size="small" width="xxsmall" />
      </Column>
      <Column width="content">
        <ButtonIcon
          variant="transparent"
          size="large"
          icon={<IconBookmark />}
          label="Save job"
        />
      </Column>
    </Columns>
  </Stack>,
);

const jobCardLoaded = source(
  <Stack space="large">
    <Columns space="small">
      <Column>
        <Stack space="small">
          <Badge tone="positive">New</Badge>
          <Heading level="4">Product Designer</Heading>
          <Inline space="small" alignY="center">
            <Text>Braid Design Pty Ltd</Text>
            <Rating rating={4.5} />
          </Inline>
        </Stack>
      </Column>
      <Column width="content">
        <Box width="touchable" height="touchable" overflow="hidden">
          <Placeholder height="100%" width="100%" label="Logo" />
        </Box>
      </Column>
    </Columns>
    <Stack space="small">
      <Text tone="secondary" icon={<IconLocation />}>
        Melbourne
      </Text>
      <Text tone="secondary" icon={<IconTag />}>
        Information Technology
      </Text>
      <Text tone="secondary" icon={<IconMoney />}>
        150k+
      </Text>
    </Stack>
    <Text>
      Long description of card details providing more information about the
      role, the team, and what the day to day looks like.
    </Text>
    <Columns space="small" alignY="center">
      <Column>
        <Text tone="secondary" size="small">
          2d ago
        </Text>
      </Column>
      <Column width="content">
        <ButtonIcon
          variant="transparent"
          size="large"
          icon={<IconBookmark />}
          label="Save job"
        />
      </Column>
    </Columns>
  </Stack>,
);

const JobCardRecipe = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setIsLoading((loading) => !loading);
    }, 2500);

    return () => clearInterval(id);
  }, []);

  return (
    <Box aria-busy={isLoading}>
      <Card>{isLoading ? jobCardLoading.value : jobCardLoaded.value}</Card>
    </Box>
  );
};

const docs: ComponentDocs = {
  category: 'Content',
  description: (
    <Text>
      A placeholder that holds space while structured content is loading, so the
      layout does not shift when it arrives.
    </Text>
  ),
  Example: () => source(<Skeleton />),
  accessibility: (
    <Stack space="large">
      <Text>
        Skeletons are decorative by default, so they are hidden from assistive
        technologies. Screen readers should hear that content is loading{' '}
        <Strong>once</Strong>, not once per bar.
      </Text>
      <Text>
        For a card or section with several placeholders, put{' '}
        <Strong>aria-busy</Strong> on the wrapper, then swap in the content:
      </Text>
      <Code playroom={false}>
        {
          source(
            <Box aria-busy="true">
              <Stack space="medium">
                <Skeleton type="heading" level="3" />
                <Skeleton type="text" lines={2} />
              </Stack>
            </Box>,
          ).code
        }
      </Code>
      <Text>
        If a single Skeleton is the whole loading state, give it an{' '}
        <Strong>aria-label</Strong> instead. That one placeholder is announced
        as a polite status:
      </Text>
      <Code playroom={false}>
        {source(<Skeleton type="text" aria-label="Loading" />).code}
      </Code>
      <Text tone="promote" id="translations">
        <IconLanguage title="Translation hint" titleId="translations" /> The{' '}
        announced message can be customised by providing the{' '}
        <Strong>aria-label</Strong> prop.
      </Text>
    </Stack>
  ),
  alternatives: [
    {
      name: 'Loader',
      description:
        'For a compact spinner on small, simple, or short in-place waits.',
    },
    {
      name: 'Button',
      description:
        'For an in-place spinner on a control that is already on screen.',
    },
    {
      name: 'Avatar',
      description: 'For a loading disc.',
    },
  ],
  additional: [
    {
      label: 'Types',
      description: (
        <>
          <Text>
            A Skeleton can select an appearance via the <Strong>type</Strong>{' '}
            prop, matching the height of the content that will load:{' '}
            <Strong>text</Strong>, <Strong>heading</Strong>,{' '}
            <Strong>button</Strong>, <Strong>rectangle</Strong> and{' '}
            <Strong>badge</Strong>.
          </Text>
          <Text>
            Use the same <Strong>size</Strong> or <Strong>level</Strong> as the
            component it replaces. For an identity disc, use{' '}
            <TextLink href="/components/Avatar">Avatar</TextLink> with{' '}
            <Strong>loading</Strong> instead.
          </Text>
        </>
      ),
      Example: () =>
        source(
          <Stack space="large">
            <Stack space="small">
              <Text tone="secondary" size="small">
                text
              </Text>
              <Skeleton type="text" />
            </Stack>
            <Stack space="small">
              <Text tone="secondary" size="small">
                heading
              </Text>
              <Skeleton type="heading" level="2" />
            </Stack>
            <Stack space="small">
              <Text tone="secondary" size="small">
                button
              </Text>
              <Skeleton type="button" width="small" />
              <Skeleton type="button" size="small" width="small" />
            </Stack>
            <Stack space="small">
              <Text tone="secondary" size="small">
                rectangle
              </Text>
              <Skeleton type="rectangle" />
            </Stack>
            <Stack space="small">
              <Text tone="secondary" size="small">
                badge
              </Text>
              <Skeleton type="badge" />
            </Stack>
          </Stack>,
        ),
    },
    {
      label: 'Text size',
      description: (
        <Text>
          Text placeholders are sized to the cap-height of the corresponding{' '}
          <TextLink href="/components/Text">Text</TextLink>, including baseline
          trim. This is particularly useful when swapping in a line of the same{' '}
          <Strong>size</Strong>. Set <Strong>baseline</Strong> to{' '}
          <Strong>false</Strong> if you need an untrimmed line box.
        </Text>
      ),
      Example: () =>
        source(
          <Stack space="medium">
            <Inline space="small" alignY="center">
              <Box style={{ width: 80 }}>
                <Text size="large">large</Text>
              </Box>
              <Skeleton type="text" size="large" width="medium" />
            </Inline>
            <Inline space="small" alignY="center">
              <Box style={{ width: 80 }}>
                <Text size="standard">standard</Text>
              </Box>
              <Skeleton type="text" size="standard" width="medium" />
            </Inline>
            <Inline space="small" alignY="center">
              <Box style={{ width: 80 }}>
                <Text size="small">small</Text>
              </Box>
              <Skeleton type="text" size="small" width="medium" />
            </Inline>
            <Inline space="small" alignY="center">
              <Box style={{ width: 80 }}>
                <Text size="xsmall">xsmall</Text>
              </Box>
              <Skeleton type="text" size="xsmall" width="medium" />
            </Inline>
          </Stack>,
        ),
    },
    {
      label: 'Text with an icon',
      description: (
        <Text>
          The <Strong>icon</Strong> prop reserves the same slot as{' '}
          <TextLink href="/components/Text">Text</TextLink> — a rounded square
          by default, or a disc when set to <Strong>circle</Strong>. Icons use
          the same size as Text icons, so they sit slightly outside the line
          box.
        </Text>
      ),
      Example: () =>
        source(
          <Stack space="medium">
            <Stack space="xsmall">
              <Text tone="secondary" size="small">
                square
              </Text>
              <Inline space="small" alignY="center">
                <Box style={{ width: 120 }}>
                  <Text icon={<IconLocation />}>Melbourne</Text>
                </Box>
                <Skeleton type="text" icon width="medium" />
              </Inline>
            </Stack>
            <Stack space="xsmall">
              <Text tone="secondary" size="small">
                circle
              </Text>
              <Skeleton type="text" icon="circle" width="medium" />
            </Stack>
          </Stack>,
        ),
    },
    {
      label: 'Heading level',
      description: (
        <Text>
          Heading placeholders are sized to the matching{' '}
          <TextLink href="/components/Heading">Heading</TextLink>. Provide the
          same <Strong>level</Strong> as the heading that will replace it.
        </Text>
      ),
      Example: () =>
        source(
          <Stack space="medium">
            <Skeleton type="heading" level="1" width="large" />
            <Skeleton type="heading" level="2" width="large" />
            <Skeleton type="heading" level="3" width="large" />
            <Skeleton type="heading" level="4" width="large" />
          </Stack>,
        ),
    },
    {
      label: 'Button size',
      description: (
        <>
          <Text>
            Button placeholders match{' '}
            <TextLink href="/components/Button">Button</TextLink>:{' '}
            <Strong>standard</Strong> (the default, at touchable height) or{' '}
            <Strong>small</Strong>.
          </Text>
          <Text>
            Use a skeleton while the control is not yet on screen. Once the
            button is visible, its own <Strong>loading</Strong> prop shows an
            in-place spinner.
          </Text>
        </>
      ),
      Example: () =>
        source(
          <Stack space="medium">
            <Stack space="xsmall">
              <Text tone="secondary" size="small">
                standard
              </Text>
              <Skeleton type="button" width="small" />
            </Stack>
            <Stack space="xsmall">
              <Text tone="secondary" size="small">
                small
              </Text>
              <Skeleton type="button" size="small" width="small" />
            </Stack>
          </Stack>,
        ),
    },
    {
      label: 'Width',
      description: (
        <Text>
          Placeholders can be sized via the <Strong>width</Strong> prop. Named
          sizes are <Strong>full</Strong> (100%), <Strong>large</Strong> (75%),{' '}
          <Strong>medium</Strong> (50%), <Strong>small</Strong> (25%),{' '}
          <Strong>xsmall</Strong> (12.5%) and <Strong>xxsmall</Strong> (6.25%),
          or a number for a custom percentage of the parent.
        </Text>
      ),
      Example: () =>
        source(
          <Stack space="medium">
            <Stack space="xsmall">
              <Text tone="secondary" size="small">
                full
              </Text>
              <Skeleton type="text" width="full" />
            </Stack>
            <Stack space="xsmall">
              <Text tone="secondary" size="small">
                large
              </Text>
              <Skeleton type="text" width="large" />
            </Stack>
            <Stack space="xsmall">
              <Text tone="secondary" size="small">
                medium
              </Text>
              <Skeleton type="text" width="medium" />
            </Stack>
            <Stack space="xsmall">
              <Text tone="secondary" size="small">
                small
              </Text>
              <Skeleton type="text" width="small" />
            </Stack>
            <Stack space="xsmall">
              <Text tone="secondary" size="small">
                xsmall
              </Text>
              <Skeleton type="text" width="xsmall" />
            </Stack>
            <Stack space="xsmall">
              <Text tone="secondary" size="small">
                xxsmall
              </Text>
              <Skeleton type="text" width="xxsmall" />
            </Stack>
            <Stack space="xsmall">
              <Text tone="secondary" size="small">
                40%
              </Text>
              <Skeleton type="text" width={40} />
            </Stack>
          </Stack>,
        ),
    },
    {
      label: 'Multiple lines',
      description: (
        <Text>
          The <Strong>lines</Strong> prop draws a paragraph inside one{' '}
          <TextLink href="/components/Text">Text</TextLink> box. The last line
          is always half width. For lines of different lengths, use separate
          text placeholders with <Strong>width</Strong>.
        </Text>
      ),
      Example: () => source(<Skeleton type="text" lines={3} />),
    },
    {
      label: 'Rectangle height',
      description: (
        <Text>
          Rectangles use the space scale for height, from{' '}
          <Strong>xxsmall</Strong> to <Strong>xxxlarge</Strong> (the default),
          or <Strong>full</Strong> to fill a sized parent. This is particularly
          useful for images and other blocks. For a circular logo, clip the
          parent with <Strong>borderRadius</Strong> set to <Strong>full</Strong>
          .
        </Text>
      ),
      Example: () =>
        source(
          <Stack space="medium">
            <Skeleton type="rectangle" height="xlarge" />
            <Skeleton type="rectangle" height="xxxlarge" />
          </Stack>,
        ),
    },
    {
      label: 'Delayed visibility',
      description: (
        <>
          <Text>
            If content loads quickly, users are likely to see a quick flash of
            the placeholder. In order to reduce this visual noise, you can opt
            to delay the visibility of the skeleton by {animationDelayValueInMs}
            ms via the <Strong>delayVisibility</Strong> prop.
          </Text>
          <Text>
            Apply it to every skeleton in a region, or to none. A shimmer is
            shown by default, and stays static when the user prefers reduced
            motion.
          </Text>
        </>
      ),
      Example: ({ setDefaultState, getState, setState }) =>
        source(
          <>
            {setDefaultState('counter', 0)}
            <Stack space="large">
              <Stack space="medium" key={getState('counter')}>
                <Skeleton
                  type="heading"
                  level="3"
                  width="large"
                  delayVisibility
                />
                <Skeleton type="text" lines={2} delayVisibility />
                <Skeleton type="button" width="small" delayVisibility />
              </Stack>
              <Divider />
              <Inline space="medium">
                <Button
                  onClick={() => setState('counter', getState('counter') + 1)}
                >
                  Replay
                </Button>
              </Inline>
            </Stack>
          </>,
        ),
    },
    {
      label: 'Composing a region',
      description: (
        <Text>
          Skeletons can be composed with{' '}
          <TextLink href="/components/Stack">Stack</TextLink>,{' '}
          <TextLink href="/components/Card">Card</TextLink> and{' '}
          <TextLink href="/components/Inline">Inline</TextLink>. Match the
          spacing and hierarchy of the loaded layout, then swap in the parent.
          If a request fails, replace the skeleton with an inline error rather
          than leaving it on screen.
        </Text>
      ),
      Example: () =>
        source(
          <Box aria-busy="true">
            <Stack space="medium">
              <Skeleton type="heading" level="2" width="large" />
              <Skeleton type="text" lines={2} />
              <Skeleton type="button" width="small" />
              <Skeleton type="rectangle" />
            </Stack>
          </Box>,
        ),
    },
    {
      label: 'Form',
      description: (
        <Text>
          A field can be represented as a text placeholder for the label and a
          button-sized placeholder for the input, composed inside{' '}
          <TextLink href="/components/Stack">Stack</TextLink> and{' '}
          <TextLink href="/components/Card">Card</TextLink>. The input uses
          button height because it is touchable.
        </Text>
      ),
      Example: () =>
        source(
          <Card>
            <Stack space="large">
              <Stack space="small">
                <Skeleton type="text" size="small" width="xsmall" />
                <Skeleton type="button" />
              </Stack>
              <Stack space="small">
                <Skeleton type="text" size="small" width="small" />
                <Skeleton type="button" />
              </Stack>
              <Inline space="small">
                <Skeleton type="button" width="small" />
                <Skeleton type="button" width="small" />
              </Inline>
            </Stack>
          </Card>,
        ),
    },
    {
      label: 'Recipes',
      description: (
        <>
          <Text>
            This card follows the{' '}
            <TextLink href="/examples/job-summary">Job Summary</TextLink>{' '}
            example, with a skeleton in each slot. Widths can be approximate;
            heading level, text size and spacing should match so the layout
            holds when content arrives.
          </Text>
          <Text>
            Controls that are already on screen, such as the save action, can
            stay in place. The preview loops between loading and content.
          </Text>
        </>
      ),
      Example: () => ({
        code: `<Card>
  ${jobCardLoading.code.replace(/\n/g, '\n  ')}
</Card>
`,
        value: <JobCardRecipe />,
      }),
    },
    {
      label: 'Coverage',
      description: (
        <Text>
          A proof of concept of in-flow components swapping to content. Where
          there is no Skeleton type, space is held with a rectangle over the
          real control. Overlays such as{' '}
          <TextLink href="/components/Dialog">Dialog</TextLink> and{' '}
          <TextLink href="/components/Drawer">Drawer</TextLink> show a
          placeholder for the trigger. The preview loops; Playroom shows a small
          sample.
        </Text>
      ),
      Example: () => ({
        code: coveragePlayroom.code,
        value: <CoverageRecipe />,
      }),
    },
    {
      label: 'When to use',
      description: (
        <Stack space="xlarge">
          <Stack space="large">
            <Text>Use a Skeleton:</Text>
            <List space="large">
              <Text>
                when the loaded UI is structured (cards, lists, forms, profiles)
                and a shift would be noticeable
              </Text>
              <Text>
                to hold space for content that is not yet on screen, including
                buttons that have not rendered.
              </Text>
            </List>
          </Stack>
          <Stack space="large">
            <Text>Don&rsquo;t use a Skeleton:</Text>
            <List space="large">
              <Text>
                for a compact, in-context wait (use a{' '}
                <TextLink href="/components/Loader">Loader</TextLink> instead)
              </Text>
              <Text>
                on a control that is already on screen (use the Button{' '}
                <Strong>loading</Strong> prop instead)
              </Text>
              <Text>
                for an identity disc (use{' '}
                <TextLink href="/components/Avatar">Avatar</TextLink> with{' '}
                <Strong>loading</Strong> instead)
              </Text>
              <Text>
                after a request has failed (show an inline error and retry
                instead).
              </Text>
            </List>
          </Stack>
        </Stack>
      ),
    },
    dataAttributeDocs({
      code: `
        <Skeleton
          data={{ testid: 'skeleton-1' }}
          // => data-testid="skeleton-1"
        />
      `,
      supportsNativeSyntax: false,
    }),
  ],
};

export default docs;
