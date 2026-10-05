import type { Meta } from '@storybook/react-webpack5';

import {
  AccordionItem,
  Accordion,
  Badge,
  Text,
  IconImage,
  Stack,
  Divider,
} from '../';
import { Placeholder } from '../../playroom/components';
import { Box } from '../Box/Box';
import { debugTouchableAttrForDataProp } from '../private/touchable/debugTouchable';

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
} satisfies Meta<typeof Accordion>;

export default meta;

const Items = () => (
  <>
    <AccordionItem value="item-1" label="Accordion item 1">
      <Placeholder height={80} />
    </AccordionItem>
    <AccordionItem value="item-2" label="Accordion item 2">
      <Placeholder height={80} />
    </AccordionItem>
    <AccordionItem value="item-3" label="Accordion item 3">
      <Placeholder height={80} />
    </AccordionItem>
  </>
);

export const DefaultAccordion = {
  render: () => (
    <Accordion defaultValue="item-2">
      <Items />
    </Accordion>
  ),
};

export const DefaultAccordionWithoutDividers = {
  name: 'Default Accordion without dividers',
  render: () => (
    <Accordion defaultValue="item-2" dividers={false}>
      <Items />
    </Accordion>
  ),
};

export const StandardSecondaryAccordion = {
  name: 'Standard secondary Accordion',
  render: () => (
    <Accordion defaultValue="item-2" size="standard" tone="secondary">
      <Items />
    </Accordion>
  ),
};

export const StandardSecondaryAccordionWithoutDividers = {
  name: 'Standard secondary Accordion without dividers',
  render: () => (
    <Accordion
      defaultValue="item-2"
      size="standard"
      tone="secondary"
      dividers={false}
    >
      <Items />
    </Accordion>
  ),
};

export const SmallSecondaryAccordion = {
  name: 'Small secondary Accordion',
  render: () => (
    <Accordion defaultValue="item-2" size="small" tone="secondary">
      <Items />
    </Accordion>
  ),
};

export const SmallSecondaryAccordionWithoutDividers = {
  name: 'Small secondary Accordion without dividers',
  render: () => (
    <Accordion
      defaultValue="item-2"
      size="small"
      tone="secondary"
      dividers={false}
    >
      <Items />
    </Accordion>
  ),
};

export const XSmallSecondaryAccordion = {
  name: 'Xsmall secondary Accordion',
  render: () => (
    <Accordion defaultValue="item-2" size="xsmall" tone="secondary">
      <Items />
    </Accordion>
  ),
};

export const XSmallSecondaryAccordionWithoutDividers = {
  name: 'Xsmall secondary Accordion without dividers',
  render: () => (
    <Accordion
      defaultValue="item-2"
      size="xsmall"
      tone="secondary"
      dividers={false}
    >
      <Items />
    </Accordion>
  ),
};

export const AccordionRegularWeight = {
  name: 'Accordion regular weight',
  render: () => (
    <Accordion defaultValue="item-2" weight="regular">
      <Items />
    </Accordion>
  ),
};

export const DefaultAccordionItem = {
  name: 'Default AccordionItem',
  render: () => (
    <Accordion dividers={false}>
      <AccordionItem value="item" label="Label">
        <Text>Content</Text>
      </AccordionItem>
    </Accordion>
  ),
};

export const AccordionItemWithSizeAndTone = {
  name: 'AccordionItem with size and tone',
  render: () => (
    <Accordion dividers={false} size="small" tone="secondary">
      <AccordionItem value="item" label="Label">
        <Text size="small">Content</Text>
      </AccordionItem>
    </Accordion>
  ),
};

export const AccordionItemWithRegularWeight = {
  name: 'AccordionItem with regular weight',
  render: () => (
    <Accordion dividers={false} weight="regular">
      <AccordionItem value="item" label="Label">
        <Text>Content</Text>
      </AccordionItem>
    </Accordion>
  ),
};

export const AccordionItemWithABadge = {
  name: 'AccordionItem with a badge',
  render: () => (
    <Accordion dividers={false}>
      <AccordionItem
        value="item"
        label="Label"
        badge={
          <Badge tone="promote" weight="strong">
            Badge
          </Badge>
        }
      >
        <Text size="small">Content</Text>
      </AccordionItem>
    </Accordion>
  ),
};

export const AccordionItemWithAnIconShouldFollowSize = {
  name: 'AccordionItem with an icon - should follow size',
  render: () => (
    <Box paddingY="medium">
      <Stack space="medium">
        <Box background="surface">
          <Accordion dividers={false} size="xsmall">
            <AccordionItem value="item" label="Label" icon={<IconImage />}>
              <Text size="small">Content</Text>
            </AccordionItem>
          </Accordion>
        </Box>
        <Divider />
        <Box background="surface">
          <Accordion dividers={false} size="small">
            <AccordionItem value="item" label="Label" icon={<IconImage />}>
              <Text size="small">Content</Text>
            </AccordionItem>
          </Accordion>
        </Box>
        <Divider />
        <Box background="surface">
          <Accordion dividers={false} size="standard">
            <AccordionItem value="item" label="Label" icon={<IconImage />}>
              <Text size="small">Content</Text>
            </AccordionItem>
          </Accordion>
        </Box>
        <Divider />
        <Box background="surface">
          <Accordion dividers={false} size="large">
            <AccordionItem value="item" label="Label" icon={<IconImage />}>
              <Text size="small">Content</Text>
            </AccordionItem>
          </Accordion>
        </Box>
      </Stack>
    </Box>
  ),
};

export const VirtualTouchTarget = {
  name: 'Virtual touch target',
  render: () => (
    <Box
      background="surface"
      data={{
        [debugTouchableAttrForDataProp]: '',
      }}
    >
      <Accordion dividers={false}>
        <AccordionItem value="item" label="Accordion item">
          <Placeholder height={80} />
        </AccordionItem>
      </Accordion>
    </Box>
  ),
};

export const SingleOpenAccordion = {
  name: 'Accordion with a single open item',
  render: () => (
    <Accordion multiple={false}>
      <Items />
    </Accordion>
  ),
};

export const SingleOpenAccordionDefaultValue = {
  name: 'Accordion with a single open item and a default value',
  render: () => (
    <Accordion multiple={false} defaultValue="item-1">
      <Items />
    </Accordion>
  ),
};

export const AccordionItemWithAnIconShouldFollowTone = {
  name: 'AccordionItem with an icon - should follow tone',
  render: () => (
    <Box paddingY="medium">
      <Stack space="medium">
        <Box background="surface">
          <Accordion dividers={false} size="xsmall" tone="secondary">
            <AccordionItem value="item" label="Label" icon={<IconImage />}>
              <Text size="small">Content</Text>
            </AccordionItem>
          </Accordion>
        </Box>
        <Divider />
        <Box background="surface">
          <Accordion dividers={false} size="small" tone="secondary">
            <AccordionItem value="item" label="Label" icon={<IconImage />}>
              <Text size="small">Content</Text>
            </AccordionItem>
          </Accordion>
        </Box>
        <Divider />
        <Box background="surface">
          <Accordion dividers={false} size="standard" tone="secondary">
            <AccordionItem value="item" label="Label" icon={<IconImage />}>
              <Text size="small">Content</Text>
            </AccordionItem>
          </Accordion>
        </Box>
        <Divider />
        <Box background="surface">
          <Accordion dividers={false} size="large" tone="secondary">
            <AccordionItem value="item" label="Label" icon={<IconImage />}>
              <Text size="small">Content</Text>
            </AccordionItem>
          </Accordion>
        </Box>
      </Stack>
    </Box>
  ),
};
