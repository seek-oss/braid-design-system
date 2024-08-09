import React from 'react';
import {
  Heading,
  Text,
  Divider,
  List,
  Box,
  Stack,
  Columns,
  Column,
  Card,
  IconPromote,
  Badge,
  Inline,
  Tiles,
  ContentBlock,
  OverflowMenu,
  MenuItem,
  TextLink,
  Button,
  Hidden,
  Strong,
  Bleed,
  PageBlock,
  Page,
  Spread,
} from 'braid-src/lib/components';
import { TextStack } from '../../../TextStack/TextStack';
import Code from '../../../Code/Code';
import tokens from 'braid-src/lib/themes/wireframe/tokens';
import type { Page as DocsPage } from '../../../../types';
import { ThemedExample } from '../../../ThemeSetting';
import { PageTitle } from '../../../Seo/PageTitle';
import { LinkableHeading } from '@braid-design-system/docs-ui';
import { ContainerForPageDocs } from 'braid-src/lib/components/Page/Page.docs';
import source from '@braid-design-system/source.macro';
import { Placeholder } from 'braid-src/lib/playroom/components';

type Space = 'none' | keyof typeof tokens.space;
const spaceScale = ['none', ...Object.keys(tokens.space)] as Space[];

const lipsum1 =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dignissim dapibus elit, vel egestas felis pharetra non. Cras malesuada, massa nec ultricies efficitur, lectus ante consequat magna, a porttitor massa ex ut quam.';

const lipsum2 =
  'Phasellus ipsum tortor, aliquet dapibus fermentum in, mollis vel metus. Vestibulum malesuada ante eu velit malesuada, nec ultricies sapien finibus. Aenean rutrum in sem a ullamcorper. Integer ut euismod urna. Interdum et malesuada fames ac ante ipsum primis in faucibus.';

const defaultPage = source(
  <Page
    footer={
      <Box background="promoteLight">
        <Placeholder label="Footer" height={100} />
      </Box>
    }
  >
    <Placeholder label="Header" height={50} />
    <Placeholder label="Content" height={50} />
  </Page>,
);
const belowFoldPage = source(
  <Page
    footer={
      <Box background="promoteLight">
        <Placeholder label="Footer" height={100} />
      </Box>
    }
    footerPosition="belowFold"
  >
    <Placeholder label="Header" height={50} />
    <Placeholder label="Content" height={50} />
  </Page>,
);
const sourceForDefaultPage = {
  code: defaultPage.code,
  value: <ContainerForPageDocs>{defaultPage.value}</ContainerForPageDocs>,
};
const sourceForBelowFoldPage = {
  code: belowFoldPage.code,
  value: <ContainerForPageDocs>{belowFoldPage.value}</ContainerForPageDocs>,
};

const page: DocsPage = {
  title: 'Layout',
  element: (
    <TextStack>
      <Heading component="h1" level="2">
        <PageTitle title="Layout Foundation" />
        Layout
      </Heading>
      <Text>
        The guiding principle for layout in Braid is that components should not
        provide surrounding white space. Instead, spacing between elements is
        owned entirely by layout components. This approach ensures that the
        system is as composable as possible while keeping white space completely
        predictable.
      </Text>
      <Text>
        All of the components referenced below can be infinitely nested within
        each other to create a wide variety of standard layouts. Getting a firm
        grasp of these components is an essential part of working effectively
        with Braid.
      </Text>

      <List>
        <Text>
          <TextLink href="#spacing">Spacing</TextLink>
        </Text>
        <Text>
          <TextLink href="#box">Box</TextLink>
        </Text>
        <Text>
          <TextLink href="#stack">Stack</TextLink>
        </Text>
        <Text>
          <TextLink href="#inline">Inline</TextLink>
        </Text>
        <Text>
          <TextLink href="#columns">Columns</TextLink>
        </Text>
        <Text>
          <TextLink href="#spread">Spread</TextLink>
        </Text>
        <Text>
          <TextLink href="#tiles">Tiles</TextLink>
        </Text>
        <Text>
          <TextLink href="#contentblock">ContentBlock</TextLink>
        </Text>
        <Text>
          <TextLink href="#pageblock">PageBlock</TextLink>
        </Text>
        <Text>
          <TextLink href="#page">Page</TextLink>
        </Text>
        <Text>
          <TextLink href="#bleed">Bleed</TextLink>
        </Text>
      </List>

      <Divider />

      <LinkableHeading>Spacing</LinkableHeading>
      <Text>
        Braid provides a standard white space scale that is available across the
        entire component suite. As much as possible, Braid tries to make use of
        this scale rather than generating custom spacing rules.
      </Text>
      <Stack space="small">
        {spaceScale
          .filter((s) => s !== 'gutter')
          .map((space) => (
            <Columns key={space} space="xsmall" alignY="center">
              <Column width="content">
                <Box style={{ width: 100 }}>
                  <Text baseline={false}>{space}</Text>
                </Box>
              </Column>
              <Column>
                <Box display="flex">
                  <ThemedExample transparent>
                    <Box
                      background="formAccent"
                      paddingLeft={space}
                      paddingTop="medium"
                    />
                  </ThemedExample>
                </Box>
              </Column>
            </Columns>
          ))}
      </Stack>

      <Text>
        In addition to the scale, Braid has a semantic value{' '}
        <Strong>gutter</Strong> — used to maintain consistent insets across
        components, e.g. <TextLink href="/components/Card">Card</TextLink>,{' '}
        <TextLink href="/components/Alert">Alert</TextLink>,{' '}
        <TextLink href="/components/Button">Button</TextLink>, etc. This value
        should only be used for aligning to this concept.
      </Text>

      <Columns space="xsmall" alignY="center">
        <Column width="content">
          <Box style={{ width: 100 }}>
            <Text baseline={false}>gutter</Text>
          </Box>
        </Column>
        <Column>
          <Box display="flex">
            <ThemedExample transparent>
              <Box
                background="formAccent"
                paddingLeft="gutter"
                paddingTop="medium"
              />
            </ThemedExample>
          </Box>
        </Column>
      </Columns>

      <Divider />

      <LinkableHeading>Box</LinkableHeading>
      <Text>
        <TextLink href="/components/Box">Box</TextLink> is the most low-level
        layout component provided by Braid. Its job is to render an individual
        element on the screen.
      </Text>
      <Text>
        In terms of page layout, Box most notably provides a set of padding
        options which can be used to create container elements with internal
        spacing.
      </Text>
      <List>
        <Text>padding</Text>
        <Text>paddingX</Text>
        <Text>paddingY</Text>
        <Text>paddingTop</Text>
        <Text>paddingBottom</Text>
        <Text>paddingLeft</Text>
        <Text>paddingRight</Text>
      </List>
      <Text>These options accept a value from our white space scale.</Text>
      <Text>
        For example, if you wanted to create a container element with small
        spacing on all sides:
      </Text>
      <Code>
        {source(
          <Box padding="small">
            <Text>Lorem ipsum dolor sit amet.</Text>
          </Box>,
        )}
      </Code>
      <Text>
        These also support the ‘responsive props’ format which allows you to
        specify a set of values for different screen sizes.
      </Text>
      <Text>
        For example, if you wanted small spacing on mobile but medium spacing
        from tablet upwards:
      </Text>
      <Code>
        {source(
          <Box padding={{ mobile: 'small', tablet: 'medium' }}>
            <Text>Lorem ipsum dolor sit amet.</Text>
          </Box>,
        )}
      </Code>
      <Text>
        If required, you’re also able to specify different values for larger
        screens.
      </Text>
      <Text>
        For example, if you wanted to set the previous example’s spacing to
        large on desktop and xlarge on wide:
      </Text>
      <Code>
        {source(
          <Box
            padding={{
              mobile: 'small',
              tablet: 'medium',
              desktop: 'large',
              wide: 'xlarge',
            }}
          >
            <Text>Lorem ipsum dolor sit amet.</Text>
          </Box>,
        )}
      </Code>

      <Divider />

      <LinkableHeading>Stack</LinkableHeading>
      <Text>
        The most common white space on screen is between elements stacked
        vertically. For this use case, Braid provides a{' '}
        <TextLink href="/components/Stack">Stack</TextLink> component that
        accepts a ‘space’ prop.
      </Text>
      <Text>
        For example, if you wanted to render a stack of{' '}
        <TextLink href="/components/Heading">Heading</TextLink> and{' '}
        <TextLink href="/components/Text">Text</TextLink> elements with large
        spacing between them:
      </Text>
      <Code>
        {source(
          <Stack space="large">
            <Heading level="3">Heading</Heading>
            <Text>{lipsum1}</Text>
            <Text>{lipsum2}</Text>
          </Stack>,
        )}
      </Code>
      <Text>
        Just like <TextLink href="#box">Box</TextLink>, you can also specify
        different spacing values for different screen sizes:
      </Text>
      <Code>
        {source(
          <Stack space={{ mobile: 'medium', tablet: 'large' }}>
            <Heading level="3">Heading</Heading>
            <Text>{lipsum1}</Text>
            <Text>{lipsum2}</Text>
          </Stack>,
        )}
      </Code>
      <Text>
        To visually break up content, you can insert dividers between all stack
        elements by setting the{' '}
        <TextLink href="/components/Stack#dividers">dividers</TextLink> prop on
        Stack:
      </Text>
      <Code>
        {source(
          <Stack space="large" dividers={true}>
            <Heading level="3">Heading</Heading>
            <Text>{lipsum1}</Text>
            <Text>{lipsum2}</Text>
          </Stack>,
        )}
      </Code>
      <Text>
        If you’d prefer to take control over the placement of dividers, you can
        use the <TextLink href="/components/Divider">Divider</TextLink>{' '}
        component directly:
      </Text>
      <Code>
        {source(
          <Stack space="large">
            <Heading level="3">Heading</Heading>
            <Text>{lipsum1}</Text>
            <Divider />
            <Text>{lipsum2}</Text>
          </Stack>,
        )}
      </Code>
      <Text>
        Multiple <TextLink href="/components/Stack">Stack</TextLink> components
        can be nested to create more complex white space rules. For example, if
        you wanted to create multiple grouped blocks of text like you might see
        in a <TextLink href="/components/Card">Card</TextLink>:
      </Text>
      <Code>
        {source(
          <Card>
            <Stack space="large">
              <Heading level="4">Heading</Heading>
              <Stack space="small">
                <Text>Line 1</Text>
                <Text>Line 2</Text>
                <Text>Line 3</Text>
              </Stack>
              <Stack space="small">
                <Text>Line 1</Text>
                <Text>Line 2</Text>
                <Text>Line 3</Text>
              </Stack>
            </Stack>
          </Card>,
        )}
      </Code>
      <Text>
        <TextLink href="/components/Stack">Stack</TextLink> also supports
        horizontal alignment. For example, if you wanted to centre align all of
        its content:
      </Text>
      <Code>
        {source(
          <Stack space="medium" align="center">
            <IconPromote tone="promote" />
            <Badge tone="promote">Badge</Badge>
            <Heading align="center" level="4">
              Heading Text
            </Heading>
            <Text align="center" tone="secondary">
              Lorem ipsum dolor sit amet.
            </Text>
          </Stack>,
        )}
      </Code>
      <Text>
        Individual stack items can be hidden on different screen sizes by
        wrapping them with the{' '}
        <TextLink href="/components/Hidden">Hidden</TextLink> component. For
        example, if you wanted to hide the second item in a stack on mobile:
      </Text>
      <Code>
        {source(
          <Stack space="medium" align="center">
            <Text>Item 1</Text>
            <Hidden below="tablet">
              <Text>Item 2</Text>
            </Hidden>
            <Text>Item 3</Text>
          </Stack>,
        )}
      </Code>

      <Divider />

      <LinkableHeading>Inline</LinkableHeading>
      <Text>
        If you’d like to render a set of components in a row with equal spacing
        around them, wrapping onto multiple lines when necessary, Braid provides
        an <TextLink href="/components/Inline">Inline</TextLink> component:
      </Text>

      <Code>
        {source(
          <Inline space="small">
            <Badge>Lorem ipsum</Badge>
            <Badge>Dolor</Badge>
            <Badge>Sit amet</Badge>
            <Badge>Consectetur</Badge>
            <Badge>Adipiscing elit</Badge>
            <Badge>Suspendisse dignissim</Badge>
            <Badge>Dapibus elit</Badge>
            <Badge>Vel egestas felis</Badge>
            <Badge>Pharetra non</Badge>
          </Inline>,
        )}
      </Code>

      <Text>
        Similar to <TextLink href="#stack">Stack</TextLink>,{' '}
        <TextLink href="/components/Inline">Inline</TextLink> also supports
        horizontal alignment of its children:
      </Text>

      <Code>
        {source(
          <Inline space="small" align="center">
            <Badge>Lorem ipsum</Badge>
            <Badge>Dolor</Badge>
            <Badge>Sit amet</Badge>
          </Inline>,
        )}
      </Code>

      <Text>
        If you’d like the items to stack vertically on smaller screens, you can
        provide the{' '}
        <TextLink href="/components/Inline#collapsing-across-breakpoints">
          collapseBelow
        </TextLink>{' '}
        prop.
      </Text>
      <Text>
        For example, if you wanted buttons to be rendered vertically on mobile
        but horizontally from tablet upwards:
      </Text>
      <Code>
        {source(
          <Inline space="small" collapseBelow="tablet">
            <Button>Submit</Button>
            <Button variant="ghost">Cancel</Button>
          </Inline>,
        )}
      </Code>

      <Divider />

      <LinkableHeading>Columns</LinkableHeading>
      <Text>
        If you need to lay out content horizontally, Braid provides the{' '}
        <TextLink href="/components/Columns">Columns</TextLink> and{' '}
        <Strong>Column</Strong> components:
      </Text>
      <Code>
        {source(
          <Columns space="small">
            <Column>
              <Card>
                <Text>Column 1</Text>
              </Card>
            </Column>
            <Column>
              <Card>
                <Text>Column 2</Text>
              </Card>
            </Column>
          </Columns>,
        )}
      </Code>
      <Text>
        Similar to <TextLink href="#inline">Inline</TextLink>, if you’d like the
        columns to stack vertically on smaller screens, you can provide the{' '}
        <TextLink href="/components/Columns#collapsing-across-breakpoints">
          collapseBelow
        </TextLink>{' '}
        prop.
      </Text>
      <Text>
        For example, if you wanted cards to be rendered vertically on mobile but
        horizontally from tablet upwards:
      </Text>
      <Code>
        {source(
          <Columns space="small" collapseBelow="tablet">
            <Column>
              <Card>
                <Text>Column 1</Text>
              </Card>
            </Column>
            <Column>
              <Card>
                <Text>Column 2</Text>
              </Card>
            </Column>
          </Columns>,
        )}
      </Code>
      <Text>
        All columns are of equal width by default, but you can also customise
        the <TextLink href="/components/Columns#column-widths">width</TextLink>{' '}
        of each column individually.
      </Text>
      <Text>
        For example, if you wanted to render a main content area and a sidebar,
        collapsing to a single column on mobile:
      </Text>
      <Code>
        {source(
          <Columns space="small" collapseBelow="tablet">
            <Column width="1/3">
              <Card>
                <Text>Sidebar</Text>
              </Card>
            </Column>
            <Column>
              <Card>
                <Text>Main content</Text>
              </Card>
            </Column>
          </Columns>,
        )}
      </Code>
      <Text>
        If you want a column to be as small as possible, you can also set its
        width to <Strong>content</Strong> which ensures that it’s only as wide
        as the content within it.
      </Text>
      <Text>
        For example, if you wanted a column to be as large as its illustration
        followed by a second column that filled the space:
      </Text>
      <Code>
        {source(
          <Card>
            <Columns space="medium" alignY="center">
              <Column width="content">
                <Placeholder
                  shape="round"
                  height={128}
                  width={128}
                  label="Illustration"
                />
              </Column>
              <Column>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse dignissim dapibus elit, vel egestas felis pharetra
                  non. Cras malesuada, massa nec ultricies efficitur, lectus
                  ante consequat magna, a porttitor massa ex ut quam.
                </Text>
              </Column>
            </Columns>
          </Card>,
        )}
      </Code>
      <Text>
        By default, columns are rendered in document order, which also doubles
        as the screen reader order. If you need the columns to be visually
        reversed on larger screens, you can provide the{' '}
        <TextLink href="/components/Columns#reversing-the-column-order">
          reverse
        </TextLink>{' '}
        option:
      </Text>
      <Code>
        {source(
          <Columns space="small" collapseBelow="tablet" reverse>
            <Column width="1/3">
              <Card>
                <Text>Sidebar</Text>
              </Card>
            </Column>
            <Column>
              <Card>
                <Text>Main content</Text>
              </Card>
            </Column>
          </Columns>,
        )}
      </Code>
      <Text>
        If you have columns that are of varying height, you can center them
        vertically with the{' '}
        <TextLink href="/components/Columns#vertical-alignment">
          alignY
        </TextLink>{' '}
        prop:
      </Text>
      <Code>
        {source(
          <Columns space="small" alignY="center">
            <Column>
              <Card>
                <Stack space="medium" align="center">
                  <Text>Column</Text>
                  <Text>Column</Text>
                </Stack>
              </Card>
            </Column>
            <Column>
              <Card>
                <Stack space="medium" align="center">
                  <Text>Column</Text>
                  <Text>Column</Text>
                  <Text>Column</Text>
                  <Text>Column</Text>
                </Stack>
              </Card>
            </Column>
            <Column>
              <Card>
                <Stack space="medium" align="center">
                  <Text>Column</Text>
                  <Text>Column</Text>
                </Stack>
              </Card>
            </Column>
          </Columns>,
        )}
      </Code>

      <Divider />

      <LinkableHeading>Spread</LinkableHeading>
      <Text>
        If you’d like to spread components to opposite ends of a container while
        maintaining a minimum amount of space in between them, Braid provides
        the <TextLink href="/components/Spread">Spread</TextLink> component.
      </Text>

      <Text>
        An example might be a card with a left-aligned{' '}
        <TextLink href="/components/Heading">Heading</TextLink> and a
        right-aligned{' '}
        <TextLink href="/components/OverflowMenu">OverflowMenu</TextLink>:
      </Text>

      <Code>
        {source(
          <Card>
            <Spread space="small">
              <Heading level="4">Heading</Heading>
              <OverflowMenu label="Options">
                <MenuItem>First</MenuItem>
                <MenuItem>Second</MenuItem>
              </OverflowMenu>
            </Spread>
          </Card>,
        )}
      </Code>

      <Text>
        By default, components will be spread horizontally but you can change
        the direction to vertical by providing the{' '}
        <TextLink href="/components/Spread#direction">direction</TextLink> prop.
      </Text>

      <Text>
        This is useful when aligning content vertically across containers while
        maintaining predicatable spacing — particularly when wrapping text comes
        into play.
      </Text>

      <Code collapsedByDefault>
        {source(
          <Tiles space="small" columns={3}>
            <Card height="full">
              <Spread space="medium" direction="vertical">
                <Text>
                  Minim aliqua nulla id excepteur labore amet do dolore.
                </Text>
                <Text tone="secondary">Duis</Text>
              </Spread>
            </Card>
            <Card height="full">
              <Spread space="medium" direction="vertical">
                <Text>Minim aliqua nulla id.</Text>
                <Text tone="secondary">Duis</Text>
              </Spread>
            </Card>
            <Card height="full">
              <Spread space="medium" direction="vertical">
                <Text>Minim aliqua nulla id excepteur labore.</Text>
                <Text tone="secondary">Duis</Text>
              </Spread>
            </Card>
          </Tiles>,
        )}
      </Code>

      <Divider />

      <LinkableHeading>Tiles</LinkableHeading>
      <Text>
        If you’d like to render a grid of components with equal spacing between
        them, Braid provides a{' '}
        <TextLink href="/components/Tiles">Tiles</TextLink> component:
      </Text>

      <Code>
        {source(
          <Tiles columns={3} space="small">
            <Card>
              <Text>Tile</Text>
            </Card>
            <Card>
              <Text>Tile</Text>
            </Card>
            <Card>
              <Text>Tile</Text>
            </Card>
            <Card>
              <Text>Tile</Text>
            </Card>
            <Card>
              <Text>Tile</Text>
            </Card>
            <Card>
              <Text>Tile</Text>
            </Card>
            <Card>
              <Text>Tile</Text>
            </Card>
            <Card>
              <Text>Tile</Text>
            </Card>
            <Card>
              <Text>Tile</Text>
            </Card>
          </Tiles>,
        )}
      </Code>

      <Text>
        If you need to customise the spacing and number of columns per screen
        size, the{' '}
        <TextLink href="/components/Tiles#number-of-columns">columns</TextLink>{' '}
        prop is responsive. For example, if you wanted a single column on mobile
        and three columns from tablet upwards:
      </Text>

      <Code>
        {source(
          <Tiles
            columns={{ mobile: 1, tablet: 3 }}
            space={{ mobile: 'xsmall', tablet: 'small' }}
          >
            <Card>
              <Text>Tile</Text>
            </Card>
            <Card>
              <Text>Tile</Text>
            </Card>
            <Card>
              <Text>Tile</Text>
            </Card>
            <Card>
              <Text>Tile</Text>
            </Card>
            <Card>
              <Text>Tile</Text>
            </Card>
            <Card>
              <Text>Tile</Text>
            </Card>
            <Card>
              <Text>Tile</Text>
            </Card>
            <Card>
              <Text>Tile</Text>
            </Card>
            <Card>
              <Text>Tile</Text>
            </Card>
          </Tiles>,
        )}
      </Code>

      <Text>
        When the tiles are collapsed to a single column, you can optionally show
        dividers between them with the{' '}
        <TextLink href="/components/Tiles#dividers">dividers</TextLink> prop:
      </Text>

      <Code>
        {source(
          <Tiles
            columns={{ mobile: 1, tablet: 3 }}
            space={{ mobile: 'none', tablet: 'small' }}
            dividers
          >
            <Card>
              <Text>Tile</Text>
            </Card>
            <Card>
              <Text>Tile</Text>
            </Card>
            <Card>
              <Text>Tile</Text>
            </Card>
            <Card>
              <Text>Tile</Text>
            </Card>
            <Card>
              <Text>Tile</Text>
            </Card>
            <Card>
              <Text>Tile</Text>
            </Card>
            <Card>
              <Text>Tile</Text>
            </Card>
            <Card>
              <Text>Tile</Text>
            </Card>
            <Card>
              <Text>Tile</Text>
            </Card>
          </Tiles>,
        )}
      </Code>

      <Divider />

      <LinkableHeading>ContentBlock</LinkableHeading>
      <Text>
        By default, all layout components will render full width. However, most
        applications will want to limit the width of content on the screen. In
        order to address this, Braid provides the{' '}
        <TextLink href="/components/ContentBlock">ContentBlock</TextLink>{' '}
        component that sets a maximum width and horizontally center-aligns the
        block by default.
      </Text>
      <Code>
        {source(
          <ContentBlock>
            <Card>
              <Text>Hello World</Text>
            </Card>
          </ContentBlock>,
        )}
      </Code>
      <Text>
        If you’d like to increase or decrease the width of the block, you can
        optionally provide the{' '}
        <TextLink href="/components/ContentBlock#maximum-width">width</TextLink>{' '}
        prop:
      </Text>
      <Code>
        {source(
          <ContentBlock width="small">
            <Card>
              <Text>Hello World</Text>
            </Card>
          </ContentBlock>,
        )}
      </Code>
      <Text>
        To manage line length or form field sizes you may choose to left-align
        the block. This can be done via the{' '}
        <TextLink href="/components/ContentBlock#alignment">align</TextLink>{' '}
        prop:
      </Text>
      <Code>
        {source(
          <ContentBlock width="small" align="left">
            <Card>
              <Text>Hello World</Text>
            </Card>
          </ContentBlock>,
        )}
      </Code>

      <Divider />

      <LinkableHeading>PageBlock</LinkableHeading>
      <Text>
        For top-level sections, in addition to limiting the width of content on
        the screen, it is also important to standardise the gutter between
        content and the edge of the screen. For this Braid provides the{' '}
        <TextLink href="/components/PageBlock">PageBlock</TextLink> component,
        which defines responsive gutters around a{' '}
        <TextLink href="#contentblock">ContentBlock</TextLink>.
      </Text>
      <Code>
        {source(
          <PageBlock>
            <Card>
              <Text>Hello World</Text>
            </Card>
          </PageBlock>,
        )}
      </Code>
      <Text>
        To standardise our page-level block widths, the{' '}
        <TextLink href="/components/PageBlock#maximum-width">width</TextLink>{' '}
        prop accepts either <Strong>small</Strong>, <Strong>medium</Strong> or{' '}
        <Strong>large</Strong>.
      </Text>
      <Code>
        {source(
          <PageBlock width="large">
            <Card>
              <Text>Hello World</Text>
            </Card>
          </PageBlock>,
        )}
      </Code>

      <Text>
        Additionally, a{' '}
        <TextLink href="/components/PageBlock">PageBlock</TextLink> can also
        choose a{' '}
        <TextLink href="/components/PageBlock#maximum-width">width</TextLink> of{' '}
        <Strong>full</Strong>. This allows content to extend to the full
        available width while still maintaining the standard responsive gutters.
      </Text>

      <Divider />

      <LinkableHeading>Page</LinkableHeading>
      <Text>
        For establishing consistent page-level layout, Braid provides the{' '}
        <TextLink href="/components/Page">Page</TextLink> component —
        responsible for managing the relationship between the footer and the
        main content. This ensures at a minimum the footer is always positioned
        at the bottom of the screen, pushed beyond as the page content grows.
      </Text>
      <Code>{sourceForDefaultPage}</Code>
      <Text>
        For pages with dynamic content it is recommended to place the footer out
        of view by setting the <Strong>footerPosition</Strong> prop to{' '}
        <Strong>belowFold</Strong>. This prevents the footer from popping in and
        out of view when the page content changes, e.g. toggling between a
        loading indicator and content.
      </Text>
      <Code>{sourceForBelowFoldPage}</Code>

      <Divider />

      <LinkableHeading>Bleed</LinkableHeading>
      <Text>
        Sometimes it is necessary for a component to extend out into it&rsquo;s
        surrounding layout. We can achieve this using the{' '}
        <TextLink href="/components/Bleed">Bleed</TextLink> component.
      </Text>
      <Text>
        Consider the following example where we have a <Strong>Card</Strong>{' '}
        containing a header image, a <Strong>Heading</Strong> and some{' '}
        <Strong>Text</Strong>. The <Strong>Card</Strong> applies internal
        spacing, indenting the content from the edges of the container.
      </Text>
      <Code>
        {source(
          <Card>
            <Stack space="large">
              <Placeholder height={200} label="Header Image" />
              <Heading level="3">Heading</Heading>
              <Text>Text content</Text>
            </Stack>
          </Card>,
        )}
      </Code>
      <Text>
        If we want the image to run to the edges of the container, we can wrap
        it in a <Strong>Bleed</Strong> and define which direction and how far we
        want the image to bleed into the surrounding layout.
      </Text>
      <Text>
        In this case, let&rsquo;s bleed{' '}
        <TextLink href="/components/Bleed#horizontal">horizontally</TextLink>{' '}
        and also out the{' '}
        <TextLink href="/components/Bleed#specific-direction">top</TextLink>:
      </Text>
      <Code>
        {source(
          <Card>
            <Stack space="large">
              <Bleed horizontal="gutter" top="gutter">
                <Placeholder height={200} label="Header Image" />
              </Bleed>
              <Heading level="3">Heading</Heading>
              <Text>Text content</Text>
            </Stack>
          </Card>,
        )}
      </Code>
      <Text>
        Given this is achieved using negative margins, it is important to ensure
        that size and direction of the bleed is accommodated by the parent
        layout. In this case, ensure we do not choose bleed values that exceed
        the indent of the parent <Strong>Card</Strong> component.
      </Text>
    </TextStack>
  ),
};

export default page;
