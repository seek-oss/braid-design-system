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
  Stack,
  Strong,
  Text,
  TextLink,
  Toggle,
} from 'braid-design-system';
import { vars } from 'braid-design-system/css';
import { Placeholder } from 'braid-design-system/playroom/components';

import type { PatternDocs } from '../../../types';

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
  additional: [
    {
      label: 'Content density variables',
      description: (
        <>
          <Text>
            When tailoring content density it&rsquo;s important to consider:
          </Text>
          <List>
            <Text>Component size</Text>
            <Text>Vertical spacing</Text>
            <Text>Horizontal spacing</Text>
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
        <Text>
          Many Braid components can be sized up and down using the{' '}
          <Strong>size</Strong> property (for example{' '}
          <Strong>size=&quot;small&quot;</Strong>). Examples include Text,
          Button, Accordion, Actions, ButtonIcon, Checkbox, RadioGroup, List,
          Loader and Toggle. Other components can be sized using{' '}
          <Strong>width</Strong> (for example{' '}
          <Strong>width=&quot;small&quot;</Strong>) such as Dialog, Drawer and
          Menu.
        </Text>
      ),
      Example: () =>
        source(
          <Box padding="xlarge" boxShadow="borderNeutralLight">
            <Stack space="xxlarge">
              <Stack space="large">
                <Stack space="medium">
                  <Inline space="large">
                    <Text size="large">Text size large</Text>
                    <Text size="large" weight="strong">
                      Text size large strong
                    </Text>
                  </Inline>
                  <Inline space="large">
                    <Text>Text size standard</Text>
                    <Text weight="strong">Text size standard strong</Text>
                  </Inline>
                  <Inline space="large">
                    <Text size="small">Text size small</Text>
                    <Text size="small" weight="strong">
                      Text size small strong
                    </Text>
                  </Inline>
                  <Inline space="large">
                    <Text size="xsmall">Text size xsmall</Text>
                    <Text size="xsmall" weight="strong">
                      Text size xsmall strong
                    </Text>
                  </Inline>
                </Stack>
              </Stack>
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
            </Stack>
          </Box>,
        ),
    },
    {
      label: 'Vertical spacing',
      description: (
        <Text>
          Vertical spacing can be tailored using the{' '}
          <TextLink href="/components/Stack">Stack</TextLink> component. Stack
          accepts any value from the{' '}
          <TextLink href="/foundations/layout#spacing">
            Braid space scale
          </TextLink>{' '}
          from <Strong>none</Strong> to <Strong>xxxlarge</Strong>.
        </Text>
      ),
      Example: ({ getState, setState, setDefaultState }) =>
        source(
          <>
            {setDefaultState('debug', false)}
            <Box boxShadow="borderNeutralLight" paddingBottom="xxlarge">
              <Stack space="xlarge">
                <Box paddingY="medium" background="neutralLight">
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
            </Box>
          </>,
        ),
    },
    {
      description: (
        <Text>
          When designing custom solutions with Box, vertical spacing can also be
          applied via padding or margin.
        </Text>
      ),
      Example: ({ getState, setState, setDefaultState }) =>
        source(
          <>
            {setDefaultState('debug', false)}
            <Stack space="xlarge">
              <Box paddingY="medium" background="neutralLight">
                <ContentBlock width="xsmall">
                  <Toggle
                    label="Show spacing"
                    size="small"
                    on={getState('debug')}
                    onChange={(on) => setState('debug', on)}
                  />
                </ContentBlock>
              </Box>
              <ContentBlock width="xsmall">
                <Stack space="xlarge">
                  <Stack space="medium">
                    <Stack space="xsmall">
                      <Text weight="strong">Card component</Text>
                      <Text>Large padding by default</Text>
                    </Stack>
                    <Box
                      boxShadow="borderNeutralLight"
                      borderRadius="large"
                      padding={getState('debug') ? 'none' : 'large'}
                    >
                      <Columns space="none" collapseBelow="tablet">
                        <Column width="content">
                          {getState('debug') ? (
                            <DebugSpaceY space="large" marginTop="large" />
                          ) : null}
                        </Column>
                        <Column>
                          {getState('debug') ? (
                            <DebugSpace space="large" xxsmall="neutralLight" />
                          ) : null}
                          <Stack space={getState('debug') ? 'none' : 'small'}>
                            <Stack
                              space={getState('debug') ? 'none' : 'xxsmall'}
                            >
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
                              <DebugSpace
                                space="small"
                                xxsmall="neutralLight"
                              />
                            ) : null}
                            <Text size="xsmall">
                              Xsmall text lorem ipsum dolor sit amet consectetur
                              adipiscing elit. Vivamus iaculis ut neque sit
                              amet.
                            </Text>
                            {getState('debug') ? (
                              <DebugSpace
                                space="small"
                                xxsmall="neutralLight"
                              />
                            ) : null}
                            <Text tone="secondary" size="xsmall">
                              Xsmall, secondary text
                            </Text>
                            {getState('debug') ? (
                              <DebugSpace
                                space="small"
                                xxsmall="neutralLight"
                              />
                            ) : null}
                            <Text size="xsmall">
                              <TextLink href="#">Xsmall text link</TextLink>
                            </Text>
                          </Stack>
                          {getState('debug') ? (
                            <DebugSpace space="large" xxsmall="neutralLight" />
                          ) : null}
                        </Column>
                        <Column width="content">
                          {getState('debug') ? (
                            <DebugSpaceY space="large" marginTop="large" />
                          ) : null}
                        </Column>
                      </Columns>
                    </Box>
                  </Stack>
                  <Stack space="medium">
                    <Stack space="xsmall">
                      <Text weight="strong">Custom example</Text>
                      <Text>Medium padding</Text>
                    </Stack>
                    <Box
                      boxShadow="borderNeutralLight"
                      borderRadius="large"
                      padding={getState('debug') ? 'none' : 'medium'}
                    >
                      <Columns space="none" collapseBelow="tablet">
                        <Column width="content">
                          {getState('debug') ? (
                            <DebugSpaceY space="medium" marginTop="large" />
                          ) : null}
                        </Column>
                        <Column>
                          {getState('debug') ? (
                            <DebugSpace space="medium" xxsmall="neutralLight" />
                          ) : null}
                          <Stack space={getState('debug') ? 'none' : 'small'}>
                            <Stack
                              space={getState('debug') ? 'none' : 'xxsmall'}
                            >
                              <Text size="small" weight="strong">
                                Strong small text
                              </Text>
                              {getState('debug') ? (
                                <DebugSpace
                                  space="xxsmall"
                                  xxsmall="neutralLight"
                                />
                              ) : null}
                              <Text size="xsmall">Xsmall text</Text>
                            </Stack>
                            {getState('debug') ? (
                              <DebugSpace
                                space="small"
                                xxsmall="neutralLight"
                              />
                            ) : null}
                            <Text size="xsmall">
                              Xsmall text lorem ipsum dolor sit amet consectetur
                              adipiscing elit. Vivamus iaculis ut neque sit
                              amet.
                            </Text>
                            {getState('debug') ? (
                              <DebugSpace
                                space="small"
                                xxsmall="neutralLight"
                              />
                            ) : null}
                            <Text tone="secondary" size="xsmall">
                              Xsmall, secondary text
                            </Text>
                            {getState('debug') ? (
                              <DebugSpace
                                space="small"
                                xxsmall="neutralLight"
                              />
                            ) : null}
                            <Text size="xsmall">
                              <TextLink href="#">Xsmall text link</TextLink>
                            </Text>
                          </Stack>
                          {getState('debug') ? (
                            <DebugSpace space="medium" xxsmall="neutralLight" />
                          ) : null}
                        </Column>
                        <Column width="content">
                          {getState('debug') ? (
                            <DebugSpaceY space="medium" marginTop="large" />
                          ) : null}
                        </Column>
                      </Columns>
                    </Box>
                  </Stack>
                </Stack>
              </ContentBlock>
            </Stack>
          </>,
        ),
    },
    {
      label: 'Horizontal spacing',
      description: (
        <Text>
          Horizontal spacing can be tailored using layout components such as{' '}
          <TextLink href="/components/Columns">Columns</TextLink>,{' '}
          <TextLink href="/components/Tiles">Tiles</TextLink> and{' '}
          <TextLink href="/components/Inline">Inline</TextLink>. As with Stack,
          these accept any value from the space scale.
        </Text>
      ),
      Example: ({ getState, setState, setDefaultState }) =>
        source(
          <>
            {setDefaultState('debug', false)}
            <Box boxShadow="borderNeutralLight" paddingBottom="xxlarge">
              <Stack space="xlarge">
                <Box paddingY="medium" background="neutralLight">
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
            </Box>
          </>,
        ),
    },
    {
      description: (
        <Text>
          When designing custom solutions with Box, horizontal spacing can also
          be applied via padding or margin.
        </Text>
      ),
    },
    {
      label: 'Bringing it all together',
      description: (
        <>
          <Text>
            Size and spacing should be considered holistically. As a general
            rule, if components are displayed smaller the spacing around them
            should also be smaller. Likewise, as component size increases so
            should the spacing around them. Content should be organised and
            grouped in a logical way — related content should sit more closely
            together.
          </Text>
          <Text>The same page header content in two approaches to size:</Text>
        </>
      ),
      Example: ({ getState, setState, setDefaultState }) =>
        source(
          <>
            {setDefaultState('debug', false)}
            <Box boxShadow="borderNeutralLight" paddingBottom="xxlarge">
              <Stack space="xlarge">
                <Box paddingY="medium" background="neutralLight">
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
            </Box>
          </>,
        ),
    },
    {
      description: (
        <Text>The same card design with three approaches to size:</Text>
      ),
      Example: ({ getState, setState, setDefaultState }) =>
        source(
          <>
            {setDefaultState('debug', false)}
            <Box boxShadow="borderNeutralLight" paddingBottom="xxlarge">
              <Stack space="xlarge">
                <Box paddingY="medium" background="neutralLight">
                  <ContentBlock width="xsmall">
                    <Toggle
                      label="Show spacing"
                      size="small"
                      on={getState('debug')}
                      onChange={(on) => setState('debug', on)}
                    />
                  </ContentBlock>
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
            </Box>
          </>,
        ),
    },
    {
      label: 'Impacts to usability',
      description: (
        <Text>
          Generally speaking, making content smaller or more condensed will make
          it harder to read and scan. This trade-off may make sense in some
          contexts, and it&rsquo;s up to product teams to strike the right
          balance. In addition to considering how you display content, consider
          what content you&rsquo;re displaying. Simplifying, reducing detail and
          removing unnecessary content will go a long way in making our products
          meaningful and easy to use.
        </Text>
      ),
    },
  ],
};

export default docs;
