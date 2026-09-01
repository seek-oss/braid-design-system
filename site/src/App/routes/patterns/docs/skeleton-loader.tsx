import source from '@braid-design-system/source.macro';
import {
  Box,
  Card,
  List,
  Stack,
  Strong,
  Text,
  TextLink,
} from 'braid-design-system';
import { vars } from 'braid-design-system/css';

import type { PatternDocs } from '../../../../types';

const SkeletonImage = ({
  height,
  width,
}: {
  height: string | number;
  width: string | number;
}) => (
  <Box
    component="span"
    background="neutralLight"
    borderRadius="standard"
    style={{ height, width }}
  />
);

const SkeletonText = ({
  height,
  width,
}: {
  height: string | number;
  width: string | number;
}) => (
  <Box
    component="span"
    background="neutralLight"
    borderRadius="full"
    style={{ height, width }}
  />
);

const SkeletonButtonSmall = ({ width }: { width: string | number }) => (
  <Box
    component="span"
    background="neutralLight"
    borderRadius="standard"
    style={{ height: '40px', width }}
  />
);

export const docs: PatternDocs = {
  description: (
    <Text>
      Displays visual placeholders that mimic real content while it loads,
      giving the impression of faster, progressive loading.
    </Text>
  ),
  alternatives: [
    {
      name: 'Loader',
      description:
        'For indicating that content is loading in a more minimal way.',
    },
    {
      name: 'empty-state',
      section: 'patterns',
      description:
        'For communicating an absence of data and directing users toward their next step.',
    },
    {
      name: 'error-state',
      section: 'patterns',
      description:
        'For communicating a failed action and guiding users toward a resolution.',
    },
  ],
  docSections: {
    appearance: [
      {
        label: 'Anatomy',
        Example: () =>
          source(
            <Box paddingY="xsmall">
              <Card>
                <Stack space="medium">
                  <Stack space="xsmall">
                    <SkeletonImage
                      height={vars.space.xxlarge}
                      width={vars.space.xxxlarge}
                    />
                    <SkeletonText height={vars.space.medium} width="60%" />
                  </Stack>
                  <Stack space="xsmall">
                    <SkeletonText height={vars.space.xsmall} width="90%" />
                    <SkeletonText height={vars.space.xsmall} width="90%" />
                    <SkeletonText height={vars.space.xsmall} width="60%" />
                  </Stack>
                  <SkeletonButtonSmall width={vars.space.xxxlarge} />
                </Stack>
              </Card>
            </Box>,
          ),
      },
      {
        label: 'Visual guidelines',
        description: (
          <List space="large">
            <Text>
              Match the size, layout, and spacing of the real content.
            </Text>
            <Text>
              Use <Strong>background=&quot;neutralLight&quot;</Strong> for every
              skeleton element.
            </Text>
            <Text>
              Use <Strong>borderRadius=&quot;full&quot;</Strong> for text and
              icons. Match the real component for everything else, such as{' '}
              <Strong>borderRadius=&quot;standard&quot;</Strong> on buttons and
              badges.
            </Text>
            <Text>
              For height, use medium for Heading level 1, small for Heading 2–4,
              and xsmall for Text.
            </Text>
          </List>
        ),
      },
    ],
    bestPractices: [
      {
        label: 'General best practice',
        description: (
          <List space="large">
            <Text>Use skeletons only on key content areas.</Text>
            <Text>
              Make skeletons accessible to screen readers, and check them in
              dark mode.
            </Text>
            <Text>
              Scale skeletons with content size and density on small screens.
            </Text>
            <Text>Show skeletons only as long as they are needed.</Text>
            <Text>
              Keep skeleton code lightweight so it does not slow the load.
            </Text>
          </List>
        ),
      },
      {
        label: 'When to use',
        description: (
          <Stack space="xlarge">
            <Stack space="large">
              <Text>Use a skeleton loader when:</Text>
              <List space="large">
                <Text>content is likely to take a while to load</Text>
                <Text>
                  the layout is complex, such as cards, tables, or
                  multi-component layouts
                </Text>
                <Text>
                  the content is essential or prominent, such as job ads or
                  profiles.
                </Text>
              </List>
            </Stack>
            <Stack space="large">
              <Text>Don&rsquo;t use a skeleton loader when:</Text>
              <List space="large">
                <Text>
                  the layout is simple (use a{' '}
                  <TextLink href="/components/Loader">Loader</TextLink> instead)
                </Text>
                <Text>
                  elements are small, low-priority, or expected to load quickly
                </Text>
                <Text>
                  there is no data to display (use an{' '}
                  <TextLink href="/patterns/empty-state">Empty state</TextLink>{' '}
                  instead)
                </Text>
                <Text>
                  an expected action failed (use an{' '}
                  <TextLink href="/patterns/error-state">Error state</TextLink>{' '}
                  instead).
                </Text>
              </List>
            </Stack>
          </Stack>
        ),
      },
    ],
  },
};

export default docs;
