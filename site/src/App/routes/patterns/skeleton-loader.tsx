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
  additional: [
    {
      label: 'Appearance',
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
          <List>
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
          <List>
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
    {
      label: 'General best practice',
      description: (
        <List>
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
        <>
          <Text>Use skeletons for:</Text>
          <List>
            <Text>
              Areas of content that are likely to have longer load times
            </Text>
            <Text>
              Essential or prominent content like job ads, candidate profiles,
              or recommended jobs
            </Text>
            <Text>
              Complex layouts and structured data, such as cards, tables, or
              multi-component layouts
            </Text>
            <Text>
              Helping users on slow connections or mobile networks to reduce the
              perception of delayed load times
            </Text>
          </List>
          <Text>Don&rsquo;t use skeletons for:</Text>
          <List>
            <Text>
              Small, low-priority elements (for example icons or secondary
              elements)
            </Text>
            <Text>
              Minimal or overly simple layouts — use the{' '}
              <TextLink href="/components/Loader">Loader</TextLink> component
              instead
            </Text>
            <Text>
              Page-to-page transitions, especially in single-page apps where
              skeletons can disrupt the experience
            </Text>
            <Text>
              Elements that are expected to load quickly, as skeletons can feel
              unnecessary and jarring
            </Text>
            <Text>
              When there is no data available at the present time — use an{' '}
              <TextLink href="/patterns/empty-states">empty state</TextLink>{' '}
              instead
            </Text>
            <Text>
              When the website or app fails to complete an expected action — use
              an <TextLink href="/patterns/error-states">error state</TextLink>{' '}
              instead
            </Text>
          </List>
        </>
      ),
    },
    {
      label: 'Related patterns and components',
      description: (
        <List>
          <Text>
            <TextLink href="/components/Loader">Loader</TextLink> — For
            indicating that content is loading in a more minimal way
          </Text>
          <Text>
            <TextLink href="/patterns/empty-states">Empty states</TextLink> —
            For when there is no data available at the present time
          </Text>
          <Text>
            <TextLink href="/patterns/error-states">Error states</TextLink> —
            For when the website or app fails to complete an expected action
          </Text>
        </List>
      ),
    },
  ],
};

export default docs;
