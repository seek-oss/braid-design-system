import source from '@braid-design-system/source.macro';
import { useEffect, useState } from 'react';
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
  Notice,
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

import { animationDelayValueInMs } from './Skeleton.css';

const jobCardLoading = source(
  <Stack space="large">
    <Columns space="small">
      <Column>
        <Stack space="small">
          <Box
            position="relative"
            display="flex"
            paddingY="xxsmall"
            paddingX="xsmall"
            borderRadius="standard"
            overflow="hidden"
          >
            <Box opacity={0}>
              <Text size="xsmall" weight="medium" maxLines={1}>
                New
              </Text>
            </Box>
            <Box position="absolute" inset={0}>
              <Skeleton type="rectangle" height="full" width="xxsmall" />
            </Box>
          </Box>
          <Skeleton type="heading" level="4" width="small" />
          <Inline space="small" alignY="center">
            <Skeleton type="text" width="small" />
            <Skeleton type="rectangle" height="small" width="xsmall" />
            <Skeleton type="text" width="xxsmall" />
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
        <Skeleton type="text" size="standard" width="xxsmall" />
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
    <Box
      aria-busy={isLoading}
      aria-live="polite"
      aria-label={isLoading ? 'Loading job' : undefined}
    >
      <Card>{isLoading ? jobCardLoading.value : jobCardLoaded.value}</Card>
    </Box>
  );
};

const docs: ComponentDocs = {
  category: 'Content',
  description: (
    <Text>
      A content placeholder that <Strong>reserves layout</Strong> while
      structured UI is loading. Use it so real content can swap in without a
      visible jump. Text and heading bones use the same Capsize box as{' '}
      <TextLink href="/components/Text">Text</TextLink> and{' '}
      <TextLink href="/components/Heading">Heading</TextLink> (cap-top to
      baseline), not the ink of a letter. Swap with the same{' '}
      <Strong>size</Strong> or <Strong>level</Strong>. Letters may sit a pixel
      outside that box; that is font overshoot, not a layout mismatch. For
      small, short, in-place waits, use{' '}
      <TextLink href="/components/Loader">Loader</TextLink> instead.
    </Text>
  ),
  Example: () => source(<Skeleton />),
  accessibility: (
    <>
      <Text>
        Bones are not focusable and do not copy{' '}
        <TextLink href="/components/Loader">Loader</TextLink>’s assertive alert.
        Unlabelled instances are hidden from assistive technologies (
        <Strong>aria-hidden</Strong>
        ). Announce <Strong>once per loading region</Strong> on the parent (for
        example <Strong>aria-busy</Strong> and{' '}
        <Strong>aria-live=&quot;polite&quot;</Strong>
        ), then swap to the real content.
      </Text>
      <Text>
        If a single bone is the whole region, an optional{' '}
        <Strong>aria-label</Strong> is announced politely as a status.
      </Text>
      <Text tone="promote" id="translations">
        <IconLanguage title="Translation hint" titleId="translations" /> The{' '}
        announced message can be customised by providing the{' '}
        <Strong>aria-label</Strong> prop.
      </Text>
    </>
  ),
  alternatives: [
    {
      name: 'Loader',
      description:
        'For a compact spinner on small, simple, or short in-place waits.',
    },
  ],
  additional: [
    {
      label: 'Types',
      description: (
        <Text>
          Choose a bone that matches what will load: <Strong>text</Strong> and{' '}
          <Strong>heading</Strong> sized to the matching typography component, a{' '}
          <Strong>button</Strong> at touchable height, or a{' '}
          <Strong>rectangle</Strong> for cards, images and other blocks. Do not
          wrap the real content. Swap{' '}
          <Strong>isLoading ? Skeleton : content</Strong>.
        </Text>
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
            </Stack>
            <Stack space="small">
              <Text tone="secondary" size="small">
                rectangle
              </Text>
              <Skeleton type="rectangle" />
            </Stack>
          </Stack>,
        ),
    },
    {
      label: 'Text size',
      description: (
        <Text>
          When <Strong>type</Strong> is <Strong>text</Strong>, height comes from
          real <TextLink href="/components/Text">Text</TextLink> at the same{' '}
          <Strong>size</Strong>, including baseline trim. Set{' '}
          <Strong>{'baseline={false}'}</Strong> only when you want an untrimmed
          line box.
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
          When <Strong>type</Strong> is <Strong>text</Strong>,{' '}
          <Strong>icon</Strong> reserves the same slot as{' '}
          <TextLink href="/components/Text">Text</TextLink>’s icon: a rounded
          square (<Strong>true</Strong> or <Strong>square</Strong>) or a disc (
          <Strong>circle</Strong>), then the text bone. Icons use the same{' '}
          <Strong>1.2em</Strong> size as Text icons, so they sit slightly
          outside the Capsize line. Pass a shape, not a real icon component.
          There is no separate <Strong>SkeletonText</Strong> export.
        </Text>
      ),
      Example: () =>
        source(
          <Stack space="medium">
            <Inline space="small" alignY="center">
              <Box style={{ width: 120 }}>
                <Text icon={<IconLocation />}>Melbourne</Text>
              </Box>
              <Skeleton type="text" icon width="medium" />
            </Inline>
            <Inline space="small" alignY="center">
              <Box style={{ width: 120 }}>
                <Text size="small">circle</Text>
              </Box>
              <Skeleton type="text" icon="circle" width="medium" />
            </Inline>
          </Stack>,
        ),
    },
    {
      label: 'Heading level',
      description: (
        <Text>
          When <Strong>type</Strong> is <Strong>heading</Strong>, provide the
          same <Strong>level</Strong> as the{' '}
          <TextLink href="/components/Heading">Heading</TextLink> that will
          replace it. The bone fills that heading’s Capsize box.
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
      label: 'Width',
      description: (
        <Text>
          Width is the main control for avoiding layout shift: named sizes{' '}
          <Strong>full</Strong>, <Strong>large</Strong>, <Strong>medium</Strong>{' '}
          and <Strong>small</Strong> (100%, 75%, 50%, 25%), or a number for a
          custom percentage of the parent. Only bone fields that will actually
          appear. Dropping a row after load looks like a failed request.
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
          When <Strong>type</Strong> is <Strong>text</Strong>,{' '}
          <Strong>lines</Strong> draws a paragraph inside one{' '}
          <TextLink href="/components/Text">Text</TextLink> box. Stripes follow
          cap height with a gap between lines. The last line is always 50% wide.
        </Text>
      ),
      Example: () => source(<Skeleton type="text" lines={3} />),
    },
    {
      label: 'Rectangle height',
      description: (
        <Text>
          Rectangles use the space scale for height (<Strong>xxsmall</Strong> to{' '}
          <Strong>xxxlarge</Strong>, default <Strong>xxxlarge</Strong>), or{' '}
          <Strong>full</Strong> to fill a sized parent. This is useful for card
          media and other blocks that are taller than the space scale.
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
        <Text>
          If content loads quickly, users are likely to see a flash of
          placeholders. Delay visibility by {animationDelayValueInMs}ms via{' '}
          <Strong>delayVisibility</Strong>, matching{' '}
          <TextLink href="/components/Loader">Loader</TextLink>. Apply it to{' '}
          <Strong>every</Strong> bone in a region, or to none. Delaying only the
          first bar still shifts layout.
        </Text>
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
          There is a single <Strong>Skeleton</Strong> export. Layout stays{' '}
          <TextLink href="/components/Stack">Stack</TextLink>,{' '}
          <TextLink href="/components/Card">Card</TextLink> and{' '}
          <TextLink href="/components/Inline">Inline</TextLink>. Do not put{' '}
          <Strong>aria-label</Strong> on every bar. Parent still swaps{' '}
          <Strong>isLoading ? … : content</Strong>. Skeleton does not wrap
          children.
        </Text>
      ),
      Example: () =>
        source(
          <Box
            aria-busy="true"
            aria-live="polite"
            aria-label="Loading job details"
          >
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
      label: 'Recipes',
      description: (
        <>
          <Text>
            Match the loaded layout with the same{' '}
            <TextLink href="/components/Stack">Stack</TextLink>,{' '}
            <TextLink href="/components/Columns">Columns</TextLink> and spacing,
            then put a <Strong>Skeleton</Strong> in each slot. This card follows
            the <TextLink href="/examples/job-summary">Job Summary</TextLink>{' '}
            example. Widths are approximate; heading level, text size and stack
            space should match so the swap does not move the page. For Badge,
            size the slot with the same padding and <Strong>xsmall</Strong>{' '}
            text, then fill it with a full-height <Strong>rectangle</Strong>. A{' '}
            <Strong>medium</Strong> rectangle is 24px and will sit short.
          </Text>
          <Text>
            Keep real chrome (here, the save action) while the body bones. The
            preview loops between loading and content so you can check for
            layout shift.
          </Text>
        </>
      ),
      playroom: false,
      Example: () => ({
        code: `<Card>
  {isLoading ? (
    ${jobCardLoading.code.replace(/\n/g, '\n    ')}
  ) : (
    ${jobCardLoaded.code.replace(/\n/g, '\n    ')}
  )}
</Card>
`,
        value: <JobCardRecipe />,
      }),
    },
    {
      label: 'Loader, empty and error',
      description: (
        <>
          <Text>
            Use <TextLink href="/components/Loader">Loader</TextLink> for
            compact in-context waits. Use Skeleton when the loaded UI is
            structured (cards, lists, forms, profiles) and a jump on swap would
            be visible. Keep real chrome (section titles, navigation) while the
            body bones.
          </Text>
          <Text>
            Empty and error are different states. Never leave a skeleton up
            after a failed request. That reads as “still loading”. Show an
            inline error and retry instead.
          </Text>
          <Notice>
            <Text>
              Shimmer is on by default so a long wait does not look stuck. It
              stays static when the user prefers reduced motion.
            </Text>
          </Notice>
        </>
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
