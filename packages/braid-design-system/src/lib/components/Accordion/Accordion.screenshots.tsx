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

const accordionItemDefaults = (index: number) => ({
  value: `item-${index}`,
  label: `Accordion item ${index}`,
  children: <Placeholder height={80} />,
});

export const DefaultAccordion = {
  render: () => (
    <Accordion defaultValue={['item-2']}>
      <AccordionItem {...accordionItemDefaults(1)} />
      <AccordionItem {...accordionItemDefaults(2)} />
      <AccordionItem {...accordionItemDefaults(3)} />
    </Accordion>
  ),
};

export const DefaultAccordionWithoutDividers = {
  name: 'Default Accordion without dividers',
  render: () => (
    <Accordion defaultValue={['item-2']} dividers={false}>
      <AccordionItem {...accordionItemDefaults(1)} />
      <AccordionItem {...accordionItemDefaults(2)} />
      <AccordionItem {...accordionItemDefaults(3)} />
    </Accordion>
  ),
};

export const StandardSecondaryAccordion = {
  name: 'Standard secondary Accordion',
  render: () => (
    <Accordion defaultValue={['item-2']} size="standard" tone="secondary">
      <AccordionItem {...accordionItemDefaults(1)} />
      <AccordionItem {...accordionItemDefaults(2)} />
      <AccordionItem {...accordionItemDefaults(3)} />
    </Accordion>
  ),
};

export const StandardSecondaryAccordionWithoutDividers = {
  name: 'Standard secondary Accordion without dividers',
  render: () => (
    <Accordion
      defaultValue={['item-2']}
      size="standard"
      tone="secondary"
      dividers={false}
    >
      <AccordionItem {...accordionItemDefaults(1)} />
      <AccordionItem {...accordionItemDefaults(2)} />
      <AccordionItem {...accordionItemDefaults(3)} />
    </Accordion>
  ),
};

export const SmallSecondaryAccordion = {
  name: 'Small secondary Accordion',
  render: () => (
    <Accordion defaultValue={['item-2']} size="small" tone="secondary">
      <AccordionItem {...accordionItemDefaults(1)} />
      <AccordionItem {...accordionItemDefaults(2)} />
      <AccordionItem {...accordionItemDefaults(3)} />
    </Accordion>
  ),
};

export const SmallSecondaryAccordionWithoutDividers = {
  name: 'Small secondary Accordion without dividers',
  render: () => (
    <Accordion
      defaultValue={['item-2']}
      size="small"
      tone="secondary"
      dividers={false}
    >
      <AccordionItem {...accordionItemDefaults(1)} />
      <AccordionItem {...accordionItemDefaults(2)} />
      <AccordionItem {...accordionItemDefaults(3)} />
    </Accordion>
  ),
};

export const XSmallSecondaryAccordion = {
  name: 'Xsmall secondary Accordion',
  render: () => (
    <Accordion defaultValue={['item-2']} size="xsmall" tone="secondary">
      <AccordionItem {...accordionItemDefaults(1)} />
      <AccordionItem {...accordionItemDefaults(2)} />
      <AccordionItem {...accordionItemDefaults(3)} />
    </Accordion>
  ),
};

export const XSmallSecondaryAccordionWithoutDividers = {
  name: 'Xsmall secondary Accordion without dividers',
  render: () => (
    <Accordion
      defaultValue={['item-2']}
      size="xsmall"
      tone="secondary"
      dividers={false}
    >
      <AccordionItem {...accordionItemDefaults(1)} />
      <AccordionItem {...accordionItemDefaults(2)} />
      <AccordionItem {...accordionItemDefaults(3)} />
    </Accordion>
  ),
};

export const AccordionRegularWeight = {
  name: 'Accordion regular weight',
  render: () => (
    <Accordion defaultValue={['item-2']} weight="regular">
      <AccordionItem {...accordionItemDefaults(1)} />
      <AccordionItem {...accordionItemDefaults(2)} />
      <AccordionItem {...accordionItemDefaults(3)} />
    </Accordion>
  ),
};

export const DefaultAccordionItem = {
  name: 'Default AccordionItem',
  render: () => (
    <AccordionItem label="Label">
      <Text>Content</Text>
    </AccordionItem>
  ),
};

export const AccordionItemWithSizeAndTone = {
  name: 'AccordionItem with size and tone',
  render: () => (
    <AccordionItem label="Label" size="small" tone="secondary">
      <Text size="small">Content</Text>
    </AccordionItem>
  ),
};

export const AccordionItemWithRegularWeight = {
  name: 'AccordionItem with regular weight',
  render: () => (
    <AccordionItem label="Label" weight="regular">
      <Text>Content</Text>
    </AccordionItem>
  ),
};

export const AccordionItemWithABadge = {
  name: 'AccordionItem with a badge',
  render: () => (
    <AccordionItem
      label="Label"
      badge={
        <Badge tone="promote" weight="strong">
          Badge
        </Badge>
      }
    >
      <Text size="small">Content</Text>
    </AccordionItem>
  ),
};

export const AccordionItemWithAnIconShouldFollowSize = {
  name: 'AccordionItem with an icon - should follow size',
  render: () => (
    <Box paddingY="medium">
      <Stack space="medium">
        <Box background="surface">
          <AccordionItem label="Label" size="xsmall" icon={<IconImage />}>
            <Text size="small">Content</Text>
          </AccordionItem>
        </Box>
        <Divider />
        <Box background="surface">
          <AccordionItem label="Label" size="small" icon={<IconImage />}>
            <Text size="small">Content</Text>
          </AccordionItem>
        </Box>
        <Divider />
        <Box background="surface">
          <AccordionItem label="Label" size="standard" icon={<IconImage />}>
            <Text size="small">Content</Text>
          </AccordionItem>
        </Box>
        <Divider />
        <Box background="surface">
          <AccordionItem label="Label" size="large" icon={<IconImage />}>
            <Text size="small">Content</Text>
          </AccordionItem>
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
      <AccordionItem label="Accordion item" onToggle={() => {}}>
        <Placeholder height={80} />
      </AccordionItem>
    </Box>
  ),
};

export const AccordionItemWithAnIconShouldFollowTone = {
  name: 'AccordionItem with an icon - should follow tone',
  render: () => (
    <Box paddingY="medium">
      <Stack space="medium">
        <Box background="surface">
          <AccordionItem
            label="Label"
            size="xsmall"
            tone="secondary"
            icon={<IconImage />}
          >
            <Text size="small">Content</Text>
          </AccordionItem>
        </Box>
        <Divider />
        <Box background="surface">
          <AccordionItem
            label="Label"
            size="small"
            tone="secondary"
            icon={<IconImage />}
          >
            <Text size="small">Content</Text>
          </AccordionItem>
        </Box>
        <Divider />
        <Box background="surface">
          <AccordionItem
            label="Label"
            size="standard"
            tone="secondary"
            icon={<IconImage />}
          >
            <Text size="small">Content</Text>
          </AccordionItem>
        </Box>
        <Divider />
        <Box background="surface">
          <AccordionItem
            label="Label"
            size="large"
            tone="secondary"
            icon={<IconImage />}
          >
            <Text size="small">Content</Text>
          </AccordionItem>
        </Box>
      </Stack>
    </Box>
  ),
};

export const MultipleFalseNoValueOrDefault = {
  name: 'Accordion with a multiple false, and no value or defaultValue',
  render: () => (
    <Accordion multiple={false}>
      <AccordionItem {...accordionItemDefaults(1)} />
      <AccordionItem {...accordionItemDefaults(2)} />
      <AccordionItem {...accordionItemDefaults(3)} />
    </Accordion>
  ),
};

export const MultipleFalseWithDefaultValue = {
  name: 'Accordion with a multiple false and defaultValue of item-1',
  render: () => (
    <Accordion multiple={false} defaultValue="item-1">
      <AccordionItem {...accordionItemDefaults(1)}>
        <Box background="positiveLight">
          <Placeholder height={80} label="Should be open" />
        </Box>
      </AccordionItem>
      <AccordionItem {...accordionItemDefaults(2)}>
        <Box background="critical">
          <Placeholder height={80} label="Shouldnt be open" />
        </Box>
      </AccordionItem>
      <AccordionItem {...accordionItemDefaults(3)}>
        <Box background="critical">
          <Placeholder height={80} label="Shouldnt be open" />
        </Box>
      </AccordionItem>
    </Accordion>
  ),
};

export const MultipleFalseWithValue = {
  name: 'Accordion with a multiple false and value of item-3',
  render: () => (
    <Accordion multiple={false} value="item-3" onChange={() => {}}>
      <AccordionItem {...accordionItemDefaults(1)}>
        <Box background="critical">
          <Placeholder height={80} label="Shouldnt be open" />
        </Box>
      </AccordionItem>
      <AccordionItem {...accordionItemDefaults(2)}>
        <Box background="critical">
          <Placeholder height={80} label="Shouldnt be open" />
        </Box>
      </AccordionItem>
      <AccordionItem {...accordionItemDefaults(3)}>
        <Box background="positiveLight">
          <Placeholder height={80} label="Should be open" />
        </Box>
      </AccordionItem>
    </Accordion>
  ),
};
