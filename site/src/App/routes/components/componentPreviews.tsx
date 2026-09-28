import source from '@braid-design-system/source.macro';
import {
  Accordion,
  AccordionItem,
  Actions,
  Alert,
  Autosuggest,
  Badge,
  Bleed,
  Box,
  Button,
  ButtonIcon,
  ButtonLink,
  Card,
  Checkbox,
  Column,
  Columns,
  ContentBlock,
  Disclosure,
  Divider,
  Dropdown,
  FieldLabel,
  FieldMessage,
  Heading,
  Hidden,
  HiddenVisually,
  IconAdd,
  IconBookmark,
  IconChevron,
  IconHelp,
  IconOverflow,
  IconShare,
  IconTag,
  IconTick,
  Inline,
  List,
  Loader,
  MenuItem,
  MenuItemCheckbox,
  MenuItemDivider,
  MenuItemLink,
  MonthPicker,
  Notice,
  PageBlock,
  Pagination,
  PasswordField,
  RadioGroup,
  RadioItem,
  Rating,
  Secondary,
  Spread,
  Stack,
  Step,
  Stepper,
  Strong,
  Tab,
  TabPanel,
  TabPanels,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  Tabs,
  TabsProvider,
  Tag,
  Text,
  TextDropdown,
  TextField,
  TextLink,
  TextLinkButton,
  Textarea,
  Tiles,
  Toggle,
} from 'braid-design-system';
import dialogDocs from 'braid-src/lib/components/Dialog/Dialog.docs';
import drawerDocs from 'braid-src/lib/components/Drawer/Drawer.docs';
import { Menu } from 'braid-src/lib/components/MenuRenderer/MenuRenderer';
import pageDocs from 'braid-src/lib/components/Page/Page.docs';
import { TooltipContent } from 'braid-src/lib/components/TooltipRenderer/TooltipRenderer';
import Toast from 'braid-src/lib/components/useToast/Toast';
import { Placeholder } from 'braid-src/lib/playroom/components';
import { Children, type ReactElement, type ReactNode } from 'react';

import type { ComponentDocs } from '../../../types';
import type { documentedComponents } from '../../navigationHelpers';

type DocumentedComponentName = (typeof documentedComponents)[number]['name'];

export type ComponentPreview = Pick<ComponentDocs, 'Example'> & {
  stageWidth?: number;
};

const previewMenuProps = {
  dispatch: () => {},
  focusTrigger: () => {},
  highlightIndex: -1,
  align: 'left',
  size: 'standard',
  width: 'content',
  placement: 'bottom',
  reserveIconSpace: false,
} as const;

const OpenMenuPreview = ({
  children,
  trigger = (
    <Text>
      Menu <IconChevron direction="up" alignY="lowercase" />
    </Text>
  ),
  space = 'small',
  align,
}: {
  children: ReactNode;
  trigger?: ReactElement;
  space?: 'small' | 'xxsmall';
  align?: 'right';
}) => (
  <Stack space={space} align={align}>
    {trigger}
    <Menu {...previewMenuProps}>{Children.toArray(children)}</Menu>
  </Stack>
);

export const componentPreviews: Partial<
  Record<DocumentedComponentName, ComponentPreview>
> = {
  Accordion: {
    stageWidth: 480,
    Example: () =>
      source(
        <Accordion>
          <AccordionItem label="Accordion item 1">
            <Text>This is the content of the accordion item.</Text>
          </AccordionItem>
          <AccordionItem label="Accordion item 2">
            <Text>This is the content of the accordion item.</Text>
          </AccordionItem>
          <AccordionItem label="Accordion item 3">
            <Text>This is the content of the accordion item.</Text>
          </AccordionItem>
        </Accordion>,
      ),
  },
  Actions: {
    stageWidth: 480,
    Example: () =>
      source(
        <Stack space="medium">
          <Actions>
            <Button variant="solid">Solid</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="transparent">Transparent</Button>
          </Actions>

          <Stack space="xsmall">
            <Button variant="solid">Solid</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="transparent">Transparent</Button>
          </Stack>
        </Stack>,
      ),
  },
  Alert: {
    stageWidth: 480,
    Example: () =>
      source(
        <Stack space="medium">
          <Alert tone="promote">
            <Text>This is a promoted message.</Text>
          </Alert>
          <Alert tone="positive">
            <Text>This is a positive message.</Text>
          </Alert>
          <Alert tone="critical">
            <Text>This is a critical message.</Text>
          </Alert>
        </Stack>,
      ),
  },
  Autosuggest: {
    stageWidth: 480,
    Example: () =>
      source(
        <Stack space="xxsmall">
          <Autosuggest
            label="Label"
            value={{ text: 'B' }}
            onChange={() => {}}
            suggestions={[]}
          />
          <Box
            background="surface"
            borderRadius="standard"
            boxShadow="medium"
            paddingY="xxsmall"
          >
            {['Bananas', 'Broccoli'].map((suggestion, index) => (
              <Box
                key={suggestion}
                paddingX="small"
                paddingY="small"
                background={index === 0 ? 'formAccentSoft' : undefined}
              >
                <Text baseline={false}>
                  <Strong>B</Strong>
                  {suggestion.slice(1)}
                </Text>
              </Box>
            ))}
          </Box>
        </Stack>,
      ),
  },
  Badge: {
    stageWidth: 400,
    Example: () =>
      source(
        <Stack space="medium" align="center">
          <Inline space="medium" collapseBelow="desktop" align="center">
            <Stack space="xsmall">
              <Badge tone="positive">Positive</Badge>
              <Badge weight="strong" tone="positive">
                Positive
              </Badge>
            </Stack>
            <Stack space="xsmall">
              <Badge tone="promote">Promote</Badge>
              <Badge weight="strong" tone="promote">
                Promote
              </Badge>
            </Stack>
            <Stack space="xsmall">
              <Badge tone="info">Info</Badge>
              <Badge weight="strong" tone="info">
                Info
              </Badge>
            </Stack>
          </Inline>
          <Inline space="medium" collapseBelow="desktop" align="center">
            <Stack space="xsmall">
              <Badge tone="neutral">Neutral</Badge>
              <Badge weight="strong" tone="neutral">
                Neutral
              </Badge>
            </Stack>
            <Stack space="xsmall">
              <Badge tone="caution">Caution</Badge>
              <Badge weight="strong" tone="caution">
                Caution
              </Badge>
            </Stack>
            <Stack space="xsmall">
              <Badge tone="critical">Critical</Badge>
              <Badge weight="strong" tone="critical">
                Critical
              </Badge>
            </Stack>
          </Inline>
        </Stack>,
      ),
  },
  Bleed: {
    stageWidth: 480,
    Example: () =>
      source(
        <Box marginX="large" boxShadow="borderNeutral">
          <Stack space="medium">
            <Placeholder height={40} />
            <Bleed horizontal="large">
              <Box boxShadow="borderPromoteLight" background="promoteLight">
                <Placeholder height={40} />
              </Box>
            </Bleed>
            <Placeholder height={40} />
          </Stack>
        </Box>,
      ),
  },
  Box: {
    stageWidth: 320,
    Example: () =>
      source(
        <Box
          background="neutralLight"
          padding="small"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Placeholder
            label="This is Box and you'll use it a lot"
            height={60}
          />
        </Box>,
      ),
  },
  Button: {
    stageWidth: 480,
    Example: () =>
      source(
        <Stack space="xsmall" align="center">
          <Actions>
            <Button variant="solid" tone="brandAccent">
              Solid
            </Button>
            <Button variant="ghost" tone="brandAccent">
              Ghost
            </Button>
            <Button variant="soft" tone="brandAccent">
              Soft
            </Button>
            <Button variant="transparent" tone="brandAccent">
              Transparent
            </Button>
          </Actions>
          <Actions>
            <Button variant="solid" tone="formAccent">
              Solid
            </Button>
            <Button variant="ghost" tone="formAccent">
              Ghost
            </Button>
            <Button variant="soft" tone="formAccent">
              Soft
            </Button>
            <Button variant="transparent" tone="formAccent">
              Transparent
            </Button>
          </Actions>
          <Actions>
            <Button variant="solid" tone="critical">
              Solid
            </Button>
            <Button variant="ghost" tone="critical">
              Ghost
            </Button>
            <Button variant="soft" tone="critical">
              Soft
            </Button>
            <Button variant="transparent" tone="critical">
              Transparent
            </Button>
          </Actions>
          <Actions>
            <Button variant="solid">Solid</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="soft">Soft</Button>
            <Button variant="transparent">Transparent</Button>
          </Actions>
        </Stack>,
      ),
  },
  ButtonIcon: {
    stageWidth: 480,
    Example: () =>
      source(
        <Stack space="xsmall">
          <Inline space="small" align="center" alignY="center">
            <ButtonIcon
              icon={<IconBookmark />}
              label="Bookmark"
              variant="solid"
            />
            <ButtonIcon icon={<IconAdd />} label="Add" variant="soft" />
            <ButtonIcon
              icon={<IconShare />}
              label="Share"
              variant="transparent"
            />
          </Inline>
          <Inline space="small" align="center" alignY="center">
            <ButtonIcon
              icon={<IconBookmark />}
              label="Bookmark"
              variant="solid"
              tone="brandAccent"
            />
            <ButtonIcon
              icon={<IconAdd />}
              label="Add"
              variant="soft"
              tone="brandAccent"
            />
            <ButtonIcon
              icon={<IconShare />}
              label="Share"
              variant="transparent"
              tone="brandAccent"
            />
          </Inline>
          <Inline space="small" align="center" alignY="center">
            <ButtonIcon
              icon={<IconBookmark />}
              label="Bookmark"
              variant="solid"
              tone="formAccent"
            />
            <ButtonIcon
              icon={<IconAdd />}
              label="Add"
              variant="soft"
              tone="formAccent"
            />
            <ButtonIcon
              icon={<IconShare />}
              label="Share"
              variant="transparent"
              tone="formAccent"
            />
          </Inline>
        </Stack>,
      ),
  },
  ButtonLink: {
    stageWidth: 480,
    Example: () =>
      source(
        <Inline space="small" collapseBelow="desktop" align="center">
          <ButtonLink href="#" variant="solid">
            Solid
          </ButtonLink>
          <ButtonLink href="#" variant="ghost">
            Ghost
          </ButtonLink>
          <ButtonLink href="#" variant="soft">
            Soft
          </ButtonLink>
          <ButtonLink href="#" variant="transparent">
            Transparent
          </ButtonLink>
        </Inline>,
      ),
  },
  Card: {
    stageWidth: 320,
    Example: () =>
      source(
        <Card>
          <Placeholder label="This content is inside a card" height={60} />
        </Card>,
      ),
  },
  Checkbox: {
    stageWidth: 320,
    Example: ({ setDefaultState, getState, toggleState }) =>
      source(
        <Box display="flex" alignItems="center" justifyContent="center">
          {setDefaultState('checked', true)}

          <Checkbox
            checked={getState('checked')}
            onChange={() => toggleState('checked')}
            label="Label"
          />
        </Box>,
      ),
  },
  Columns: {
    stageWidth: 320,
    Example: () =>
      source(
        <Columns space="none">
          <Column>
            <Placeholder height={60} />
          </Column>
          <Column>
            <Placeholder height={60} />
          </Column>
          <Column>
            <Placeholder height={60} />
          </Column>
        </Columns>,
      ),
  },
  ContentBlock: {
    stageWidth: 320,
    Example: () =>
      source(
        <ContentBlock width="small">
          <Placeholder height={100} />
        </ContentBlock>,
      ),
  },
  Dialog: {
    stageWidth: 640,
    Example: dialogDocs.Example,
  },
  Disclosure: {
    stageWidth: 320,
    Example: ({ setDefaultState, getState, setState }) =>
      source(
        <>
          {setDefaultState('expanded', true)}

          <Disclosure
            expandLabel="Show content"
            collapseLabel="Hide content"
            expanded={getState('expanded')}
            onToggle={setState('expanded')}
          >
            <Text>Content</Text>
          </Disclosure>
        </>,
      ),
  },
  Divider: {
    stageWidth: 480,
    Example: () =>
      source(
        <Stack space="xlarge">
          <Stack space="medium">
            <Text tone="secondary">Regular weight</Text>
            <Divider />
          </Stack>
          <Stack space="medium">
            <Text tone="secondary">Strong weight</Text>
            <Divider weight="strong" />
          </Stack>
        </Stack>,
      ),
  },
  Drawer: {
    stageWidth: 720,
    Example: drawerDocs.Example,
  },
  Dropdown: {
    stageWidth: 480,
    Example: ({ getState, setState }) =>
      source(
        <Dropdown
          label="Label"
          onChange={setState('dropdown')}
          value={getState('dropdown')}
          placeholder="Please select"
        >
          <option>Option 1</option>
          <option>Option 2</option>
        </Dropdown>,
      ),
  },
  FieldLabel: {
    stageWidth: 480,
    Example: () =>
      source(
        <Box maxWidth="xsmall">
          <Stack space="xsmall">
            <FieldLabel
              htmlFor="example"
              label="Label"
              secondaryLabel={
                <>
                  Secondary<Hidden below="tablet"> label</Hidden>
                </>
              }
              tertiaryLabel={
                <TextLink href="#">
                  Tertiary<Hidden below="tablet"> label</Hidden>
                </TextLink>
              }
            />
            <Box id="example">
              <Placeholder height={40} />
            </Box>
          </Stack>
        </Box>,
      ),
  },
  FieldMessage: {
    stageWidth: 320,
    Example: () =>
      source(
        <Box maxWidth="small">
          <Stack space="large">
            <Stack space="xsmall">
              <input aria-describedby="message1" />
              <FieldMessage
                id="message1"
                tone="critical"
                message="This is a critical message."
              />
            </Stack>
            <Stack space="xsmall">
              <input aria-describedby="message2" />
              <FieldMessage
                id="message2"
                tone="positive"
                message="This is a positive message."
              />
            </Stack>
          </Stack>
        </Box>,
      ),
  },
  Heading: {
    stageWidth: 640,
    Example: () =>
      source(
        <Stack space="large">
          <Stack space="medium">
            <Heading level="1">Heading Level 1 Regular</Heading>
            <Heading level="1" weight="weak">
              Heading Level 1 Weak
            </Heading>
          </Stack>
          <Stack space="medium">
            <Heading level="2">Heading Level 2 Regular</Heading>
            <Heading level="2" weight="weak">
              Heading Level 2 Weak
            </Heading>
          </Stack>
        </Stack>,
      ),
  },
  Hidden: {
    stageWidth: 640,
    Example: () =>
      source(
        <Stack space="small">
          <Hidden>
            <Placeholder label="1. Hidden always" height={60} />
          </Hidden>
          <Hidden below="wide">
            <Placeholder label="2. Hidden below wide" height={60} />
          </Hidden>
          <Hidden below="desktop">
            <Placeholder label="3. Hidden below desktop" height={60} />
          </Hidden>
          <Hidden below="tablet">
            <Placeholder label="4. Hidden below tablet" height={60} />
          </Hidden>
          <Hidden above="mobile">
            <Placeholder label="5. Hidden above mobile" height={60} />
          </Hidden>
          <Hidden above="tablet">
            <Placeholder label="6. Hidden above tablet" height={60} />
          </Hidden>
          <Hidden above="desktop">
            <Placeholder label="7. Hidden above tablet" height={60} />
          </Hidden>
          <Hidden print>
            <Placeholder label="8. Hidden on print" height={60} />
          </Hidden>
        </Stack>,
      ),
  },
  HiddenVisually: {
    stageWidth: 320,
    Example: () =>
      source(
        <Text>
          The next sentence is only available to screen readers.
          <HiddenVisually> Hello world.</HiddenVisually>
        </Text>,
      ),
  },
  Inline: {
    stageWidth: 480,
    Example: () =>
      source(
        <Inline space="small" alignY="center" align="center">
          <Placeholder width={20} height={100} />
          <Placeholder width={80} height={100} />
          <Placeholder width={40} height={100} />
          <Placeholder width={150} height={100} />
          <Placeholder width={80} height={100} />
        </Inline>,
      ),
  },
  List: {
    stageWidth: 480,
    Example: () =>
      source(
        <Columns space="large" collapseBelow="desktop">
          <Column>
            <List>
              <Text>Bullet</Text>
              <Text>Bullet</Text>
              <Text>Bullet</Text>
            </List>
          </Column>
          <Column>
            <List type="number">
              <Text>Number</Text>
              <Text>Number</Text>
              <Text>Number</Text>
            </List>
          </Column>
          <Column>
            <List type="alpha">
              <Text>Alpha</Text>
              <Text>Alpha</Text>
              <Text>Alpha</Text>
            </List>
          </Column>
          <Column>
            <List type="roman">
              <Text>Roman</Text>
              <Text>Roman</Text>
              <Text>Roman</Text>
            </List>
          </Column>
          <Column>
            <List type="icon" icon={<IconTick />}>
              <Text>Icon</Text>
              <Text>Icon</Text>
              <Text>Icon</Text>
            </List>
          </Column>
        </Columns>,
      ),
  },
  Loader: {
    stageWidth: 240,
    Example: () =>
      source(
        <Box display="flex" justifyContent="center">
          <Loader />
        </Box>,
      ),
  },
  MenuItem: {
    stageWidth: 320,
    Example: () =>
      source(
        <OpenMenuPreview>
          <MenuItem onClick={() => {}}>Button</MenuItem>
          <MenuItemLink href="#">Link</MenuItemLink>
        </OpenMenuPreview>,
      ),
  },
  MenuItemCheckbox: {
    stageWidth: 320,
    Example: ({ setDefaultState, getState, setState }) =>
      source(
        <>
          {setDefaultState('checked1', true)}

          <OpenMenuPreview>
            <MenuItemCheckbox
              checked={getState('checked1')}
              onChange={setState('checked1')}
            >
              Checkbox
            </MenuItemCheckbox>
            <MenuItemCheckbox
              checked={getState('checked2')}
              onChange={setState('checked2')}
            >
              Checkbox
            </MenuItemCheckbox>
          </OpenMenuPreview>
        </>,
      ),
  },
  MenuItemDivider: {
    stageWidth: 320,
    Example: ({ setDefaultState, getState, setState }) =>
      source(
        <>
          {setDefaultState('checked1', true)}

          <OpenMenuPreview>
            <MenuItem onClick={() => {}}>Button</MenuItem>
            <MenuItemDivider />
            <MenuItemCheckbox
              checked={getState('checked2')}
              onChange={setState('checked2')}
            >
              Checkbox
            </MenuItemCheckbox>
          </OpenMenuPreview>
        </>,
      ),
  },
  MenuRenderer: {
    stageWidth: 320,
    Example: () =>
      source(
        <OpenMenuPreview>
          <MenuItem onClick={() => {}}>Button</MenuItem>
          <MenuItemLink href="#">Link</MenuItemLink>
        </OpenMenuPreview>,
      ),
  },
  MonthPicker: {
    stageWidth: 480,
    Example: ({ getState, setState }) =>
      source(
        <MonthPicker
          label="Label"
          onChange={setState('monthpicker')}
          value={getState('monthpicker')}
        />,
      ),
  },
  Notice: {
    stageWidth: 480,
    Example: () =>
      source(
        <Stack space="medium">
          <Notice tone="promote">
            <Text>This is a promoted message.</Text>
          </Notice>
          <Notice tone="info">
            <Text>This is an informative message.</Text>
          </Notice>
          <Notice tone="positive">
            <Text>This is a positive message.</Text>
          </Notice>
          <Notice tone="critical">
            <Text>This is a critical message.</Text>
          </Notice>
        </Stack>,
      ),
  },
  OverflowMenu: {
    stageWidth: 320,
    Example: () =>
      source(
        <Box display="flex" justifyContent="center">
          <OpenMenuPreview
            align="right"
            space="xxsmall"
            trigger={
              <ButtonIcon
                icon={<IconOverflow />}
                variant="transparent"
                label="Options"
              />
            }
          >
            <MenuItem onClick={() => {}}>Button</MenuItem>
            <MenuItemLink href="#" onClick={() => {}}>
              Link
            </MenuItemLink>
          </OpenMenuPreview>
        </Box>,
      ),
  },
  Page: {
    stageWidth: 640,
    Example: pageDocs.Example,
  },
  PageBlock: {
    stageWidth: 480,
    Example: () =>
      source(
        <PageBlock width="medium">
          <Placeholder height={100} />
        </PageBlock>,
      ),
  },
  Pagination: {
    stageWidth: 640,
    Example: ({ setDefaultState, getState, setState }) =>
      source(
        <>
          {setDefaultState('page', 4)}

          <Pagination
            page={getState('page')}
            total={10}
            linkProps={({ page }) => ({
              href: `#`,
              onClick: (e) => {
                e.preventDefault();
                setState('page', page);
              },
            })}
            label="Pagination Example"
          />
        </>,
      ),
  },
  PasswordField: {
    stageWidth: 480,
    Example: ({ getState, setState }) =>
      source(
        <PasswordField
          label="Label"
          onChange={setState('password')}
          value={getState('password')}
        />,
      ),
  },
  RadioGroup: {
    stageWidth: 320,
    Example: ({ getState, setState }) =>
      source(
        <RadioGroup
          value={getState('radio')}
          onChange={({ currentTarget: { value } }) => setState('radio', value)}
          label="Label"
        >
          <RadioItem label="One" value="1" />
          <RadioItem label="Two" value="2" />
          <RadioItem label="Three" value="3" />
        </RadioGroup>,
      ),
  },
  Rating: {
    stageWidth: 320,
    Example: () =>
      source(
        <Box display="flex" justifyContent="center">
          <Rating size="large" rating={3} />
        </Box>,
      ),
  },
  Secondary: {
    stageWidth: 320,
    Example: () =>
      source(
        <Text size="large">
          The last word of this sentence is <Secondary>secondary.</Secondary>
        </Text>,
      ),
  },
  Spread: {
    stageWidth: 320,
    Example: () =>
      source(
        <Spread space="large">
          <Placeholder height={60} width={50} />
          <Placeholder height={60} width={80} />
        </Spread>,
      ),
  },
  Stack: {
    stageWidth: 480,
    Example: () =>
      source(
        <Stack space="large">
          <Placeholder height={40} />
          <Placeholder height={40} />
          <Placeholder height={40} />
        </Stack>,
      ),
  },
  Stepper: {
    stageWidth: 480,
    Example: () =>
      source(
        <Stepper label="Steps example" progress={2}>
          <Step>1. First step</Step>
          <Step>2. Second step</Step>
          <Step>3. Third step</Step>
        </Stepper>,
      ),
  },
  Strong: {
    stageWidth: 320,
    Example: () =>
      source(
        <Text size="large">
          The last word of this sentence is <Strong>strong.</Strong>
        </Text>,
      ),
  },
  Table: {
    stageWidth: 480,
    Example: () =>
      source(
        <Table label="Table hero example">
          <TableHeader>
            <TableRow>
              <TableHeaderCell>
                <Text>Lorem</Text>
              </TableHeaderCell>
              <TableHeaderCell>
                <Text>Ipsum</Text>
              </TableHeaderCell>
              <TableHeaderCell>
                <Text>Dolor</Text>
              </TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <Text>Sit</Text>
              </TableCell>
              <TableCell>
                <Text>Amet</Text>
              </TableCell>
              <TableCell>
                <Text>Consectetur</Text>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Text>Adipiscing</Text>
              </TableCell>
              <TableCell>
                <Text>Elit</Text>
              </TableCell>
              <TableCell>
                <Text>Praesent</Text>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Text>Semper</Text>
              </TableCell>
              <TableCell>
                <Text>Interdum</Text>
              </TableCell>
              <TableCell>
                <Text>Viverra</Text>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>,
      ),
  },
  Tabs: {
    stageWidth: 480,
    Example: () =>
      source(
        <TabsProvider>
          <Stack space="medium">
            <Tabs label="Test tabs">
              <Tab>The first tab</Tab>
              <Tab>The second tab</Tab>
              <Tab badge={<Badge tone="positive">New</Badge>}>
                The third tab
              </Tab>
            </Tabs>
            <TabPanels>
              <TabPanel>
                <Placeholder height={200} label="Panel 1" />
              </TabPanel>
              <TabPanel>
                <Placeholder height={200} label="Panel 2" />
              </TabPanel>
              <TabPanel>
                <Placeholder height={200} label="Panel 3" />
              </TabPanel>
            </TabPanels>
          </Stack>
        </TabsProvider>,
      ),
  },
  Tag: {
    stageWidth: 320,
    Example: () =>
      source(
        <Inline space="small" align="center" alignY="center">
          <Tag>One</Tag>
          <Tag icon={<IconTag />}>Two</Tag>
          <Tag onAdd={() => {}} addLabel="Add">
            Three
          </Tag>
        </Inline>,
      ),
  },
  Text: {
    stageWidth: 480,
    Example: () =>
      source(
        <Stack space="large">
          <Stack space="medium">
            <Text size="large">Text size large regular</Text>
            <Text size="large" weight="medium">
              Text size large medium
            </Text>
            <Text size="large" weight="strong">
              Text size large strong
            </Text>
          </Stack>
          <Stack space="medium">
            <Text size="standard">Text size standard regular</Text>
            <Text size="standard" weight="medium">
              Text size standard medium
            </Text>
            <Text size="standard" weight="strong">
              Text size standard strong
            </Text>
          </Stack>
        </Stack>,
      ),
  },
  TextDropdown: {
    stageWidth: 320,
    Example: ({ setState, getState, setDefaultState }) =>
      source(
        <>
          {setDefaultState('textdropdown', 'Option 1')}

          <Text>
            <TextDropdown
              label="Options"
              value={getState('textdropdown')}
              onChange={setState('textdropdown')}
              options={['Option 1', 'Option 2', 'Option 3']}
            />
          </Text>
        </>,
      ),
  },
  TextField: {
    stageWidth: 480,
    Example: ({ getState, setState }) =>
      source(
        <TextField
          label="Label"
          onChange={setState('textfield')}
          value={getState('textfield')}
          onClear={() => setState('textfield', '')}
        />,
      ),
  },
  TextLink: {
    stageWidth: 320,
    Example: () =>
      source(
        <Box display="flex" justifyContent="center">
          <Text>
            <TextLink href="#" hitArea="large">
              TextLink
            </TextLink>
          </Text>
        </Box>,
      ),
  },
  TextLinkButton: {
    stageWidth: 320,
    Example: () =>
      source(
        <Text>
          <TextLinkButton>
            Visually a link, with button semantics
          </TextLinkButton>
        </Text>,
      ),
  },
  Textarea: {
    stageWidth: 480,
    Example: ({ getState, setState }) =>
      source(
        <Textarea
          label="Label"
          onChange={setState('textarea')}
          value={getState('textarea')}
        />,
      ),
  },
  Tiles: {
    stageWidth: 480,
    Example: () =>
      source(
        <Tiles columns={3} space="small">
          <Placeholder height={70} />
          <Placeholder height={70} />
          <Placeholder height={70} />
          <Placeholder height={70} />
          <Placeholder height={70} />
          <Placeholder height={70} />
          <Placeholder height={70} />
          <Placeholder height={70} />
          <Placeholder height={70} />
        </Tiles>,
      ),
  },
  Toggle: {
    stageWidth: 320,
    Example: ({ getState, toggleState }) =>
      source(
        <Box display="flex" justifyContent="center">
          <Toggle
            label="Label"
            on={getState('toggle')}
            onChange={() => toggleState('toggle')}
          />
        </Box>,
      ),
  },
  TooltipRenderer: {
    stageWidth: 320,
    Example: () =>
      source(
        <Stack space="small">
          <Box style={{ width: 'fit-content' }}>
            <TooltipContent placement="top">
              <Text>This is a tooltip</Text>
            </TooltipContent>
          </Box>
          <Box aria-label="Help" paddingLeft="xsmall">
            <IconHelp />
          </Box>
        </Stack>,
      ),
  },
  useToast: {
    stageWidth: 480,
    Example: () =>
      source(
        <Stack space="small">
          <Toast
            toastKey="preview"
            dedupeKey="preview"
            shouldRemove={false}
            onClose={() => {}}
            message="Positive toast"
            tone="positive"
            description="Longer description providing more context for the user."
          />
          <Toast
            toastKey="preview2"
            dedupeKey="preview2"
            shouldRemove={false}
            onClose={() => {}}
            message="Critical toast"
            tone="critical"
          />
        </Stack>,
      ),
  },
};
