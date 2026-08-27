import source from '@braid-design-system/source.macro';
import {
  Accordion,
  AccordionItem,
  Box,
  Button,
  Dialog,
  Disclosure,
  Divider,
  Heading,
  IconHelp,
  Stack,
  Strong,
  Text,
  TextLink,
  TooltipRenderer,
} from 'braid-design-system';

import type { PatternDocs } from '../../../types';

export const docs: PatternDocs = {
  description: (
    <Text>
      Represents a group of components and patterns used to reveal
      non-critical, supplementary information without cluttering the primary
      content.
    </Text>
  ),
  additional: [
    {
      description: (
        <Text>
          This page includes general advice for revealing secondary information
          at the user&rsquo;s request. The examples here are not exhaustive — by
          joining components together Braid supports many approaches and
          combinations. For further support please reach out in{' '}
          <TextLink href="https://seekchat.slack.com/archives/CMBLA5Q1E">
            #braid-design-support
          </TextLink>
          .
        </Text>
      ),
    },
    {
      label: 'Components',
      description: (
        <>
          <Text>
            When revealing secondary info, the most relevant components may be
            Tooltip, Disclosure, Dialog and Accordion.
          </Text>
          <Text>
            <Strong>
              <TextLink href="/components/TooltipRenderer">
                TooltipRenderer
              </TextLink>
            </Strong>
          </Text>
          <Text>
            For revealing a small amount of text on mouse hover. Supports text
            only, no interactive elements. Best suited for providing a short
            definition of what something means or does (a few words).
          </Text>
        </>
      ),
      Example: () =>
        source(
          <Text>
            Salary is listed as a package{' '}
            <TooltipRenderer tooltip={<Text>Includes superannuation</Text>}>
              {({ triggerProps }) => (
                <TextLink {...triggerProps} href="#" icon={<IconHelp />}>
                  What does this mean?
                </TextLink>
              )}
            </TooltipRenderer>
          </Text>,
        ),
    },
    {
      description: (
        <>
          <Text>
            <Strong>
              <TextLink href="/components/Disclosure">Disclosure</TextLink>
            </Strong>
          </Text>
          <Text>
            For revealing a small amount of expandable content inline with a
            light visual treatment. Supports rich formatting and interactive
            elements, however may be best suited for simple text and links (e.g.
            “Show/hide payment details”).
          </Text>
        </>
      ),
      Example: () =>
        source(
          <Disclosure
            expandLabel="Show payment details"
            collapseLabel="Hide payment details"
          >
            <Text>
              Your card will be charged on the first business day of each month.{' '}
              <TextLink href="#">View billing policy</TextLink>
            </Text>
          </Disclosure>,
        ),
    },
    {
      description: (
        <>
          <Text>
            <Strong>
              <TextLink href="/components/Accordion">Accordion</TextLink>
            </Strong>
          </Text>
          <Text>
            For revealing sections of content in a vertically stacked list with
            a prominent visual treatment. Supports rich formatting and
            interactive elements.
          </Text>
        </>
      ),
      Example: () =>
        source(
          <Accordion>
            <AccordionItem label="What is included in a job ad?">
              <Text>
                A job ad includes the role title, location, salary details and a
                description of the role.
              </Text>
            </AccordionItem>
            <AccordionItem label="How long will my job ad be live?">
              <Text>
                Job ads are live for 30 days by default. You can close them
                earlier if the role is filled.
              </Text>
            </AccordionItem>
          </Accordion>,
        ),
    },
    {
      description: (
        <>
          <Text>
            <Strong>
              <TextLink href="/components/Dialog">Dialog</TextLink>
            </Strong>
          </Text>
          <Text>
            For revealing a moderate amount of content in a modal. Supports rich
            formatting and interactive elements. Best suited for content several
            sentences in length, or when images and/or further actions are
            required.
          </Text>
        </>
      ),
      Example: ({ getState, setState, setDefaultState }) =>
        source(
          <>
            {setDefaultState('dialog', false)}
            <Button onClick={() => setState('dialog', true)}>
              Learn more about search ranking
            </Button>
            <Dialog
              title="How search ranking works"
              open={getState('dialog')}
              onClose={() => setState('dialog', false)}
            >
              <Stack space="large">
                <Text>
                  Ranking considers relevance, recency and the completeness of
                  the job ad. Improving these details can help your ad appear
                  higher in search.
                </Text>
                <Text>
                  <TextLink href="#">Read the full guide</TextLink>
                </Text>
              </Stack>
            </Dialog>
          </>,
        ),
    },
    {
      label: 'Alternative approaches',
      description: (
        <Text>
          In addition to revealing secondary info in response to a user action,
          you may also choose to surface more info upfront but display it in a
          less prominent way. A simple and effective way to achieve this is to
          use plain <TextLink href="/components/Text">Text</TextLink> and tailor
          properties such as <Strong>size</Strong> and <Strong>tone</Strong>.
          This can be a good option for copy you want surfaced at all times,
          such as legal fine print or explanatory copy, which is important to a
          process.
        </Text>
      ),
      Example: () =>
        source(
          <Box padding="medium">
            <Stack space="xlarge">
              <Stack space="medium">
                <Heading level="4">An example heading</Heading>
                <Text>
                  Some body copy lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Vivamus iaculis ut neque sit amet egestas.
                </Text>
                <Text tone="secondary">
                  Some extra text in tone secondary, lorem ipsum consectetur
                  adipiscing elit. Vivamus iaculis ut neque sit amet egestas.
                </Text>
              </Stack>

              <Divider />

              <Stack space="medium">
                <Heading level="4">An example heading</Heading>
                <Text>
                  Some body copy lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Vivamus iaculis ut neque sit amet egestas.
                </Text>
                <Text size="xsmall">
                  Some extra text in size xsmall, lorem ipsum consectetur
                  adipiscing elit. Vivamus iaculis ut neque sit amet egestas.
                </Text>
              </Stack>

              <Divider />

              <Stack space="medium">
                <Heading level="4">An example heading</Heading>
                <Text>
                  Some body copy lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Vivamus iaculis ut neque sit amet egestas.
                </Text>
                <Text tone="secondary" size="xsmall">
                  Some extra text in size xsmall and tone secondary, lorem ipsum
                  consectetur adipiscing elit. Vivamus iaculis ut neque sit amet
                  egestas.
                </Text>
              </Stack>
            </Stack>
          </Box>,
        ),
    },
  ],
};

export default docs;
