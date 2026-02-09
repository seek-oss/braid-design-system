import source from '@braid-design-system/source.macro';
import { Fragment } from 'react';
import type { ComponentDocs } from 'site/types';

import { vars } from 'braid-src/css';

import {
  Box,
  Stack,
  Card,
  Text,
  Tiles,
  Strong,
  Columns,
  Column,
  Heading,
  List,
  TextLink,
  Actions,
  Button,
  IconBookmark,
  IconNote,
  MenuItem,
  OverflowMenu,
  Spread,
} from '../';
import { Placeholder } from '../../playroom/components';
import { dataAttributeDocs } from '../private/dataAttribute.docs';

import { validCardComponents } from './Card';

const docs: ComponentDocs = {
  category: 'Content',
  description: (
    <Text>
      A visual container for information and actions related to a single
      subject.
    </Text>
  ),
  Example: () =>
    source(
      <Card>
        <Placeholder label="This content is inside a card" height={60} />
      </Card>,
    ),
  alternatives: [
    {
      name: 'Box',
      description: 'For custom layouts.',
    },
  ],
  additional: [
    {
      label: 'Visual guidelines',
      description: (
        <Text>
          Cards are highly flexible and can contain many types of content
          including copy, images, calls to action and layout components. Below
          is just one example of how a card can look.
        </Text>
      ),
      Example: () =>
        source(
          <Card>
            <Stack space="medium">
              <Stack space="small">
                <Spread space="small">
                  <Heading level="4">Heading level 4</Heading>
                  <OverflowMenu label="Options">
                    <MenuItem icon={<IconNote />}>Menu item 1</MenuItem>
                    <MenuItem icon={<IconBookmark />}>Menu item 2</MenuItem>
                  </OverflowMenu>
                </Spread>
                <Text>Standard text</Text>
              </Stack>
              <Text>
                Standard text lorem ipsum dolor sit amet consectetur adipiscing
                elit. Vivamus iaculis ut neque sit amet egestas.{' '}
              </Text>
              <Text tone="secondary">Standard, secondary text</Text>
              <Actions>
                <Button>Button</Button>
              </Actions>
            </Stack>
          </Card>,
        ),
    },
    {
      description: (
        <Stack space="xxlarge">
          <Stack space="large">
            <Heading level="4">Typography</Heading>
            <Text>
              Keep it simple and try to limit text sizes to one{' '}
              <Strong>Heading</Strong> and one <Strong>Text</Strong> size. As a
              default, we recommend:
            </Text>
            <List space="medium">
              <Text>
                Heading <Strong>level 4</Strong> for card headings
              </Text>
              <Text>
                Text size <Strong>standard</Strong> for subheadings and body
                copy
              </Text>
              <Text>
                Text tone <Strong>secondary</Strong> for secondary copy.
              </Text>
            </List>
          </Stack>
          <Stack space="large">
            <Heading level="4">Vertical spacing</Heading>
            <Text>
              Use the <TextLink href="/components/Stack">Stack</TextLink>{' '}
              component to apply vertical spacing within a card. As a default,
              we recommend:
            </Text>
            <List space="medium">
              <Text>
                Stack space <Strong>medium</Strong> for separating content
                groups / sections (or large for an airier feel)
              </Text>
              <Text>
                Stack space <Strong>small</Strong> for related content
                you&rsquo;d like to display more tightly (such as the heading
                and subheading).
              </Text>
            </List>
            <Text>
              Below is the same example as before but with Stack spacing
              highlighted for visibility.
            </Text>
          </Stack>
        </Stack>
      ),
      playroom: false,
      code: false,
      Example: () =>
        source(
          (() => {
            const VisualSpace = ({
              space,
            }: {
              space: 'small' | 'medium' | 'large';
            }) => (
              <Box
                background={
                  (
                    {
                      small: 'promoteLight',
                      medium: 'infoLight',
                      large: 'positiveLight',
                    } as const
                  )[space] ?? 'neutralLight'
                }
                display="flex"
                alignItems="center"
                paddingLeft="xxsmall"
                style={{ height: vars.space[space] }}
              >
                <Text size="xsmall" weight="strong">
                  {space.substring(0, space.lastIndexOf('x') + 2).toUpperCase()}
                </Text>
              </Box>
            );
            return (
              <Box padding="small">
                <Card>
                  <Spread space="small">
                    <Heading level="4">Heading level 4</Heading>

                    <OverflowMenu label="Options">
                      <MenuItem icon={<IconNote />}>Menu item 1</MenuItem>
                      <MenuItem icon={<IconBookmark />}>Menu item 2</MenuItem>
                    </OverflowMenu>
                  </Spread>
                  <VisualSpace space="small" />
                  <Text>Standard text</Text>
                  <VisualSpace space="medium" />
                  <Text>
                    Standard text lorem ipsum dolor sit amet consectetur
                    adipiscing elit. Vivamus iaculis ut neque sit amet
                    egestas.{' '}
                  </Text>
                  <VisualSpace space="medium" />
                  <Text tone="secondary">Standard, secondary text</Text>
                  <VisualSpace space="medium" />
                  <Actions>
                    <Button>Button</Button>
                  </Actions>
                </Card>
              </Box>
            );
          })(),
        ),
    },
    {
      label: 'Controlling the height',
      description: (
        <>
          <Text>
            By default, <Strong>height</Strong> will be set to{' '}
            <Strong>content</Strong> — growing to accomodate what is inside it.
          </Text>
          <Text>
            Alternatively, choose a height of <Strong>full</Strong> to use all
            available vertical space. This is useful when composing rows of Card
            components that should all be equal height.
          </Text>
        </>
      ),
      Example: () =>
        source(
          <Columns space={{ mobile: 'xsmall', tablet: 'gutter' }}>
            <Column>
              <Card height="full">
                <Placeholder height={60} />
              </Card>
            </Column>
            <Column>
              <Card height="full">
                <Placeholder height={200} />
              </Card>
            </Column>
            <Column>
              <Card height="full">
                <Placeholder height={100} />
              </Card>
            </Column>
          </Columns>,
        ),
    },
    {
      label: 'Tones',
      description: (
        <Text>
          Providing a <Strong>tone</Strong> prop will add a keyline down the
          left hand side of the container. The supported tones are{' '}
          <Strong>promote</Strong> and <Strong>formAccent</Strong>.
        </Text>
      ),
      Example: () =>
        source(
          <Tiles space="large" columns={{ mobile: 1, tablet: 2 }}>
            <Stack space="small">
              <Text size="xsmall" tone="secondary">
                PROMOTE
              </Text>
              <Card tone="promote">
                <Box style={{ height: 100 }} width="full" />
              </Card>
            </Stack>

            <Stack space="small">
              <Text size="xsmall" tone="secondary">
                FORMACCENT
              </Text>
              <Card tone="formAccent">
                <Box style={{ height: 100 }} width="full" />
              </Card>
            </Stack>
          </Tiles>,
        ),
    },
    {
      label: 'Custom semantics',
      description: (
        <Text>
          The HTML tag can be customised to ensure the underlying document
          semantics are meaningful. This can be done using the{' '}
          <Strong>component</Strong> prop and supports{' '}
          {validCardComponents.map((c, i) => {
            const notLastTwo = validCardComponents.length - 2;
            const joiningLastElements = i === notLastTwo ? ' and ' : '.';

            return (
              <Fragment key={c}>
                <Strong>{c}</Strong>
                {c === 'div' ? ' (default)' : ''}
                {i < notLastTwo ? ', ' : joiningLastElements}
              </Fragment>
            );
          })}
        </Text>
      ),
    },
    dataAttributeDocs({
      code: `
        <Card
          data={{ testid: 'card-1' }}
          // => data-testid="card-1"
        >
          ...
        </Card>
      `,
      supportsNativeSyntax: false,
    }),
  ],
};

export default docs;
