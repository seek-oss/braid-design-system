import source from '@braid-design-system/source.macro';
import {
  Alert,
  Box,
  Dialog,
  Heading,
  IconCaution,
  IconCritical,
  List,
  Stack,
  Strong,
  Text,
  TextLink,
} from 'braid-design-system';
import { Placeholder } from 'braid-design-system/playroom/components';

import type { PatternDocs } from '../../../types';

export const docs: PatternDocs = {
  description: (
    <Text tone="secondary">
      Warn users about upcoming interruptions or reduced service.
    </Text>
  ),
  additional: [
    {
      label: 'General best practice',
      description: (
        <>
          <Text>A service outage banner should let customers know:</Text>
          <List>
            <Text>What parts of the site are impacted</Text>
            <Text>How they&rsquo;ll be impacted</Text>
            <Text>When the site will be impacted</Text>
            <Text>When to expect regular performance</Text>
          </List>
          <Text>
            Service outage banners should also be used in conjunction with other
            communications. Ideally, the customer would have heard about the
            outage before arriving on platform. The outage banner should serve
            as a reminder, rather than be the first news of the outage.
          </Text>
        </>
      ),
    },
    {
      label: 'Widespread disruptions',
      description: (
        <Text>
          Take this approach when the disruption to service impacts entire
          systems or products. This includes, but isn&rsquo;t limited to,
          site-wide maintenance, product outages and overdue accounts.
        </Text>
      ),
      Example: ({ getState, toggleState, setDefaultState }) =>
        source(
          <>
            {setDefaultState('dialog', false)}
            <Box
              background="criticalLight"
              paddingY="medium"
              // Follows the screen gutter sizing of PageBlock
              paddingX={{ mobile: 'xsmall', tablet: 'gutter' }}
            >
              <Stack space="none" align="center">
                <Text icon={<IconCritical />}>
                  Critical system outage banner example. Notice how the text
                  wraps across different screen sizes. We maximise text width to
                  limit the height of the banner.{' '}
                  <TextLink href="#" onClick={() => toggleState('dialog')}>
                    Read more
                  </TextLink>
                </Text>
              </Stack>
            </Box>
            <Stack space="xlarge">
              <Box background="info">
                <Placeholder label="Navigation" height={70} />
              </Box>
              <Stack space="medium">
                <Heading level="2">Hello world</Heading>
                <Placeholder label="Content..." height={300} />
              </Stack>
              <Box background="neutral">
                <Placeholder label="Footer" height={100} />
              </Box>
            </Stack>
            <Dialog
              title="Critical message"
              description={<Text tone="secondary">Optional description</Text>}
              open={getState('dialog')}
              onClose={() => toggleState('dialog')}
            >
              <Placeholder height={100} width="100%" />
            </Dialog>
          </>,
        ),
    },
    {
      description: (
        <>
          <Text>
            There is currently no out-of-the-box banner component for top-level
            messaging. Create a custom component and follow the recommendations
            below.
          </Text>
          <List>
            <Text>
              Choose an appropriate{' '}
              <TextLink href="/foundations/tones">tone</TextLink> for your
              banner and use the corresponding icon. Critical: high risk and/or
              urgency (for example, the system will be unavailable). Caution:
              lower risk and/or urgency (for example, the system will be slower
              than usual). Info: functional, calm and non-urgent (for example,
              the system is updating in the background). Critical and caution
              are usually the most relevant tones for outage messaging —
              consider these before reaching for info.
            </Text>
            <Text>
              Place the banner at the very top of the page, above the site
              navigation.
            </Text>
            <Text>
              Provide a “Read more” link which opens a{' '}
              <TextLink href="/components/Dialog">Dialog</TextLink> when
              relevant.
            </Text>
            <Text>
              Align the banner look and feel to the latest{' '}
              <TextLink href="/components/Alert">Alert</TextLink> component
              style, but do not round the corners.
            </Text>
            <Text>
              Widespread disruption banners should remain constant, without the
              option for the user to dismiss them.
            </Text>
          </List>
          <Text>
            <Strong>Technical detail</Strong>
          </Text>
          <List>
            <Text>
              Create a custom banner using{' '}
              <TextLink href="/components/Box">Box</TextLink> with{' '}
              <Strong>paddingY=&quot;gutter&quot;</Strong> and{' '}
              <Strong>
                paddingX=&#123;&#123; mobile: &quot;xsmall&quot;, tablet:
                &quot;gutter&quot; &#125;&#125;
              </Strong>{' '}
              to follow PageBlock screen gutters.
            </Text>
            <Text>
              Set the background to the light version of the selected tone, for
              example <Strong>criticalLight</Strong>,{' '}
              <Strong>cautionLight</Strong> or <Strong>infoLight</Strong>.
            </Text>
            <Text>
              Use the corresponding icon:{' '}
              <TextLink href="/components/IconCritical">IconCritical</TextLink>,{' '}
              <TextLink href="/components/IconCaution">IconCaution</TextLink> or{' '}
              <TextLink href="/components/IconInfo">IconInfo</TextLink>.
            </Text>
            <Text>
              Left-align the banner text and wrap it in a centre-aligned Stack
              so icon spacing stays uniform.
            </Text>
          </List>
        </>
      ),
    },
    {
      label: 'Isolated disruptions',
      description: (
        <Text>
          Take this approach when the disruption impacts a specific part of a
          product. This includes, but isn&rsquo;t limited to, specific feature
          outages and limited site access.
        </Text>
      ),
      Example: () =>
        source(
          <Stack space="xlarge">
            <Box background="info">
              <Placeholder label="Navigation" height={70} />
            </Box>
            <Stack space="medium">
              <Heading level="2">Hello world</Heading>
              <Alert
                tone="caution"
                onClose={() => {}}
                closeLabel="Close info alert"
              >
                <Text>
                  This is a contextual caution message that can be dismissed.
                </Text>
              </Alert>
              <Placeholder label="Content..." height={300} />
            </Stack>
            <Box background="neutral">
              <Placeholder label="Footer" height={100} />
            </Box>
          </Stack>,
        ),
    },
    {
      description: (
        <List>
          <Text>
            Use the existing <TextLink href="/components/Alert">Alert</TextLink>{' '}
            component.
          </Text>
          <Text>
            Provide a “Read more” link which opens a Dialog when relevant.
          </Text>
          <Text>
            Choose an appropriate tone. Critical and caution are usually the
            most relevant for outage messaging.
          </Text>
          <Text>
            Place the Alert within the context of the page, below the site
            navigation.
          </Text>
          <Text>
            Isolated disruption banners should generally remain constant. If
            your scenario warrants a dismissible banner, Alert supports this via{' '}
            <Strong>onClose</Strong>.
          </Text>
        </List>
      ),
    },
    {
      label: 'Stacking multiple banners',
      description: (
        <Text>
          When you need to show multiple outage banners on the same page:
        </Text>
      ),
      Example: ({ getState, toggleState, setDefaultState }) =>
        source(
          <>
            {setDefaultState('dialog', false)}
            {setDefaultState('dialog2', false)}
            <Box
              background="criticalLight"
              paddingY="gutter"
              // Follows the screen gutter sizing of PageBlock
              paddingX={{ mobile: 'xsmall', tablet: 'gutter' }}
            >
              <Stack space="none" align="center">
                <Text icon={<IconCritical />}>
                  Critical system outage banner example with some text.{' '}
                  <TextLink href="#" onClick={() => toggleState('dialog')}>
                    Read more
                  </TextLink>
                </Text>
              </Stack>
            </Box>
            <Box
              background="cautionLight"
              paddingY="gutter"
              // Follows the screen gutter sizing of PageBlock
              paddingX={{ mobile: 'xsmall', tablet: 'gutter' }}
            >
              <Stack space="none" align="center">
                <Text icon={<IconCaution />}>
                  Caution banner example with some text.{' '}
                  <TextLink href="#" onClick={() => toggleState('dialog2')}>
                    Read more
                  </TextLink>
                </Text>
              </Stack>
            </Box>
            <Stack space="xlarge">
              <Box background="info">
                <Placeholder label="Navigation" height={70} />
              </Box>
              <Stack space="medium">
                <Heading level="2">Hello world</Heading>
                <Alert tone="critical">
                  <Text>
                    This is a contextual critical message that cannot be
                    dismissed.
                  </Text>
                </Alert>
                <Alert
                  tone="caution"
                  onClose={() => {}}
                  closeLabel="Close info alert"
                >
                  <Text>
                    This is a contextual caution message that can be dismissed.
                  </Text>
                </Alert>
                <Placeholder label="Content..." height={300} />
              </Stack>
              <Box background="neutral">
                <Placeholder label="Footer" height={100} />
              </Box>
            </Stack>
            <Dialog
              title="Critical message"
              description={<Text tone="secondary">Optional description</Text>}
              open={getState('dialog')}
              onClose={() => toggleState('dialog')}
            >
              <Placeholder height={100} width="100%" />
            </Dialog>
            <Dialog
              title="Caution message"
              description={<Text tone="secondary">Optional description</Text>}
              open={getState('dialog2')}
              onClose={() => toggleState('dialog2')}
            >
              <Placeholder height={100} width="100%" />
            </Dialog>
          </>,
        ),
    },
    {
      description: (
        <List>
          <Text>
            Widespread outage banners should sit at the very top of the page —
            above the site navigation.
          </Text>
          <Text>
            Isolated outage banners should sit within the context of the page —
            below the site navigation.
          </Text>
          <Text>Critical banners should be placed above caution banners.</Text>
        </List>
      ),
    },
    {
      label: 'Content guidelines',
      description: (
        <>
          <Text>
            Use specific, calm copy. Say what is unavailable, when it is
            affected, and what to do next. Avoid alarmist language.
          </Text>
          <Text>
            <Strong>Planned, widespread</Strong>
          </Text>
          <Text>
            We&rsquo;re improving our site and will not be available from 11 am,
            Friday 13 Jan 2023 to 3 pm, Saturday 14 Jan 2023. Sorry for any
            inconvenience.
          </Text>
          <Text>
            <Strong>Unplanned, widespread</Strong>
          </Text>
          <Text>
            Our site isn&rsquo;t available right now. We&rsquo;re doing our best
            to fix this. Try refreshing the page or check back later.
          </Text>
          <Text>
            <Strong>Planned, isolated</Strong>
          </Text>
          <Text>
            We&rsquo;re improving our site. Your ad performance reports will not
            be available until 11 am, Friday 13 Jan 2023. Sorry for any
            inconvenience. If you need help, reach out to our Customer Service
            team.
          </Text>
          <Text>
            <Strong>Unplanned, isolated</Strong>
          </Text>
          <Text>
            Your ad performance reports aren&rsquo;t available right now.
            We&rsquo;re doing our best to fix this. Try refreshing the page or
            check back later. If it still doesn&rsquo;t work, reach out to our
            Customer Service team.
          </Text>
          <Text>
            <Strong>Slow or intermittent service</Strong>
          </Text>
          <Text>
            We&rsquo;re improving our site. Posting a job ad may be slower than
            usual until 11 am, Friday 13 Jan 2023. Sorry for any inconvenience.
            If you need help, reach out to our Customer Service team.
          </Text>
        </>
      ),
    },
  ],
};

export default docs;
