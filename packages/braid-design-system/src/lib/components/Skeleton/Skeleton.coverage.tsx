import source from '@braid-design-system/source.macro';
import { useEffect, useState, type ReactNode } from 'react';

import {
  Accordion,
  AccordionItem,
  Actions,
  Alert,
  Autosuggest,
  Avatar,
  Badge,
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
  Inline,
  List,
  MenuItem,
  MenuRenderer,
  MonthPicker,
  Notice,
  PageBlock,
  Pagination,
  PasswordField,
  RadioGroup,
  RadioItem,
  Rating,
  Skeleton,
  Stack,
  Tab,
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
  TooltipRenderer,
} from '../';
import { IconBookmark, IconHelp } from '../icons';

import * as typographyStyles from '../../css/typography.css';

type CoverageRow = {
  name: string;
  loading: ReactNode;
  loaded: ReactNode;
};

const noop = () => {};

const Reserve = ({
  children,
  borderRadius = 'standard',
  block = false,
}: {
  children: ReactNode;
  borderRadius?: 'standard' | 'large' | 'full';
  block?: boolean;
}) => (
  <Box
    position="relative"
    display={block ? undefined : 'flex'}
    maxWidth={block ? undefined : 'content'}
  >
    <Box aria-hidden opacity={0} pointerEvents="none">
      {children}
    </Box>
    <Box
      position="absolute"
      inset={0}
      borderRadius={borderRadius}
      overflow="hidden"
    >
      <Skeleton type="rectangle" height="full" />
    </Box>
  </Box>
);

const fieldBone = (
  <Stack space="small">
    <Skeleton type="text" width="xsmall" />
    <Skeleton type="button" />
  </Stack>
);

const PaginationPageBone = () => (
  <Box
    width="touchable"
    height="touchable"
    overflow="hidden"
    borderRadius="standard"
  >
    <Skeleton type="rectangle" height="full" />
  </Box>
);

const coverageRows: CoverageRow[] = [
  {
    name: 'Accordion',
    loading: (
      <Stack space="medium">
        <Divider />
        <Skeleton type="text" size="large" />
        <Divider />
        <Skeleton type="text" size="large" />
        <Divider />
        <Skeleton type="text" size="large" />
        <Divider />
      </Stack>
    ),
    loaded: (
      <Accordion>
        <AccordionItem label="First item">Hidden</AccordionItem>
        <AccordionItem label="Second item">Hidden</AccordionItem>
        <AccordionItem label="Third item">Hidden</AccordionItem>
      </Accordion>
    ),
  },
  {
    name: 'Actions',
    loading: (
      <Reserve block>
        <Actions>
          <Button>Save</Button>
          <Button variant="transparent">Cancel</Button>
        </Actions>
      </Reserve>
    ),
    loaded: (
      <Actions>
        <Button>Save</Button>
        <Button variant="transparent">Cancel</Button>
      </Actions>
    ),
  },
  {
    name: 'Alert',
    loading: (
      <Reserve block borderRadius="large">
        <Alert>
          <Text>Short message</Text>
        </Alert>
      </Reserve>
    ),
    loaded: (
      <Alert>
        <Text>Short message</Text>
      </Alert>
    ),
  },
  {
    name: 'Autosuggest',
    loading: fieldBone,
    loaded: (
      <Autosuggest
        label="Label"
        value={{ text: 'Value' }}
        onChange={noop}
        onClear={noop}
        suggestions={[]}
      />
    ),
  },
  {
    name: 'Avatar',
    loading: <Avatar loading aria-label="Loading avatar" />,
    loaded: <Avatar name="Jane Example" />,
  },
  {
    name: 'Badge',
    loading: <Skeleton type="badge" />,
    loaded: <Badge tone="positive">New</Badge>,
  },
  {
    name: 'Button',
    loading: <Skeleton type="button" width="small" />,
    loaded: <Button>Action</Button>,
  },
  {
    name: 'ButtonIcon',
    loading: (
      <Reserve borderRadius="full">
        <ButtonIcon icon={<IconBookmark />} label="Save" />
      </Reserve>
    ),
    loaded: <ButtonIcon icon={<IconBookmark />} label="Save" />,
  },
  {
    name: 'ButtonLink',
    loading: <Skeleton type="button" width="small" />,
    loaded: <ButtonLink href="#">Action</ButtonLink>,
  },
  {
    name: 'Card',
    loading: (
      <Card>
        <Skeleton type="text" />
      </Card>
    ),
    loaded: (
      <Card>
        <Text>Card body</Text>
      </Card>
    ),
  },
  {
    name: 'Checkbox',
    loading: (
      <Reserve>
        <Checkbox checked={false} onChange={noop} label="Label" />
      </Reserve>
    ),
    loaded: <Checkbox checked={false} onChange={noop} label="Label" />,
  },
  {
    name: 'Columns',
    loading: (
      <Columns space="small">
        <Column>
          <Skeleton type="text" />
        </Column>
        <Column>
          <Skeleton type="text" />
        </Column>
      </Columns>
    ),
    loaded: (
      <Columns space="small">
        <Column>
          <Text>One</Text>
        </Column>
        <Column>
          <Text>Two</Text>
        </Column>
      </Columns>
    ),
  },
  {
    name: 'ContentBlock',
    loading: (
      <ContentBlock width="small">
        <Skeleton type="text" />
      </ContentBlock>
    ),
    loaded: (
      <ContentBlock width="small">
        <Text>Constrained</Text>
      </ContentBlock>
    ),
  },
  {
    name: 'Dialog',
    loading: <Skeleton type="button" width="small" />,
    loaded: <Button>Open dialog</Button>,
  },
  {
    name: 'Disclosure',
    loading: <Skeleton type="text" width="small" />,
    loaded: (
      <Disclosure
        expandLabel="Show more"
        collapseLabel="Show less"
        id="coverage-disclosure"
      >
        Hidden
      </Disclosure>
    ),
  },
  {
    name: 'Drawer',
    loading: <Skeleton type="button" width="small" />,
    loaded: <Button>Open drawer</Button>,
  },
  {
    name: 'Dropdown',
    loading: fieldBone,
    loaded: (
      <Dropdown label="Label" onChange={noop} value="One">
        <option>One</option>
        <option>Two</option>
      </Dropdown>
    ),
  },
  {
    name: 'FieldLabel',
    loading: <Skeleton type="text" width="xsmall" />,
    loaded: <FieldLabel htmlFor={false} label="Label" />,
  },
  {
    name: 'FieldMessage',
    loading: <Skeleton type="text" size="small" />,
    loaded: <FieldMessage id="coverage-field-message" message="Hint" />,
  },
  {
    name: 'Heading',
    loading: <Skeleton type="heading" level="4" width="small" />,
    loaded: <Heading level="4">Heading</Heading>,
  },
  {
    name: 'Inline',
    loading: (
      <Inline space="small">
        <Skeleton type="text" width="xsmall" />
        <Skeleton type="text" width="xsmall" />
      </Inline>
    ),
    loaded: (
      <Inline space="small">
        <Text>One</Text>
        <Text>Two</Text>
      </Inline>
    ),
  },
  {
    name: 'List',
    loading: (
      <Stack space="small">
        <Skeleton type="text" icon="circle" width="xxsmall" />
        <Skeleton type="text" icon="circle" width="xxsmall" />
      </Stack>
    ),
    loaded: (
      <List>
        <Text>One</Text>
        <Text>Two</Text>
      </List>
    ),
  },
  {
    name: 'MenuRenderer',
    loading: <Skeleton type="text" width="xxsmall" />,
    loaded: (
      <MenuRenderer
        trigger={(triggerProps) => (
          <Box cursor="pointer" {...triggerProps}>
            <Text>Menu</Text>
          </Box>
        )}
      >
        <MenuItem onClick={noop}>Item</MenuItem>
      </MenuRenderer>
    ),
  },
  {
    name: 'MonthPicker',
    loading: (
      <Stack space="small">
        <Skeleton type="text" width="xsmall" />
        <Columns space="small">
          <Column>
            <Skeleton type="button" />
          </Column>
          <Column>
            <Skeleton type="button" />
          </Column>
        </Columns>
      </Stack>
    ),
    loaded: (
      <MonthPicker
        label="Label"
        onChange={noop}
        value={{ month: 1, year: 2026 }}
      />
    ),
  },
  {
    name: 'Notice',
    loading: (
      <Reserve block>
        <Notice>
          <Text>Short message</Text>
        </Notice>
      </Reserve>
    ),
    loaded: (
      <Notice>
        <Text>Short message</Text>
      </Notice>
    ),
  },
  {
    name: 'PageBlock',
    loading: (
      <PageBlock width="small">
        <Skeleton type="text" />
      </PageBlock>
    ),
    loaded: (
      <PageBlock width="small">
        <Text>Page width</Text>
      </PageBlock>
    ),
  },
  {
    name: 'Pagination',
    loading: (
      <Inline space="xxsmall" align="center" alignY="center">
        <Skeleton type="button" width="xsmall" />
        <PaginationPageBone />
        <PaginationPageBone />
        <PaginationPageBone />
        <PaginationPageBone />
        <PaginationPageBone />
        <Skeleton type="button" width="xsmall" />
      </Inline>
    ),
    loaded: (
      <Pagination
        page={1}
        total={5}
        label="Pagination"
        linkProps={() => ({
          href: '#',
          onClick: (event) => event.preventDefault(),
        })}
      />
    ),
  },
  {
    name: 'PasswordField',
    loading: fieldBone,
    loaded: <PasswordField label="Label" onChange={noop} value="Value" />,
  },
  {
    name: 'RadioGroup',
    loading: (
      <Reserve block>
        <RadioGroup value="1" onChange={noop} label="Label">
          <RadioItem label="One" value="1" />
          <RadioItem label="Two" value="2" />
        </RadioGroup>
      </Reserve>
    ),
    loaded: (
      <RadioGroup value="1" onChange={noop} label="Label">
        <RadioItem label="One" value="1" />
        <RadioItem label="Two" value="2" />
      </RadioGroup>
    ),
  },
  {
    name: 'Rating',
    loading: (
      <Reserve>
        <Rating rating={4.5} />
      </Reserve>
    ),
    loaded: <Rating rating={4.5} />,
  },
  {
    name: 'Table',
    loading: (
      <Table label="Coverage">
        <TableHeader>
          <TableRow>
            <TableHeaderCell>
              <Skeleton type="text" width="small" />
            </TableHeaderCell>
            <TableHeaderCell>
              <Skeleton type="text" width="small" />
            </TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <Skeleton type="text" width="small" />
            </TableCell>
            <TableCell>
              <Skeleton type="text" width="small" />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    ),
    loaded: (
      <Table label="Coverage">
        <TableHeader>
          <TableRow>
            <TableHeaderCell>
              <Text>Name</Text>
            </TableHeaderCell>
            <TableHeaderCell>
              <Text>Role</Text>
            </TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <Text>Alex</Text>
            </TableCell>
            <TableCell>
              <Text>Design</Text>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    ),
  },
  {
    name: 'Tabs',
    loading: (
      <Reserve block>
        <TabsProvider>
          <Tabs label="Coverage">
            <Tab>One</Tab>
            <Tab>Two</Tab>
          </Tabs>
        </TabsProvider>
      </Reserve>
    ),
    loaded: (
      <TabsProvider>
        <Tabs label="Coverage">
          <Tab>One</Tab>
          <Tab>Two</Tab>
        </Tabs>
      </TabsProvider>
    ),
  },
  {
    name: 'Tag',
    loading: (
      <Reserve borderRadius="full">
        <Tag>Tag</Tag>
      </Reserve>
    ),
    loaded: <Tag>Tag</Tag>,
  },
  {
    name: 'Text',
    loading: <Skeleton type="text" />,
    loaded: <Text>Text</Text>,
  },
  {
    name: 'Textarea',
    loading: (
      <Reserve block>
        <Textarea label="Label" onChange={noop} value="Value" />
      </Reserve>
    ),
    loaded: <Textarea label="Label" onChange={noop} value="Value" />,
  },
  {
    name: 'TextDropdown',
    loading: <Skeleton type="text" width="xsmall" />,
    loaded: (
      <Text>
        <TextDropdown
          label="Options"
          value="One"
          onChange={noop}
          options={['One', 'Two']}
        />
      </Text>
    ),
  },
  {
    name: 'TextField',
    loading: fieldBone,
    loaded: <TextField label="Label" onChange={noop} value="Value" />,
  },
  {
    name: 'TextLink',
    loading: <Skeleton type="text" width="xsmall" />,
    loaded: (
      <Text>
        <TextLink href="#">Text link</TextLink>
      </Text>
    ),
  },
  {
    name: 'TextLinkButton',
    loading: <Skeleton type="text" width="xsmall" />,
    loaded: (
      <Text>
        <TextLinkButton>Text button</TextLinkButton>
      </Text>
    ),
  },
  {
    name: 'Tiles',
    loading: (
      <Tiles columns={2} space="small">
        <Skeleton type="text" />
        <Skeleton type="text" />
      </Tiles>
    ),
    loaded: (
      <Tiles columns={2} space="small">
        <Text>One</Text>
        <Text>Two</Text>
      </Tiles>
    ),
  },
  {
    name: 'Toggle',
    loading: (
      <Reserve>
        <Toggle on={false} onChange={noop} label="On" />
      </Reserve>
    ),
    loaded: <Toggle on={false} onChange={noop} label="On" />,
  },
  {
    name: 'TooltipRenderer',
    loading: (
      <Reserve>
        <TooltipRenderer tooltip={<Text>Hint</Text>}>
          {({ triggerProps }) => (
            <Box aria-label="Help" {...triggerProps}>
              <IconHelp />
            </Box>
          )}
        </TooltipRenderer>
      </Reserve>
    ),
    loaded: (
      <TooltipRenderer tooltip={<Text>Hint</Text>}>
        {({ triggerProps }) => (
          <Box aria-label="Help" {...triggerProps}>
            <IconHelp />
          </Box>
        )}
      </TooltipRenderer>
    ),
  },
  {
    name: 'useToast',
    loading: <Skeleton type="button" />,
    loaded: <Button>Show toast</Button>,
  },
];

export const CoverageRecipe = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setIsLoading((loading) => !loading);
    }, 2500);

    return () => clearInterval(id);
  }, []);

  return (
    <Box className={typographyStyles.fontFamily} aria-busy={isLoading}>
      <Stack space="xlarge">
        {coverageRows.map(({ name, loading, loaded }) => (
          <Stack key={name} space="xsmall">
            <Text size="xsmall" tone="secondary">
              {name}
            </Text>
            <Box>{isLoading ? loading : loaded}</Box>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export const coveragePlayroom = source(
  <Stack space="xlarge">
    <Stack space="xsmall">
      <Text size="xsmall" tone="secondary">
        Button
      </Text>
      <Skeleton type="button" width="small" />
    </Stack>
    <Stack space="xsmall">
      <Text size="xsmall" tone="secondary">
        Heading
      </Text>
      <Skeleton type="heading" level="4" width="small" />
    </Stack>
    <Stack space="xsmall">
      <Text size="xsmall" tone="secondary">
        Badge
      </Text>
      <Skeleton type="badge" />
    </Stack>
    <Stack space="xsmall">
      <Text size="xsmall" tone="secondary">
        TextField
      </Text>
      <Stack space="small">
        <Skeleton type="text" width="xsmall" />
        <Skeleton type="button" />
      </Stack>
    </Stack>
    <Stack space="xsmall">
      <Text size="xsmall" tone="secondary">
        Avatar
      </Text>
      <Avatar loading aria-label="Loading avatar" />
    </Stack>
  </Stack>,
);
