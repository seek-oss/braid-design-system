import React from 'react';
import { useStyles } from 'sku/treat';
import {
  Heading,
  Text,
  Divider,
  BulletList,
  Bullet,
  Box,
  Stack,
  Columns,
  Column,
  Card,
  IconPromote,
  Badge,
  Inline,
  ContentBlock,
  OverflowMenu,
  OverflowMenuItem,
  TextLink,
} from '../../../../../lib/components';
import { HeadingProps } from '../../../../../lib/components/Heading/Heading';
import { TextStack } from '../../TextStack/TextStack';
import Code from '../../Code/Code';
import tokens from '../../../../../lib/themes/wireframe/tokens';
import { Page } from '../../../types';
import * as styleRefs from './layout.treat';

interface LinkableHeadingProps {
  level?: HeadingProps['level'];
  children: string;
}
const LinkableHeading = ({ children, level = '3' }: LinkableHeadingProps) => {
  const styles = useStyles(styleRefs);
  const slug = children.toLowerCase().replace(/ /, '-');

  return (
    <Box className={styles.linkableHeading}>
      <Box id={slug} position="absolute" className={styles.hashAnchor} />
      <Heading level={level}>
        {children}{' '}
        <Box component="span" transition="fast" className={styles.hashLink}>
          <TextLink href={`#${slug}`}>#</TextLink>
        </Box>
      </Heading>
    </Box>
  );
};

type Space = 'none' | keyof typeof tokens.space;
const spaceScale = ['none', ...Object.keys(tokens.space)] as Space[];

const lipsum1 =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dignissim dapibus elit, vel egestas felis pharetra non. Cras malesuada, massa nec ultricies efficitur, lectus ante consequat magna, a porttitor massa ex ut quam.';

const lipsum2 =
  'Phasellus ipsum tortor, aliquet dapibus fermentum in, mollis vel metus. Vestibulum malesuada ante eu velit malesuada, nec ultricies sapien finibus. Aenean rutrum in sem a ullamcorper. Integer ut euismod urna. Interdum et malesuada fames ac ante ipsum primis in faucibus.';

const page: Page = {
  title: 'Layout',
  Component: () => {
    return (
      <TextStack>
        <Heading level="2">Layout</Heading>
        <Text>
          The guiding principle for layout in Braid is that components should
          not provide surrounding white space. Instead, spacing between elements
          is owned entirely by layout components. This approach ensures that the
          system is as composable as possible while keeping white space
          completely predictable.
        </Text>
        <Text>
          All of the components referenced below can be infinitely nested within
          each other to create a wide variety of standard layouts. Getting a
          firm grasp of these components is an essential part of working
          effectively with Braid.
        </Text>

        <Divider />

        <LinkableHeading>Spacing</LinkableHeading>
        <Text>
          Braid provides a standard white space scale that is available across
          the entire component suite. As much as possible, Braid tries to make
          use of this scale rather than generating custom spacing rules.
        </Text>
        <Stack space="small">
          {spaceScale.map(space => (
            <Columns key={space} space="xsmall" alignY="center">
              <Column width="content">
                <Box style={{ width: 100 }}>
                  <Text baseline={false}>{space}</Text>
                </Box>
              </Column>
              <Column>
                <Box display="flex">
                  <Box
                    background="formAccent"
                    paddingLeft={space}
                    paddingTop="medium"
                  />
                </Box>
              </Column>
            </Columns>
          ))}
        </Stack>
        <Text tone="secondary" size="small">
          Note: The exact pixel values in this scale may vary betweeen themes.
        </Text>

        <Divider />

        <LinkableHeading>Box</LinkableHeading>
        <Text>
          ‘Box’ is the most low-level layout component provided by Braid. Its
          job is to render an individual element on the screen.
        </Text>
        <Text>
          In terms of page layout, ‘Box’ most notably provides a set of padding
          options which can be used to create container elements with internal
          spacing.
        </Text>
        <BulletList>
          <Bullet>padding</Bullet>
          <Bullet>paddingX</Bullet>
          <Bullet>paddingY</Bullet>
          <Bullet>paddingTop</Bullet>
          <Bullet>paddingBottom</Bullet>
          <Bullet>paddingLeft</Bullet>
          <Bullet>paddingRight</Bullet>
        </BulletList>
        <Text>These options accept a value from our white space scale.</Text>
        <Text>
          For example, if you wanted to create a container element with small
          spacing on all sides:
        </Text>
        <Code>
          <Box padding="small">
            <Text>Lorem ipsum dolor sit amet.</Text>
          </Box>
        </Code>
        <Text>
          These also support the ‘responsive props’ format which allows you to
          specify an array of values for different screen sizes.
        </Text>
        <Text>
          For example, if you wanted small spacing on mobile but medium spacing
          from tablet upwards:
        </Text>
        <Code>
          <Box padding={['small', 'medium']}>
            <Text>Lorem ipsum dolor sit amet.</Text>
          </Box>
        </Code>
        <Text>
          If required, you’re also able to specify a different value for desktop
          screens.
        </Text>
        <Text>
          For example, if you wanted to set the previous example’s spacing to
          large on desktop:
        </Text>
        <Code>
          <Box padding={['small', 'medium', 'large']}>
            <Text>Lorem ipsum dolor sit amet.</Text>
          </Box>
        </Code>

        <Divider />

        <LinkableHeading>Card</LinkableHeading>
        <Text>
          Rather than nesting content in arbitrary ‘Box’ elements, you may
          prefer to use standard ‘Card’ elements instead.
        </Text>
        <Code>
          <Card>
            <Text>Lorem ipsum dolor sit amet.</Text>
          </Card>
        </Code>

        <Divider />

        <LinkableHeading>Stack</LinkableHeading>
        <Text>
          The most common white space on screen is between elements stacked
          vertically. For this use case, Braid provides a ‘Stack’ component that
          accepts a ‘space’ prop.
        </Text>
        <Text>
          For example, if you wanted to render a stack of ‘Heading’ and ‘Text’
          elements with large spacing between them:
        </Text>
        <Code>
          <Card>
            <Stack space="large">
              <Heading level="3">Heading</Heading>
              <Text>{lipsum1}</Text>
              <Text>{lipsum2}</Text>
            </Stack>
          </Card>
        </Code>
        <Text>
          Just like ‘Box’, you can also specify different spacing values for
          different screen sizes:
        </Text>
        <Code>
          <Card>
            <Stack space={['medium', 'large']}>
              <Heading level="3">Heading</Heading>
              <Text>{lipsum1}</Text>
              <Text>{lipsum2}</Text>
            </Stack>
          </Card>
        </Code>
        <Text>
          To visually break up content, you can insert dividers between all
          stack elements by setting the ‘dividers’ prop on Stack:
        </Text>
        <Code>
          <Card>
            <Stack space="gutter" dividers={true}>
              <Heading level="3">Heading</Heading>
              <Text>{lipsum1}</Text>
              <Text>{lipsum2}</Text>
            </Stack>
          </Card>
        </Code>
        <Text>
          If you’d prefer to take control over the placement of dividers, you
          can use the ‘Divider’ component directly:
        </Text>
        <Code>
          <Card>
            <Stack space="gutter">
              <Heading level="3">Heading</Heading>
              <Text>{lipsum1}</Text>
              <Divider />
              <Text>{lipsum2}</Text>
            </Stack>
          </Card>
        </Code>
        <Text>
          Multiple ‘Stack’ components can be nested to create more complex white
          space rules. For example, if you wanted to create multiple grouped
          blocks of text like you might see on a job summary card:
        </Text>
        <Code>
          <Card>
            <Stack space="gutter">
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
          </Card>
        </Code>
        <Text>
          ‘Stack’ also supports horizontal alignment. For example, if you wanted
          to centre align all content within a card:
        </Text>
        <Code>
          <Card>
            <Stack space="medium" align="center">
              <IconPromote tone="promote" />
              <Badge tone="promote">Badge</Badge>
              <Heading align="center" level="4">
                Heading Text
              </Heading>
              <Text align="center" tone="secondary">
                Lorem ipsum dolor sit amet.
              </Text>
            </Stack>
          </Card>
        </Code>

        <Divider />

        <LinkableHeading>Inline</LinkableHeading>
        <Text>
          If you’d like to render a set of components in a row with equal
          spacing around them, wrapping onto multiple lines when necessary,
          Braid provides an ‘Inline’ component:
        </Text>

        <Code>
          <Card>
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
            </Inline>
          </Card>
        </Code>

        <Text>
          Similar to ‘Stack’, ‘Inline’ also supports horizontal alignment of its
          children:
        </Text>

        <Code>
          <Card>
            <Inline space="small" align="center">
              <Badge>Lorem ipsum</Badge>
              <Badge>Dolor</Badge>
              <Badge>Sit amet</Badge>
            </Inline>
          </Card>
        </Code>

        <Divider />

        <LinkableHeading>Columns</LinkableHeading>
        <Text>
          If you need to lay out content horizontally, Braid provides the
          ‘Columns’ and ‘Column’ components:
        </Text>
        <Code>
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
          </Columns>
        </Code>
        <Text>
          If you’d like the columns to stack vertically on smaller screens, you
          can provide the ‘collapseBelow’ prop.
        </Text>
        <Text>
          For example, if you wanted cards to be rendered vertically on mobile
          but horizontally from tablet upwards:
        </Text>
        <Code>
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
          </Columns>
        </Code>
        <Text>
          All columns are of equal width by default, but you can also customise
          the width of each column individually.
        </Text>
        <Text>
          For example, if you wanted to render a main content area and a
          sidebar, collapsing to a single column on mobile:
        </Text>
        <Code>
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
          </Columns>
        </Code>
        <Text>
          If you want a column to be as small as possible, you can also set its
          width to ‘content’ which ensures that it’s only as wide as the content
          within it.
        </Text>
        <Text>
          For example, if you wanted a card with a left-aligned ‘Heading’ and a
          right-aligned ‘OverflowMenu’:
        </Text>
        <Code>
          <Card>
            <Stack space="medium">
              <Columns space="small">
                <Column>
                  <Heading level="3">Card heading</Heading>
                </Column>
                <Column width="content">
                  <OverflowMenu label="Options">
                    <OverflowMenuItem
                      onClick={() => {
                        /* */
                      }}
                    >
                      First
                    </OverflowMenuItem>
                    <OverflowMenuItem
                      onClick={() => {
                        /* */
                      }}
                    >
                      Second
                    </OverflowMenuItem>
                  </OverflowMenu>
                </Column>
              </Columns>
              <Text>Card content</Text>
            </Stack>
          </Card>
        </Code>
        <Text>
          By default, columns are rendered in document order, which also doubles
          as the screen reader order. If you need the columns to be visually
          reversed on larger screens, you can provide the ‘reverse’ option:
        </Text>
        <Code>
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
          </Columns>
        </Code>
        <Text>
          If you have ‘Column’ elements that are of varying height, you can
          center them vertically with the ‘alignY’ prop:
        </Text>
        <Code>
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
          </Columns>
        </Code>

        <Divider />

        <LinkableHeading>ContentBlock</LinkableHeading>
        <Text>
          By default, all layout components will render full width. However,
          most applications will want to limit the width of content on the
          screen. In order to address this, Braid provides the ‘ContentBlock’
          component that sets a maximum width and centres content horizontally.
        </Text>
        <Code>
          <ContentBlock>
            <Card>
              <Text>Hello World</Text>
            </Card>
          </ContentBlock>
        </Code>
        <Text>
          If you’d like a larger content block, you can optionally provide the
          ‘width’ prop:
        </Text>
        <Code>
          <ContentBlock width="large">
            <Card>
              <Text>Hello World</Text>
            </Card>
          </ContentBlock>
        </Code>
      </TextStack>
    );
  },
};

export default page;
