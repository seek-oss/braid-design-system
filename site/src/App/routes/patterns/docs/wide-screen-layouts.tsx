import source from '@braid-design-system/source.macro';
import {
  Box,
  Button,
  Card,
  Column,
  Columns,
  Drawer,
  Heading,
  Hidden,
  IconArrow,
  Inline,
  List,
  PageBlock,
  Stack,
  Strong,
  Text,
  TextLink,
  Tiles,
} from 'braid-design-system';
import { Placeholder } from 'braid-design-system/playroom/components';

import type { PatternDocs } from '../../../../types';

import * as styles from './wide-screen-layouts.css';

export const docs: PatternDocs = {
  description: (
    <Text>
      How to tailor page width and layout to balance readability, scannability,
      and adaptability across devices.
    </Text>
  ),
  alternatives: [
    {
      name: 'layout',
      section: 'foundations',
      description:
        'Foundations document that outlines all available layout components and how to use them.',
    },
  ],
  accessibility: (
    <List space="large">
      <Text>
        Keep line lengths to around 12&ndash;15 words (size{' '}
        <Strong>standard</Strong>{' '}
        <TextLink href="/components/Text">Text</TextLink> naturally wraps to
        this length in a <Strong>small</Strong> content width). This improves
        focus, reading speed, and comfort for users with low vision, dyslexia,
        or cognitive load sensitivities, including on mobile or when zoomed in.
      </Text>
      <Text>
        Horizontal scrolling should always be intentional. Keep focus states for
        keyboard navigation, and avoid scrolling continuous text horizontally.
      </Text>
    </List>
  ),
  docSections: {
    bestPractices: [
      {
        label: 'General best practice',
        description: (
          <List space="large">
            <Text>
              Limit content width on large screens so line lengths stay
              readable.
            </Text>
            <Text>
              Test with customers and align related products for consistency.
            </Text>
            <Text>
              On smaller screens, stack content or move it into a{' '}
              <TextLink href="/components/Drawer">Drawer</TextLink>, sheet, or
              page.
            </Text>
            <Text>Use horizontal scroll only when it adds value.</Text>
            <Text>
              Use <TextLink href="/components/PageBlock">PageBlock</TextLink> as
              the top-level page container. Nest{' '}
              <TextLink href="/components/ContentBlock">ContentBlock</TextLink>{' '}
              when a section needs a narrower measure, for example body copy
              inside a full-width layout.
            </Text>
          </List>
        ),
      },
      {
        label: 'Examples',
        description: (
          <Text>
            The examples below are a small sample of wide-screen layouts. The
            principles can be combined to meet your particular requirements.
            Resize the browser window to see how they adapt.
          </Text>
        ),
      },
      {
        description: (
          <>
            <Heading level="4">
              Full-width responsive — collapsing to stack
            </Heading>
            <List space="large">
              <Text>Content runs full width on all screen sizes</Text>
              <Text>Content stacks vertically on smaller screens</Text>
              <Text>Avoid long line lengths in wider views</Text>
            </List>
          </>
        ),
        Example: () =>
          source(
            <Stack space="medium">
              <Placeholder
                height={100}
                label="This area expands to full screen width on all screen sizes"
              />
              <Columns space="medium" collapseBelow="desktop">
                <Column>
                  <Placeholder height={300} label="Content area 1" />
                </Column>
                <Column width="1/2">
                  <Placeholder height={300} label="Content area 2" />
                </Column>
                <Column>
                  <Placeholder height={200} label="Content area 3" />
                </Column>
              </Columns>
            </Stack>,
          ),
      },
      {
        description: (
          <>
            <Heading level="4">
              Full-width responsive — moving content to a drawer
            </Heading>
            <List space="large">
              <Text>Content runs full width on all screen sizes</Text>
              <Text>
                Sections that can&rsquo;t be stacked on smaller screens can be
                moved to a <TextLink href="/components/Drawer">Drawer</TextLink>{' '}
                or separate page
              </Text>
            </List>
          </>
        ),
        Example: ({ getState, setState, setDefaultState }) =>
          source(
            <>
              {setDefaultState('drawerOpen', false)}
              <Stack space="gutter">
                <Placeholder
                  height={100}
                  label="This area expands to full screen width on all screen sizes"
                />
                <Hidden above="tablet">
                  <Inline space="none" align="right">
                    <Button
                      icon={<IconArrow direction="right" />}
                      iconPosition="trailing"
                      onClick={() => setState('drawerOpen', true)}
                    >
                      Access Content area 3
                    </Button>
                  </Inline>
                </Hidden>
                <Columns space="small" collapseBelow="desktop">
                  <Column>
                    <Placeholder height={200} label="Content area 1" />
                  </Column>
                  <Column>
                    <Placeholder height={200} label="Content area 2" />
                  </Column>
                  <Column hideBelow="desktop">
                    <Placeholder height={200} label="Content area 3" />
                  </Column>
                </Columns>
                <Hidden above="desktop">
                  <Drawer
                    title="Content area 3"
                    open={getState('drawerOpen')}
                    onClose={() => setState('drawerOpen', false)}
                  >
                    <Placeholder height={200} label="Content area 3" />
                  </Drawer>
                </Hidden>
              </Stack>
            </>,
          ),
      },
      {
        description: (
          <>
            <Heading level="4">Full-width horizontal scroll</Heading>
            <List space="large">
              <Text>Content runs full width on all screen sizes</Text>
              <Text>Content scrolls horizontally on all screen sizes</Text>
              <Text>
                Ideal for connected horizontal content, such as Kanban boards
              </Text>
            </List>
          </>
        ),
        Example: () =>
          source(
            <Stack space="medium">
              <Placeholder
                height={100}
                label="This area expands to full screen width on all screen sizes"
              />
              <Box overflow="auto">
                <Box display="flex" gap="small">
                  <Box flexShrink={0}>
                    <Placeholder
                      height={256}
                      width={300}
                      label="Content area 1"
                    />
                  </Box>
                  <Box flexShrink={0}>
                    <Placeholder
                      height={256}
                      width={300}
                      label="Content area 2"
                    />
                  </Box>
                  <Box flexShrink={0}>
                    <Placeholder
                      height={256}
                      width={300}
                      label="Content area 3"
                    />
                  </Box>
                  <Box flexShrink={0}>
                    <Placeholder
                      height={256}
                      width={300}
                      label="Content area 4"
                    />
                  </Box>
                  <Box flexShrink={0}>
                    <Placeholder
                      height={256}
                      width={300}
                      label="Content area 5"
                    />
                  </Box>
                  <Box flexShrink={0}>
                    <Placeholder
                      height={256}
                      width={300}
                      label="Content area 6"
                    />
                  </Box>
                  <Box flexShrink={0}>
                    <Placeholder
                      height={256}
                      width={300}
                      label="Content area 7"
                    />
                  </Box>
                  <Box flexShrink={0}>
                    <Placeholder
                      height={256}
                      width={300}
                      label="Content area 8"
                    />
                  </Box>
                  <Box flexShrink={0}>
                    <Placeholder
                      height={256}
                      width={300}
                      label="Content area 9"
                    />
                  </Box>
                  <Box flexShrink={0}>
                    <Placeholder
                      height={256}
                      width={300}
                      label="Content area 10"
                    />
                  </Box>
                </Box>
              </Box>
            </Stack>,
          ),
      },
      {
        description: (
          <>
            <Heading level="4">Constrained max width</Heading>
            <List space="large">
              <Text>
                The page extends to a maximum width determined by the product
                team as optimal for their experience
              </Text>
              <Text>
                If the window is narrower than the max width, the page runs full
                width
              </Text>
              <Text>
                The optimal max width will vary by product. Teams should explore
                and test what works with their content.
              </Text>
            </List>
          </>
        ),
        Example: () =>
          source(
            <Box style={{ maxWidth: '1400px', marginInline: 'auto' }}>
              <Stack space="medium">
                <Placeholder height={100} label="Maximum width set to 1400px" />
                <Columns space="medium" collapseBelow="tablet">
                  <Column width="1/2">
                    <Placeholder height={300} label="Content area 1" />
                  </Column>
                  <Column>
                    <Placeholder height={200} label="Content area 2" />
                  </Column>
                  <Column>
                    <Placeholder height={200} label="Content area 3" />
                  </Column>
                  <Column>
                    <Placeholder height={200} label="Content area 4" />
                  </Column>
                </Columns>
              </Stack>
            </Box>,
          ),
      },
      {
        description: (
          <>
            <Heading level="4">Full width split view</Heading>
            <List space="large">
              <Text>Content area is divided into summary and detail</Text>
              <Text>
                Summary cards can wrap from two columns on wide screens to one
                column on smaller screens
              </Text>
              <Text>
                Detail areas can be moved to a{' '}
                <TextLink href="/components/Drawer">Drawer</TextLink> or
                separate page on smaller screens
              </Text>
            </List>
          </>
        ),
        Example: ({ getState, setState, setDefaultState }) =>
          source(
            <>
              {setDefaultState('drawerOpen', false)}
              <Stack space="gutter">
                <Placeholder
                  height={100}
                  label="This area expands to full screen width on all screen sizes"
                />
                <Columns space="gutter">
                  <Column>
                    <Tiles
                      space="gutter"
                      columns={{ mobile: 1, tablet: 1, desktop: 1, wide: 2 }}
                    >
                      <Hidden above="tablet">
                        <Inline space="none" align="right">
                          <Button
                            size="small"
                            icon={<IconArrow direction="right" />}
                            iconPosition="trailing"
                            onClick={() => setState('drawerOpen', true)}
                          >
                            Access Content area 2
                          </Button>
                        </Inline>
                      </Hidden>
                      <Placeholder height={100} label="Content area 1A" />
                      <Placeholder height={100} label="Content area 1B" />
                      <Placeholder height={100} label="Content area 1C" />
                      <Placeholder height={100} label="Content area 1D" />
                      <Placeholder height={100} label="Content area 1E" />
                      <Placeholder height={100} label="Content area 1F" />
                      <Placeholder height={100} label="Content area 1G" />
                      <Placeholder height={100} label="Content area 1H" />
                    </Tiles>
                  </Column>
                  <Column width="1/2" hideBelow="desktop">
                    <Placeholder height={800} label="Content area 2" />
                  </Column>
                </Columns>
                <Hidden above="desktop">
                  <Drawer
                    title="Content area 2"
                    open={getState('drawerOpen')}
                    onClose={() => setState('drawerOpen', false)}
                  >
                    <Placeholder height={200} label="Content area 2" />
                  </Drawer>
                </Hidden>
              </Stack>
            </>,
          ),
      },
      {
        Example: ({ getState, setState, setDefaultState }) =>
          source(
            <>
              {setDefaultState('drawerOpen', false)}
              <Box style={{ maxWidth: '2000px', marginInline: 'auto' }}>
                <Stack space="gutter">
                  <Placeholder
                    height={100}
                    label="Maximum width set to 2000px"
                  />
                  <Columns space="gutter">
                    <Column>
                      <Tiles
                        space="gutter"
                        columns={{
                          mobile: 1,
                          tablet: 1,
                          desktop: 1,
                          wide: 2,
                        }}
                      >
                        <Hidden above="tablet">
                          <Inline space="none" align="right">
                            <Button
                              size="small"
                              icon={<IconArrow direction="right" />}
                              iconPosition="trailing"
                              onClick={() => setState('drawerOpen', true)}
                            >
                              Access Content area 2
                            </Button>
                          </Inline>
                        </Hidden>
                        <Placeholder height={100} label="Content area 1A" />
                        <Placeholder height={100} label="Content area 1B" />
                        <Placeholder height={100} label="Content area 1C" />
                        <Placeholder height={100} label="Content area 1D" />
                        <Placeholder height={100} label="Content area 1E" />
                        <Placeholder height={100} label="Content area 1F" />
                        <Placeholder height={100} label="Content area 1G" />
                        <Placeholder height={100} label="Content area 1H" />
                      </Tiles>
                    </Column>
                    <Column width="1/2" hideBelow="desktop">
                      <Placeholder height={800} label="Content area 2" />
                    </Column>
                  </Columns>
                  <Hidden above="desktop">
                    <Drawer
                      title="Content area 2"
                      open={getState('drawerOpen')}
                      onClose={() => setState('drawerOpen', false)}
                    >
                      <Placeholder height={200} label="Content area 2" />
                    </Drawer>
                  </Hidden>
                </Stack>
              </Box>
            </>,
          ),
      },
      {
        description: (
          <>
            <Heading level="4">Responsive grid layout</Heading>
            <List space="large">
              <Text>Content area is divided into columns</Text>
              <Text>The number of columns changes based on screen width</Text>
              <Text>
                Breakpoints and column counts can be configured as needed.{' '}
                <TextLink href="/components/Tiles">Tiles</TextLink> supports
                Braid breakpoints; additional large-screen columns can be
                handled in product CSS if required.
              </Text>
            </List>
          </>
        ),
        Example: () => {
          const { value: visual } = source(
            <>
              <Box paddingTop="large" />
              <PageBlock width="full">
                <Box className={styles.boxGrid}>
                  {Array.from({ length: 20 }, (_, i) => (
                    <Card key={i}>
                      <Box padding="medium">
                        <Text align="center">Card {i + 1}</Text>
                      </Box>
                    </Card>
                  ))}
                </Box>
              </PageBlock>
            </>,
          );

          return {
            code: `<style jsx>{\`
  .boxGrid {
    display: grid;
    gap: \${vars.space.small};
    width: 100%;
    grid-template-columns: 1fr;
  }
  @media (min-width: \${breakpoints.tablet}px) {
    .boxGrid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: \${breakpoints.desktop}px) {
    .boxGrid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media (min-width: \${breakpoints.wide}px) {
    .boxGrid {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  @media (min-width: 1600px) {
    .boxGrid {
      grid-template-columns: repeat(5, 1fr);
    }
  }
  @media (min-width: 2000px) {
    .boxGrid {
      grid-template-columns: repeat(6, 1fr);
    }
  }
\`}</style>
<Box paddingTop="large" />
<PageBlock width="full">
  <Box className="boxGrid">
    {Array.from({ length: 20 }, (_, i) => (
      <Card key={i}>
        <Box padding="medium">
          <Text align="center">Card {i + 1}</Text>
        </Box>
      </Card>
    ))}
  </Box>
</PageBlock>`,
            value: visual,
          };
        },
      },
    ],
  },
};

export default docs;
