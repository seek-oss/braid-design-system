import type { Meta } from '@storybook/react-webpack5';
import { useState } from 'react';

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
  parameters: {
    screenshotOnlyInWireframe: false,
  },
} satisfies Meta<typeof Accordion>;

export default meta;

const id = 'accordionItem';

export const DefaultAccordion = {
  name: 'Default Accordion',
  render: function Render() {
    const [expanded1, setExpanded1] = useState(false);
    const [expanded2, setExpanded2] = useState(true);
    const [expanded3, setExpanded3] = useState(false);
    return (
      <Accordion>
        <AccordionItem
          label="Accordion item 1"
          id={`${id}_1`}
          expanded={expanded1}
          onToggle={setExpanded1}
        >
          <Placeholder height={80} />
        </AccordionItem>
        <AccordionItem
          label="Accordion item 2"
          id={`${id}_2`}
          expanded={expanded2}
          onToggle={setExpanded2}
        >
          <Placeholder height={80} />
        </AccordionItem>
        <AccordionItem
          label="Accordion item 3"
          id={`${id}_3`}
          expanded={expanded3}
          onToggle={setExpanded3}
        >
          <Placeholder height={80} />
        </AccordionItem>
      </Accordion>
    );
  },
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
};

export const DefaultAccordionwithoutdividers = {
  name: 'Default Accordion without dividers',
  render: function Render() {
    const [expanded1, setExpanded1] = useState(false);
    const [expanded2, setExpanded2] = useState(true);
    const [expanded3, setExpanded3] = useState(false);
    return (
      <Accordion dividers={false}>
        <AccordionItem
          label="Accordion item 1"
          id={`${id}_1`}
          expanded={expanded1}
          onToggle={setExpanded1}
        >
          <Placeholder height={80} />
        </AccordionItem>
        <AccordionItem
          label="Accordion item 2"
          id={`${id}_2`}
          expanded={expanded2}
          onToggle={setExpanded2}
        >
          <Placeholder height={80} />
        </AccordionItem>
        <AccordionItem
          label="Accordion item 3"
          id={`${id}_3`}
          expanded={expanded3}
          onToggle={setExpanded3}
        >
          <Placeholder height={80} />
        </AccordionItem>
      </Accordion>
    );
  },
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
};
export const DefaultAccordionwithcustomspace = {
  name: 'Default Accordion with custom space',
  render: function Render() {
    const [expanded1, setExpanded1] = useState(false);
    const [expanded2, setExpanded2] = useState(true);
    const [expanded3, setExpanded3] = useState(false);
    return (
      <Accordion space="xlarge">
        <AccordionItem
          label="Accordion item 1"
          id={`${id}_1`}
          expanded={expanded1}
          onToggle={setExpanded1}
        >
          <Placeholder height={80} />
        </AccordionItem>
        <AccordionItem
          label="Accordion item 2"
          id={`${id}_2`}
          expanded={expanded2}
          onToggle={setExpanded2}
        >
          <Placeholder height={80} />
        </AccordionItem>
        <AccordionItem
          label="Accordion item 3"
          id={`${id}_3`}
          expanded={expanded3}
          onToggle={setExpanded3}
        >
          <Placeholder height={80} />
        </AccordionItem>
      </Accordion>
    );
  },
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
};

export const StandardsecondaryAccordion = {
  name: 'Standard secondary Accordion',
  render: function Render() {
    const [expanded1, setExpanded1] = useState(false);
    const [expanded2, setExpanded2] = useState(true);
    const [expanded3, setExpanded3] = useState(false);
    return (
      <Accordion size="standard" tone="secondary">
        <AccordionItem
          label="Accordion item 1"
          id={`${id}_1`}
          expanded={expanded1}
          onToggle={setExpanded1}
        >
          <Placeholder height={80} />
        </AccordionItem>
        <AccordionItem
          label="Accordion item 2"
          id={`${id}_2`}
          expanded={expanded2}
          onToggle={setExpanded2}
        >
          <Placeholder height={80} />
        </AccordionItem>
        <AccordionItem
          label="Accordion item 3"
          id={`${id}_3`}
          expanded={expanded3}
          onToggle={setExpanded3}
        >
          <Placeholder height={80} />
        </AccordionItem>
      </Accordion>
    );
  },
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
};

export const StandardsecondaryAccordionwithoutdividers = {
  name: 'Standard secondary Accordion without dividers',
  render: function Render() {
    const [expanded1, setExpanded1] = useState(false);
    const [expanded2, setExpanded2] = useState(true);
    const [expanded3, setExpanded3] = useState(false);
    return (
      <Accordion size="standard" tone="secondary" dividers={false}>
        <AccordionItem
          label="Accordion item 1"
          id={`${id}_1`}
          expanded={expanded1}
          onToggle={setExpanded1}
        >
          <Placeholder height={80} />
        </AccordionItem>
        <AccordionItem
          label="Accordion item 2"
          id={`${id}_2`}
          expanded={expanded2}
          onToggle={setExpanded2}
        >
          <Placeholder height={80} />
        </AccordionItem>
        <AccordionItem
          label="Accordion item 3"
          id={`${id}_3`}
          expanded={expanded3}
          onToggle={setExpanded3}
        >
          <Placeholder height={80} />
        </AccordionItem>
      </Accordion>
    );
  },
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
};

export const SmallsecondaryAccordion = {
  name: 'Small secondary Accordion',
  render: function Render() {
    const [expanded1, setExpanded1] = useState(false);
    const [expanded2, setExpanded2] = useState(true);
    const [expanded3, setExpanded3] = useState(false);
    return (
      <Accordion size="small" tone="secondary">
        <AccordionItem
          label="Accordion item 1"
          id={`${id}_1`}
          expanded={expanded1}
          onToggle={setExpanded1}
        >
          <Placeholder height={80} />
        </AccordionItem>
        <AccordionItem
          label="Accordion item 2"
          id={`${id}_2`}
          expanded={expanded2}
          onToggle={setExpanded2}
        >
          <Placeholder height={80} />
        </AccordionItem>
        <AccordionItem
          label="Accordion item 3"
          id={`${id}_3`}
          expanded={expanded3}
          onToggle={setExpanded3}
        >
          <Placeholder height={80} />
        </AccordionItem>
      </Accordion>
    );
  },
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
};

export const SmallsecondaryAccordionwithoutdividers = {
  name: 'Small secondary Accordion without dividers',
  render: function Render() {
    const [expanded1, setExpanded1] = useState(false);
    const [expanded2, setExpanded2] = useState(true);
    const [expanded3, setExpanded3] = useState(false);
    return (
      <Accordion size="small" tone="secondary" dividers={false}>
        <AccordionItem
          label="Accordion item 1"
          id={`${id}_1`}
          expanded={expanded1}
          onToggle={setExpanded1}
        >
          <Placeholder height={80} />
        </AccordionItem>
        <AccordionItem
          label="Accordion item 2"
          id={`${id}_2`}
          expanded={expanded2}
          onToggle={setExpanded2}
        >
          <Placeholder height={80} />
        </AccordionItem>
        <AccordionItem
          label="Accordion item 3"
          id={`${id}_3`}
          expanded={expanded3}
          onToggle={setExpanded3}
        >
          <Placeholder height={80} />
        </AccordionItem>
      </Accordion>
    );
  },
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
};

export const XsmallsecondaryAccordion = {
  name: 'Xsmall secondary Accordion',
  render: function Render() {
    const [expanded1, setExpanded1] = useState(false);
    const [expanded2, setExpanded2] = useState(true);
    const [expanded3, setExpanded3] = useState(false);
    return (
      <Accordion size="xsmall" tone="secondary">
        <AccordionItem
          label="Accordion item 1"
          id={`${id}_1`}
          expanded={expanded1}
          onToggle={setExpanded1}
        >
          <Placeholder height={80} />
        </AccordionItem>
        <AccordionItem
          label="Accordion item 2"
          id={`${id}_2`}
          expanded={expanded2}
          onToggle={setExpanded2}
        >
          <Placeholder height={80} />
        </AccordionItem>
        <AccordionItem
          label="Accordion item 3"
          id={`${id}_3`}
          expanded={expanded3}
          onToggle={setExpanded3}
        >
          <Placeholder height={80} />
        </AccordionItem>
      </Accordion>
    );
  },
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
};

export const XsmallsecondaryAccordionwithoutdividers = {
  name: 'Xsmall secondary Accordion without dividers',
  render: function Render() {
    const [expanded1, setExpanded1] = useState(false);
    const [expanded2, setExpanded2] = useState(true);
    const [expanded3, setExpanded3] = useState(false);
    return (
      <Accordion size="xsmall" tone="secondary" dividers={false}>
        <AccordionItem
          label="Accordion item 1"
          id={`${id}_1`}
          expanded={expanded1}
          onToggle={setExpanded1}
        >
          <Placeholder height={80} />
        </AccordionItem>
        <AccordionItem
          label="Accordion item 2"
          id={`${id}_2`}
          expanded={expanded2}
          onToggle={setExpanded2}
        >
          <Placeholder height={80} />
        </AccordionItem>
        <AccordionItem
          label="Accordion item 3"
          id={`${id}_3`}
          expanded={expanded3}
          onToggle={setExpanded3}
        >
          <Placeholder height={80} />
        </AccordionItem>
      </Accordion>
    );
  },
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
};

export const Accordionregularweight = {
  name: 'Accordion regular weight',
  render: function Render() {
    const [expanded1, setExpanded1] = useState(false);
    const [expanded2, setExpanded2] = useState(true);
    const [expanded3, setExpanded3] = useState(false);
    return (
      <Accordion weight="regular">
        <AccordionItem
          label="Accordion item 1"
          id={`${id}_1`}
          expanded={expanded1}
          onToggle={setExpanded1}
        >
          <Placeholder height={80} />
        </AccordionItem>
        <AccordionItem
          label="Accordion item 2"
          id={`${id}_2`}
          expanded={expanded2}
          onToggle={setExpanded2}
        >
          <Placeholder height={80} />
        </AccordionItem>
        <AccordionItem
          label="Accordion item 3"
          id={`${id}_3`}
          expanded={expanded3}
          onToggle={setExpanded3}
        >
          <Placeholder height={80} />
        </AccordionItem>
      </Accordion>
    );
  },
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
};

export const DefaultAccordionItem = {
  name: 'Default AccordionItem',
  render: () => (
    <AccordionItem label="Label" id={id}>
      <Text>Content</Text>
    </AccordionItem>
  ),
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
};

export const AccordionItemwithsizeandtone = {
  name: 'AccordionItem with size and tone',
  render: () => (
    <AccordionItem label="Label" id={id} size="small" tone="secondary">
      <Text size="small">Content</Text>
    </AccordionItem>
  ),
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
};

export const AccordionItemwithregularweight = {
  name: 'AccordionItem with regular weight',
  render: () => (
    <AccordionItem label="Label" id={id} weight="regular">
      <Text>Content</Text>
    </AccordionItem>
  ),
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
};

export const AccordionItemwithabadge = {
  name: 'AccordionItem with a badge',
  render: () => (
    <AccordionItem
      label="Label"
      id={id}
      badge={
        <Badge tone="promote" weight="strong">
          Badge
        </Badge>
      }
    >
      <Text size="small">Content</Text>
    </AccordionItem>
  ),
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
};

export const AccordionItemwithaniconshouldfollowsize = {
  name: 'AccordionItem with an icon - should follow size',
  render: () => (
    <Box paddingY="medium">
      <Stack space="medium">
        <Box background="surface">
          <AccordionItem
            label="Label"
            size="xsmall"
            id={`${id}_1`}
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
            id={`${id}_2`}
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
            id={`${id}_3`}
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
            id={`${id}_4`}
            icon={<IconImage />}
          >
            <Text size="small">Content</Text>
          </AccordionItem>
        </Box>
      </Stack>
    </Box>
  ),
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
};

export const Virtualtouchtarget = {
  name: 'Virtual touch target',
  render: () => (
    <Box
      background="surface"
      data={{
        [debugTouchableAttrForDataProp]: '',
      }}
    >
      <AccordionItem label="Accordion item" id={id} onToggle={() => {}}>
        <Placeholder height={80} />
      </AccordionItem>
    </Box>
  ),
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
};

export const AccordionItemwithaniconshouldfollowtone = {
  name: 'AccordionItem with an icon - should follow tone',
  render: () => (
    <Box paddingY="medium">
      <Stack space="medium">
        <Box background="surface">
          <AccordionItem
            label="Label"
            size="xsmall"
            tone="secondary"
            id={`${id}_1`}
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
            id={`${id}_2`}
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
            id={`${id}_3`}
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
            id={`${id}_4`}
            icon={<IconImage />}
          >
            <Text size="small">Content</Text>
          </AccordionItem>
        </Box>
      </Stack>
    </Box>
  ),
  parameters: {
    chromatic: {
      viewports: [320],
    },
    layout: 'fullscreen',
  },
};
