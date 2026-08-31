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

import type { PatternDocs } from '../../../types';

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
        'For indicating that content is loading in a more minimal way',
    },
    {
      name: 'empty-state',
      section: 'patterns',
      description: 'For when there is no data available at the present time',
    },
    {
      name: 'error-state',
      section: 'patterns',
      description:
        'For when the website or app fails to complete an expected action',
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
          <>
            <List space="large">
              <Text>
                Size, layout, and spacing of skeleton elements should replicate
                the size, layout, and spacing of actual content where possible.
              </Text>
              <Text>
                Skeleton elements representing text and icons should be fully
                rounded using <Strong>borderRadius=&quot;full&quot;</Strong>.
              </Text>
              <Text>
                All other skeleton elements should replicate component rounding,
                for example a button or badge using{' '}
                <Strong>borderRadius=&quot;standard&quot;</Strong>.
              </Text>
              <Text>
                Colour for all skeleton elements should be{' '}
                <Strong>neutralLight</Strong> (
                <Strong>background=&quot;neutralLight&quot;</Strong>).
              </Text>
              <Text>Height suggestions for text elements:</Text>
            </List>
            <List space="large">
              <Text>Use medium for Heading level 1</Text>
              <Text>Use small for Heading level 2, 3, and 4</Text>
              <Text>Use xsmall for Text</Text>
            </List>
            <Text>
              Avoid animation. A standardised approach to skeleton animation can
              be considered when capacity allows.
            </Text>
          </>
        ),
      },
    ],
    bestPractices: [
      {
        label: 'General best practice',
        description: (
          <List space="large">
            <Text>Design skeletons to resemble actual content structure.</Text>
            <Text>Avoid overuse. Focus on key content areas.</Text>
            <Text>
              Ensure skeletons are screen-reader accessible and work as expected
              in dark mode.
            </Text>
            <Text>
              Scale skeletons to reflect changes in content size and density on
              small screens.
            </Text>
            <Text>Show skeletons only as long as needed.</Text>
            <Text>
              Keep skeleton code lightweight to avoid slowing load times.
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
                  profiles
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
                <Text>moving between pages in a single-page app</Text>
                <Text>
                  there is no data to display (use an{' '}
                  <TextLink href="/patterns/empty-state">Empty state</TextLink>{' '}
                  instead)
                </Text>
                <Text>
                  an expected action failed (use an{' '}
                  <TextLink href="/patterns/error-state">Error state</TextLink>{' '}
                  instead)
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
