import source from '@braid-design-system/source.macro';
import {
  Actions,
  Box,
  Button,
  ButtonIcon,
  Card,
  Column,
  Columns,
  ContentBlock,
  Divider,
  Heading,
  IconAdd,
  IconBookmark,
  IconOverflow,
  IconShare,
  Inline,
  List,
  PageBlock,
  Stack,
  Strong,
  Text,
  TextLink,
  Toggle,
} from 'braid-design-system';
import { vars } from 'braid-design-system/css';
import { Placeholder } from 'braid-design-system/playroom/components';

import type { PatternDocs } from '../../../../types';

type SpaceName = 'xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';

const spaceAbbrev = (space: string) =>
  space.slice(0, space.lastIndexOf('x') + 2).toUpperCase();

const DebugSpace = ({
  space,
  xxsmall = 'criticalLight',
  fallback = 'neutralLight',
}: {
  space: SpaceName;
  xxsmall?: 'neutralLight' | 'criticalLight';
  fallback?: 'neutralLight' | 'criticalLight';
}) => {
  const backgrounds = {
    xxsmall,
    xsmall: 'cautionLight',
    small: 'promoteLight',
    medium: 'infoLight',
    large: 'positiveLight',
  } as const;

  return (
    <Box
      background={
        space in backgrounds
          ? backgrounds[space as keyof typeof backgrounds]
          : fallback
      }
      display="flex"
      alignItems="center"
      paddingLeft="xxsmall"
      style={{ height: vars.space[space] }}
    >
      <Text size="xsmall" weight="strong">
        {spaceAbbrev(space)}
      </Text>
    </Box>
  );
};

const DebugSpaceY = ({
  space,
  height,
  marginTop,
  paddingLeft,
}: {
  space: SpaceName;
  height?: number;
  marginTop?: 'xxsmall' | 'large';
  paddingLeft?: 'none' | 'xxsmall';
}) => {
  const backgrounds = {
    xxsmall: 'criticalLight',
    xsmall: 'cautionLight',
    small: 'promoteLight',
    medium: 'infoLight',
    large: 'positiveLight',
  } as const;

  return (
    <Box
      background={
        space in backgrounds
          ? backgrounds[space as keyof typeof backgrounds]
          : 'neutralLight'
      }
      display="flex"
      alignItems="center"
      paddingLeft={paddingLeft ?? (space === 'xsmall' ? 'none' : 'xxsmall')}
      marginTop={marginTop}
      style={{
        height: height ?? vars.space[space],
        width: vars.space[space],
      }}
    >
      <Text size="xsmall" weight="strong">
        {spaceAbbrev(space)}
      </Text>
    </Box>
  );
};

export const docs: PatternDocs = {
  description: (
    <Text>
      How to adjust the size and spacing of components to create a more airy or
      more condensed UI.
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
  docSections: {
    bestPractices: [
      {
        label: 'Content density variables',
        description: (
          <>
            <Text>
              When tailoring content density it&rsquo;s important to consider:
            </Text>
            <List space="large">
              <Text>
                <TextLink href="#component-size">Component size</TextLink>
              </Text>
              <Text>
                <TextLink href="#vertical-spacing">Vertical spacing</TextLink>
              </Text>
              <Text>
                <TextLink href="#horizontal-spacing">
                  Horizontal spacing
                </TextLink>
              </Text>
            </List>
            <Text>
              These aspects must be considered holistically to achieve a well
              crafted design.
            </Text>
          </>
        ),
      },
      {
        label: 'Component size',
        description: (
          <>
            <Text>
              Use the <Strong>size</Strong> property to scale components such as{' '}
              <TextLink href="/components/Text">Text</TextLink>,{' '}
              <TextLink href="/components/Button">Button</TextLink>,{' '}
              <TextLink href="/components/Accordion">Accordion</TextLink>,{' '}
              <TextLink href="/components/Actions">Actions</TextLink>,{' '}
              <TextLink href="/components/ButtonIcon">ButtonIcon</TextLink>,{' '}
              <TextLink href="/components/Checkbox">Checkbox</TextLink>,{' '}
              <TextLink href="/components/RadioGroup">RadioGroup</TextLink>,{' '}
              <TextLink href="/components/List">List</TextLink>,{' '}
              <TextLink href="/components/Loader">Loader</TextLink> and{' '}
              <TextLink href="/components/Toggle">Toggle</TextLink> (e.g.{' '}
              <Strong>size=&quot;small&quot;</Strong>).
            </Text>
            <Text>
              Use the <Strong>width</Strong> property for{' '}
              <TextLink href="/components/Dialog">Dialog</TextLink>,{' '}
              <TextLink href="/components/Drawer">Drawer</TextLink> and{' '}
              <TextLink href="/components/MenuRenderer">MenuRenderer</TextLink>{' '}
              (e.g. <Strong>width=&quot;small&quot;</Strong>).
            </Text>
          </>
        ),
        Example: () =>
          source(
            <Stack space="xxlarge">
              <Inline space="xlarge">
                <Stack space="medium">
                  <Text size="large">Text size large</Text>
                  <Text>Text size standard</Text>
                  <Text size="small">Text size small</Text>
                  <Text size="xsmall">Text size xsmall</Text>
                </Stack>
                <Stack space="medium">
                  <Text size="large" weight="strong">
                    Text size large strong
                  </Text>
                  <Text weight="strong">Text size standard strong</Text>
                  <Text size="small" weight="strong">
                    Text size small strong
                  </Text>
                  <Text size="xsmall" weight="strong">
                    Text size xsmall strong
                  </Text>
                </Stack>
              </Inline>
              <Stack space="large">
                <Stack space="small">
                  <Text>Standard buttons</Text>
                  <Actions>
                    <Button variant="solid">Solid</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="soft">Soft</Button>
                    <Button variant="transparent">Transparent</Button>
                  </Actions>
                </Stack>
                <Stack space="small">
                  <Text>Small buttons</Text>
                  <Actions>
                    <Button variant="solid" size="small">
                      Solid
                    </Button>
                    <Button variant="ghost" size="small">
                      Ghost
                    </Button>
                    <Button variant="soft" size="small">
                      Soft
                    </Button>
                    <Button variant="transparent" size="small">
                      Transparent
                    </Button>
                  </Actions>
                </Stack>
              </Stack>
            </Stack>,
          ),
      },
      {
        label: 'Vertical spacing',
        description: (
          <Text>
            Use <TextLink href="/components/Stack">Stack</TextLink> to control
            vertical spacing. It accepts any value from our{' '}
            <TextLink href="/foundations/layout#spacing">space scale</TextLink>,
            from <Strong>none</Strong> to <Strong>xxxlarge</Strong>.
          </Text>
        ),
        Example: ({ getState, setState, setDefaultState }) => {
          const { value: visual } = source(
            <>
              {setDefaultState('debug', false)}

              <Stack space="xlarge">
                <Box padding="medium" background="neutralLight">
                  <Toggle
                    label="Show spacing"
                    size="small"
                    on={getState('debug')}
                    onChange={(on) => setState('debug', on)}
                  />
                </Box>
                <Columns collapseBelow="tablet" space="large">
                  <Column>
                    <Stack space={getState('debug') ? 'none' : 'large'}>
                      <Text>Large</Text>
                      {getState('debug') ? <DebugSpace space="large" /> : null}
                      <Placeholder height={60} label="UI component" />
                      {getState('debug') ? <DebugSpace space="large" /> : null}
                      <Placeholder height={60} label="UI component" />
                      {getState('debug') ? <DebugSpace space="large" /> : null}
                      <Placeholder height={60} label="UI component" />
                    </Stack>
                  </Column>
                  <Column>
                    <Stack space={getState('debug') ? 'none' : 'medium'}>
                      <Text>Medium</Text>
                      {getState('debug') ? <DebugSpace space="medium" /> : null}
                      <Placeholder height={60} label="UI component" />
                      {getState('debug') ? <DebugSpace space="medium" /> : null}
                      <Placeholder height={60} label="UI component" />
                      {getState('debug') ? <DebugSpace space="medium" /> : null}
                      <Placeholder height={60} label="UI component" />
                    </Stack>
                  </Column>
                  <Column>
                    <Stack space={getState('debug') ? 'none' : 'small'}>
                      <Text>Small</Text>
                      {getState('debug') ? <DebugSpace space="small" /> : null}
                      <Placeholder height={60} label="UI component" />
                      {getState('debug') ? <DebugSpace space="small" /> : null}
                      <Placeholder height={60} label="UI component" />
                      {getState('debug') ? <DebugSpace space="small" /> : null}
                      <Placeholder height={60} label="UI component" />
                    </Stack>
                  </Column>
                  <Column>
                    <Stack space={getState('debug') ? 'none' : 'xsmall'}>
                      <Text>Xsmall</Text>
                      {getState('debug') ? <DebugSpace space="xsmall" /> : null}
                      <Placeholder height={60} label="UI component" />
                      {getState('debug') ? <DebugSpace space="xsmall" /> : null}
                      <Placeholder height={60} label="UI component" />
                      {getState('debug') ? <DebugSpace space="xsmall" /> : null}
                      <Placeholder height={60} label="UI component" />
                    </Stack>
                  </Column>
                </Columns>
              </Stack>
            </>,
          );

          const { code: codeDemo } = source(
            <Box padding="xlarge">
              <Stack space="xlarge">
                <PageBlock width="small">
                  <Columns collapseBelow="tablet" space="large">
                    <Column>
                      <Stack space="large">
                        <Text>Large</Text>
                        <Placeholder height={60} label="UI component" />
                        <Placeholder height={60} label="UI component" />
                        <Placeholder height={60} label="UI component" />
                      </Stack>
                    </Column>
                    <Column>
                      <Stack space="medium">
                        <Text>Medium</Text>
                        <Placeholder height={60} label="UI component" />
                        <Placeholder height={60} label="UI component" />
                        <Placeholder height={60} label="UI component" />
                      </Stack>
                    </Column>
                    <Column>
                      <Stack space="small">
                        <Text>Small</Text>
                        <Placeholder height={60} label="UI component" />
                        <Placeholder height={60} label="UI component" />
                        <Placeholder height={60} label="UI component" />
                      </Stack>
                    </Column>
                    <Column>
                      <Stack space="xsmall">
                        <Text>Xsmall</Text>
                        <Placeholder height={60} label="UI component" />
                        <Placeholder height={60} label="UI component" />
                        <Placeholder height={60} label="UI component" />
                      </Stack>
                    </Column>
                  </Columns>
                </PageBlock>
              </Stack>
            </Box>,
          );

          return {
            code: codeDemo,
            value: visual,
          };
        },
      },
      {
        description: (
          <Text>
            When designing custom solutions with{' '}
            <TextLink href="/components/Box">Box</TextLink>, vertical spacing
            can also be applied using the <Strong>padding</Strong> or{' '}
            <Strong>margin</Strong> properties.
          </Text>
        ),
      },
      {
        label: 'Horizontal spacing',
        description: (
          <Text>
            Use <TextLink href="/components/Columns">Columns</TextLink>,{' '}
            <TextLink href="/components/Tiles">Tiles</TextLink>,{' '}
            <TextLink href="/components/Inline">Inline</TextLink> and{' '}
            <TextLink href="/components/Spread">Spread</TextLink> to control
            horizontal spacing. They accept any value from our{' '}
            <TextLink href="/foundations/layout#spacing">space scale</TextLink>,
            from <Strong>none</Strong> to <Strong>xxxlarge</Strong>.
          </Text>
        ),
        Example: ({ getState, setState, setDefaultState }) => {
          const { value: visual } = source(
            <>
              {setDefaultState('debug', false)}
              <Stack space="xlarge">
                <Box padding="medium" background="neutralLight">
                  <Toggle
                    label="Show spacing"
                    size="small"
                    on={getState('debug')}
                    onChange={(on) => setState('debug', on)}
                  />
                </Box>
                <Stack space="large">
                  <Stack space="medium">
                    <Text>Large</Text>
                    <Inline space={getState('debug') ? 'none' : 'large'}>
                      <Placeholder height={60} label="UI component" />
                      {getState('debug') ? (
                        <DebugSpaceY space="large" height={60} />
                      ) : null}
                      <Placeholder height={60} label="UI component" />
                      {getState('debug') ? (
                        <DebugSpaceY space="large" height={60} />
                      ) : null}
                      <Placeholder height={60} label="UI component" />
                      {getState('debug') ? (
                        <DebugSpaceY space="large" height={60} />
                      ) : null}
                      <Placeholder height={60} label="UI component" />
                    </Inline>
                  </Stack>
                  <Stack space="medium">
                    <Text>Medium</Text>
                    <Inline space={getState('debug') ? 'none' : 'medium'}>
                      <Placeholder height={60} label="UI component" />
                      {getState('debug') ? (
                        <DebugSpaceY space="medium" height={60} />
                      ) : null}
                      <Placeholder height={60} label="UI component" />
                      {getState('debug') ? (
                        <DebugSpaceY space="medium" height={60} />
                      ) : null}
                      <Placeholder height={60} label="UI component" />
                      {getState('debug') ? (
                        <DebugSpaceY space="medium" height={60} />
                      ) : null}
                      <Placeholder height={60} label="UI component" />
                    </Inline>
                  </Stack>
                  <Stack space="medium">
                    <Text>Small</Text>
                    <Inline space={getState('debug') ? 'none' : 'small'}>
                      <Placeholder height={60} label="UI component" />
                      {getState('debug') ? (
                        <DebugSpaceY space="small" height={60} />
                      ) : null}
                      <Placeholder height={60} label="UI component" />
                      {getState('debug') ? (
                        <DebugSpaceY space="small" height={60} />
                      ) : null}
                      <Placeholder height={60} label="UI component" />
                      {getState('debug') ? (
                        <DebugSpaceY space="small" height={60} />
                      ) : null}
                      <Placeholder height={60} label="UI component" />
                    </Inline>
                  </Stack>
                  <Stack space="medium">
                    <Text>Xsmall</Text>
                    <Inline space={getState('debug') ? 'none' : 'xsmall'}>
                      <Placeholder height={60} label="UI component" />
                      {getState('debug') ? (
                        <DebugSpaceY space="xsmall" height={60} />
                      ) : null}
                      <Placeholder height={60} label="UI component" />
                      {getState('debug') ? (
                        <DebugSpaceY space="xsmall" height={60} />
                      ) : null}
                      <Placeholder height={60} label="UI component" />
                      {getState('debug') ? (
                        <DebugSpaceY space="xsmall" height={60} />
                      ) : null}
                      <Placeholder height={60} label="UI component" />
                    </Inline>
                  </Stack>
                </Stack>
              </Stack>
            </>,
          );

          const { code: codeDemo } = source(
            <PageBlock width="small">
              <Stack space="xlarge">
                <Stack space="medium">
                  <Text>Large</Text>
                  <Inline space="large">
                    <Placeholder height={60} label="UI component" />
                    <Placeholder height={60} label="UI component" />
                    <Placeholder height={60} label="UI component" />
                    <Placeholder height={60} label="UI component" />
                  </Inline>
                </Stack>
                <Stack space="medium">
                  <Text>Medium</Text>
                  <Inline space="medium">
                    <Placeholder height={60} label="UI component" />
                    <Placeholder height={60} label="UI component" />
                    <Placeholder height={60} label="UI component" />
                    <Placeholder height={60} label="UI component" />
                  </Inline>
                </Stack>
                <Stack space="medium">
                  <Text>Small</Text>
                  <Inline space="small">
                    <Placeholder height={60} label="UI component" />
                    <Placeholder height={60} label="UI component" />
                    <Placeholder height={60} label="UI component" />
                    <Placeholder height={60} label="UI component" />
                  </Inline>
                </Stack>
                <Stack space="medium">
                  <Text>Xsmall</Text>
                  <Inline space="xsmall">
                    <Placeholder height={60} label="UI component" />
                    <Placeholder height={60} label="UI component" />
                    <Placeholder height={60} label="UI component" />
                    <Placeholder height={60} label="UI component" />
                  </Inline>
                </Stack>
              </Stack>
            </PageBlock>,
          );

          return {
            code: codeDemo,
            value: visual,
          };
        },
      },
      {
        description: (
          <Text>
            When designing custom solutions with{' '}
            <TextLink href="/components/Box">Box</TextLink>, horizontal spacing
            can also be applied using the <Strong>padding</Strong> or{' '}
            <Strong>margin</Strong> properties.
          </Text>
        ),
      },
      {
        label: 'Bringing it all together',
        description: (
          <>
            <Text>
              Spacing should be scaled to align with component size. Smaller
              components need less breathing space, larger ones need more.
              Related content should be grouped together.
            </Text>
            <Text>The same page header at two sizes:</Text>
          </>
        ),
        Example: ({ getState, setState, setDefaultState }) => {
          const { value: visual } = source(
            <>
              {setDefaultState('debug', false)}
              <Stack space="xlarge">
                <Box padding="medium" background="neutralLight">
                  <Toggle
                    label="Show spacing"
                    size="small"
                    on={getState('debug')}
                    onChange={(on) => setState('debug', on)}
                  />
                </Box>
                <Stack space="xxlarge">
                  <Stack space={getState('debug') ? 'none' : 'xlarge'}>
                    <Heading level="1">Heading level 1</Heading>
                    {getState('debug') ? (
                      <DebugSpace space="xlarge" fallback="criticalLight" />
                    ) : null}
                    <Text size="large">
                      Large text lorem ipsum dolor sit amet consectetur
                      adipiscing elit. Vivamus iaculis ut neque sit amet
                      egestas.
                    </Text>
                    {getState('debug') ? (
                      <DebugSpace space="xlarge" fallback="criticalLight" />
                    ) : null}
                    <Inline space={getState('debug') ? 'none' : 'medium'}>
                      <ButtonIcon
                        size="large"
                        icon={<IconBookmark />}
                        label="Bookmark"
                        id="density-heading1-bookmark"
                      />
                      {getState('debug') ? (
                        <DebugSpaceY
                          space="medium"
                          height={30}
                          marginTop="xxsmall"
                          paddingLeft="xxsmall"
                        />
                      ) : null}
                      <ButtonIcon
                        size="large"
                        icon={<IconAdd />}
                        label="Add"
                        id="density-heading1-add"
                      />
                      {getState('debug') ? (
                        <DebugSpaceY
                          space="medium"
                          height={30}
                          marginTop="xxsmall"
                          paddingLeft="xxsmall"
                        />
                      ) : null}
                      <ButtonIcon
                        size="large"
                        icon={<IconShare />}
                        label="Share"
                        id="density-heading1-share"
                      />
                      {getState('debug') ? (
                        <DebugSpaceY
                          space="medium"
                          height={30}
                          marginTop="xxsmall"
                          paddingLeft="xxsmall"
                        />
                      ) : null}
                      <ButtonIcon
                        size="large"
                        icon={<IconOverflow />}
                        label="More"
                        id="density-heading1-more"
                      />
                    </Inline>
                  </Stack>
                  <Divider />
                  <Stack space={getState('debug') ? 'none' : 'large'}>
                    <Heading level="2">Heading level 2</Heading>
                    {getState('debug') ? (
                      <DebugSpace space="large" fallback="criticalLight" />
                    ) : null}
                    <Text>
                      Standard text lorem ipsum dolor sit amet consectetur
                      adipiscing elit. Vivamus iaculis ut neque sit amet
                      egestas.
                    </Text>
                    {getState('debug') ? (
                      <DebugSpace space="large" fallback="criticalLight" />
                    ) : null}
                    <Inline space={getState('debug') ? 'none' : 'small'}>
                      <ButtonIcon
                        icon={<IconBookmark />}
                        label="Bookmark"
                        id="density-heading2-bookmark"
                      />
                      {getState('debug') ? (
                        <DebugSpaceY
                          space="small"
                          height={30}
                          marginTop="xxsmall"
                          paddingLeft="xxsmall"
                        />
                      ) : null}
                      <ButtonIcon
                        icon={<IconAdd />}
                        label="Add"
                        id="density-heading2-add"
                      />
                      {getState('debug') ? (
                        <DebugSpaceY
                          space="small"
                          height={30}
                          marginTop="xxsmall"
                          paddingLeft="xxsmall"
                        />
                      ) : null}
                      <ButtonIcon
                        icon={<IconShare />}
                        label="Share"
                        id="density-heading2-share"
                      />
                      {getState('debug') ? (
                        <DebugSpaceY
                          space="small"
                          height={30}
                          marginTop="xxsmall"
                          paddingLeft="xxsmall"
                        />
                      ) : null}
                      <ButtonIcon
                        icon={<IconOverflow />}
                        label="More"
                        id="density-heading2-more"
                      />
                    </Inline>
                  </Stack>
                </Stack>
              </Stack>
            </>,
          );

          const { code: codeDemo } = source(
            <Stack space="xlarge">
              <Stack space="xxlarge">
                <Stack space="xlarge">
                  <Heading level="1">Heading level 1</Heading>
                  <Text size="large">
                    Large text lorem ipsum dolor sit amet consectetur adipiscing
                    elit. Vivamus iaculis ut neque sit amet egestas.
                  </Text>
                  <Inline space="medium">
                    <ButtonIcon
                      size="large"
                      icon={<IconBookmark />}
                      label="Bookmark"
                    />
                    <ButtonIcon size="large" icon={<IconAdd />} label="Add" />
                    <ButtonIcon
                      size="large"
                      icon={<IconShare />}
                      label="Share"
                    />
                    <ButtonIcon
                      size="large"
                      icon={<IconOverflow />}
                      label="More"
                    />
                  </Inline>
                </Stack>
                <Divider />
                <Stack space="large">
                  <Heading level="2">Heading level 2</Heading>
                  <Text>
                    Standard text lorem ipsum dolor sit amet consectetur
                    adipiscing elit. Vivamus iaculis ut neque sit amet egestas.
                  </Text>
                  <Inline space="small">
                    <ButtonIcon icon={<IconBookmark />} label="Bookmark" />
                    <ButtonIcon icon={<IconAdd />} label="Add" />
                    <ButtonIcon icon={<IconShare />} label="Share" />
                    <ButtonIcon icon={<IconOverflow />} label="More" />
                  </Inline>
                </Stack>
              </Stack>
            </Stack>,
          );

          return {
            code: codeDemo,
            value: visual,
          };
        },
      },
      {
        description: (
          <Text>The same card design with three approaches to size:</Text>
        ),
        Example: ({ getState, setState, setDefaultState }) => {
          const { value: visual } = source(
            <>
              {setDefaultState('debug', false)}
              <Stack space="xlarge">
                <Box padding="medium" background="neutralLight">
                  <Toggle
                    label="Show spacing"
                    size="small"
                    on={getState('debug')}
                    onChange={(on) => setState('debug', on)}
                  />
                </Box>
                <ContentBlock width="xsmall">
                  <Stack space="small">
                    <Card>
                      <Stack space={getState('debug') ? 'none' : 'large'}>
                        <Stack space={getState('debug') ? 'none' : 'small'}>
                          <Heading level="4">Heading level 4</Heading>
                          {getState('debug') ? (
                            <DebugSpace space="small" xxsmall="neutralLight" />
                          ) : null}
                          <Text>Standard text</Text>
                        </Stack>
                        {getState('debug') ? (
                          <DebugSpace space="large" xxsmall="neutralLight" />
                        ) : null}
                        <Text>
                          Standard text lorem ipsum dolor sit amet consectetur
                          adipiscing elit. Vivamus iaculis ut neque sit amet
                          egestas.{' '}
                        </Text>
                        {getState('debug') ? (
                          <DebugSpace space="large" xxsmall="neutralLight" />
                        ) : null}
                        <Text tone="secondary">Standard, secondary text</Text>
                        {getState('debug') ? (
                          <DebugSpace space="large" xxsmall="neutralLight" />
                        ) : null}
                        <Inline space="small">
                          <Button>Button</Button>
                        </Inline>
                      </Stack>
                    </Card>
                    <Card>
                      <Stack space={getState('debug') ? 'none' : 'medium'}>
                        <Stack space={getState('debug') ? 'none' : 'xsmall'}>
                          <Text size="large" weight="strong">
                            Large, strong text
                          </Text>
                          {getState('debug') ? (
                            <DebugSpace space="xsmall" xxsmall="neutralLight" />
                          ) : null}
                          <Text size="small">Small text</Text>
                        </Stack>
                        {getState('debug') ? (
                          <DebugSpace space="medium" xxsmall="neutralLight" />
                        ) : null}
                        <Text size="small">
                          Small text lorem ipsum dolor sit amet consectetur
                          adipiscing elit. Vivamus iaculis ut neque sit amet
                          egestas.{' '}
                        </Text>
                        {getState('debug') ? (
                          <DebugSpace space="medium" xxsmall="neutralLight" />
                        ) : null}
                        <Text tone="secondary" size="small">
                          Small, secondary text
                        </Text>
                        {getState('debug') ? (
                          <DebugSpace space="medium" xxsmall="neutralLight" />
                        ) : null}
                        <Actions>
                          <Button size="small">Small button</Button>
                        </Actions>
                      </Stack>
                    </Card>
                    <Card>
                      <Stack space={getState('debug') ? 'none' : 'small'}>
                        <Stack space={getState('debug') ? 'none' : 'xxsmall'}>
                          <Text weight="strong">Strong text</Text>
                          {getState('debug') ? (
                            <DebugSpace
                              space="xxsmall"
                              xxsmall="neutralLight"
                            />
                          ) : null}
                          <Text size="small">Small text</Text>
                        </Stack>
                        {getState('debug') ? (
                          <DebugSpace space="small" xxsmall="neutralLight" />
                        ) : null}
                        <Text size="xsmall">
                          Xsmall text lorem ipsum dolor sit amet consectetur
                          adipiscing elit. Vivamus iaculis ut neque sit amet
                          egestas.
                        </Text>
                        {getState('debug') ? (
                          <DebugSpace space="small" xxsmall="neutralLight" />
                        ) : null}
                        <Text tone="secondary" size="xsmall">
                          Xsmall, secondary text
                        </Text>
                        {getState('debug') ? (
                          <DebugSpace space="small" xxsmall="neutralLight" />
                        ) : null}
                        <Text size="xsmall">
                          <TextLink href="#">Xsmall text link</TextLink>
                        </Text>
                      </Stack>
                    </Card>
                  </Stack>
                </ContentBlock>
              </Stack>
            </>,
          );

          const { code: codeDemo } = source(
            <ContentBlock width="xsmall">
              <Stack space="small">
                <Card>
                  <Stack space="large">
                    <Stack space="small">
                      <Heading level="4">Heading level 4</Heading>
                      <Text>Standard text</Text>
                    </Stack>
                    <Text>
                      Standard text lorem ipsum dolor sit amet consectetur
                      adipiscing elit. Vivamus iaculis ut neque sit amet
                      egestas.
                    </Text>
                    <Text tone="secondary">Standard, secondary text</Text>
                    <Inline space="small">
                      <Button>Button</Button>
                    </Inline>
                  </Stack>
                </Card>
                <Card>
                  <Stack space="medium">
                    <Stack space="xsmall">
                      <Text size="large" weight="strong">
                        Large, strong text
                      </Text>
                      <Text size="small">Small text</Text>
                    </Stack>
                    <Text size="small">
                      Small text lorem ipsum dolor sit amet consectetur
                      adipiscing elit. Vivamus iaculis ut neque sit amet
                      egestas.
                    </Text>
                    <Text tone="secondary" size="small">
                      Small, secondary text
                    </Text>
                    <Actions>
                      <Button size="small">Small button</Button>
                    </Actions>
                  </Stack>
                </Card>
                <Card>
                  <Stack space="small">
                    <Stack space="xxsmall">
                      <Text weight="strong">Strong text</Text>
                      <Text size="small">Small text</Text>
                    </Stack>
                    <Text size="xsmall">
                      Xsmall text lorem ipsum dolor sit amet consectetur
                      adipiscing elit. Vivamus iaculis ut neque sit amet
                      egestas.
                    </Text>
                    <Text tone="secondary" size="xsmall">
                      Xsmall, secondary text
                    </Text>
                    <Text size="xsmall">
                      <TextLink href="#">Xsmall text link</TextLink>
                    </Text>
                  </Stack>
                </Card>
              </Stack>
            </ContentBlock>,
          );

          return {
            code: codeDemo,
            value: visual,
          };
        },
      },
      {
        label: 'Impacts to usability',
        description: (
          <Text>
            Condensing content makes it harder to read and scan. That trade-off
            can make sense in some contexts, but should be considered carefully.
            Also consider what you show, not just how you show it. Simplifying,
            reducing detail and removing unnecessary content makes products
            easier to use.
          </Text>
        ),
      },
    ],
  },
};

export default docs;
