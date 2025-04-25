import { useState } from 'react';
import type { ComponentScreenshot } from 'site/types';

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

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'Default Accordion',
      Example: () => {
        const [expanded1, setExpanded1] = useState(false);
        const [expanded2, setExpanded2] = useState(true);
        const [expanded3, setExpanded3] = useState(false);

        return (
          <Accordion>
            <AccordionItem
              label="Accordion item 1"
              expanded={expanded1}
              onToggle={setExpanded1}
            >
              <Placeholder height={80} />
            </AccordionItem>
            <AccordionItem
              label="Accordion item 2"
              expanded={expanded2}
              onToggle={setExpanded2}
            >
              <Placeholder height={80} />
            </AccordionItem>
            <AccordionItem
              label="Accordion item 3"
              expanded={expanded3}
              onToggle={setExpanded3}
            >
              <Placeholder height={80} />
            </AccordionItem>
          </Accordion>
        );
      },
    },
    {
      label: 'Default Accordion without dividers',
      Example: () => {
        const [expanded1, setExpanded1] = useState(false);
        const [expanded2, setExpanded2] = useState(true);
        const [expanded3, setExpanded3] = useState(false);

        return (
          <Accordion dividers={false}>
            <AccordionItem
              label="Accordion item 1"
              expanded={expanded1}
              onToggle={setExpanded1}
            >
              <Placeholder height={80} />
            </AccordionItem>
            <AccordionItem
              label="Accordion item 2"
              expanded={expanded2}
              onToggle={setExpanded2}
            >
              <Placeholder height={80} />
            </AccordionItem>
            <AccordionItem
              label="Accordion item 3"
              expanded={expanded3}
              onToggle={setExpanded3}
            >
              <Placeholder height={80} />
            </AccordionItem>
          </Accordion>
        );
      },
    },
    {
      label: 'Default Accordion with custom space',
      Example: () => {
        const [expanded1, setExpanded1] = useState(false);
        const [expanded2, setExpanded2] = useState(true);
        const [expanded3, setExpanded3] = useState(false);

        return (
          <Accordion space="xlarge">
            <AccordionItem
              label="Accordion item 1"
              expanded={expanded1}
              onToggle={setExpanded1}
            >
              <Placeholder height={80} />
            </AccordionItem>
            <AccordionItem
              label="Accordion item 2"
              expanded={expanded2}
              onToggle={setExpanded2}
            >
              <Placeholder height={80} />
            </AccordionItem>
            <AccordionItem
              label="Accordion item 3"
              expanded={expanded3}
              onToggle={setExpanded3}
            >
              <Placeholder height={80} />
            </AccordionItem>
          </Accordion>
        );
      },
    },
    {
      label: 'Standard secondary Accordion',
      Example: () => {
        const [expanded1, setExpanded1] = useState(false);
        const [expanded2, setExpanded2] = useState(true);
        const [expanded3, setExpanded3] = useState(false);

        return (
          <Accordion size="standard" tone="secondary">
            <AccordionItem
              label="Accordion item 1"
              expanded={expanded1}
              onToggle={setExpanded1}
            >
              <Placeholder height={80} />
            </AccordionItem>
            <AccordionItem
              label="Accordion item 2"
              expanded={expanded2}
              onToggle={setExpanded2}
            >
              <Placeholder height={80} />
            </AccordionItem>
            <AccordionItem
              label="Accordion item 3"
              expanded={expanded3}
              onToggle={setExpanded3}
            >
              <Placeholder height={80} />
            </AccordionItem>
          </Accordion>
        );
      },
    },
    {
      label: 'Standard secondary Accordion without dividers',
      Example: () => {
        const [expanded1, setExpanded1] = useState(false);
        const [expanded2, setExpanded2] = useState(true);
        const [expanded3, setExpanded3] = useState(false);

        return (
          <Accordion size="standard" tone="secondary" dividers={false}>
            <AccordionItem
              label="Accordion item 1"
              expanded={expanded1}
              onToggle={setExpanded1}
            >
              <Placeholder height={80} />
            </AccordionItem>
            <AccordionItem
              label="Accordion item 2"
              expanded={expanded2}
              onToggle={setExpanded2}
            >
              <Placeholder height={80} />
            </AccordionItem>
            <AccordionItem
              label="Accordion item 3"
              expanded={expanded3}
              onToggle={setExpanded3}
            >
              <Placeholder height={80} />
            </AccordionItem>
          </Accordion>
        );
      },
    },
    {
      label: 'Small secondary Accordion',
      Example: () => {
        const [expanded1, setExpanded1] = useState(false);
        const [expanded2, setExpanded2] = useState(true);
        const [expanded3, setExpanded3] = useState(false);

        return (
          <Accordion size="small" tone="secondary">
            <AccordionItem
              label="Accordion item 1"
              expanded={expanded1}
              onToggle={setExpanded1}
            >
              <Placeholder height={80} />
            </AccordionItem>
            <AccordionItem
              label="Accordion item 2"
              expanded={expanded2}
              onToggle={setExpanded2}
            >
              <Placeholder height={80} />
            </AccordionItem>
            <AccordionItem
              label="Accordion item 3"
              expanded={expanded3}
              onToggle={setExpanded3}
            >
              <Placeholder height={80} />
            </AccordionItem>
          </Accordion>
        );
      },
    },
    {
      label: 'Small secondary Accordion without dividers',
      Example: () => {
        const [expanded1, setExpanded1] = useState(false);
        const [expanded2, setExpanded2] = useState(true);
        const [expanded3, setExpanded3] = useState(false);

        return (
          <Accordion size="small" tone="secondary" dividers={false}>
            <AccordionItem
              label="Accordion item 1"
              expanded={expanded1}
              onToggle={setExpanded1}
            >
              <Placeholder height={80} />
            </AccordionItem>
            <AccordionItem
              label="Accordion item 2"
              expanded={expanded2}
              onToggle={setExpanded2}
            >
              <Placeholder height={80} />
            </AccordionItem>
            <AccordionItem
              label="Accordion item 3"
              expanded={expanded3}
              onToggle={setExpanded3}
            >
              <Placeholder height={80} />
            </AccordionItem>
          </Accordion>
        );
      },
    },
    {
      label: 'Xsmall secondary Accordion',
      Example: () => {
        const [expanded1, setExpanded1] = useState(false);
        const [expanded2, setExpanded2] = useState(true);
        const [expanded3, setExpanded3] = useState(false);

        return (
          <Accordion size="xsmall" tone="secondary">
            <AccordionItem
              label="Accordion item 1"
              expanded={expanded1}
              onToggle={setExpanded1}
            >
              <Placeholder height={80} />
            </AccordionItem>
            <AccordionItem
              label="Accordion item 2"
              expanded={expanded2}
              onToggle={setExpanded2}
            >
              <Placeholder height={80} />
            </AccordionItem>
            <AccordionItem
              label="Accordion item 3"
              expanded={expanded3}
              onToggle={setExpanded3}
            >
              <Placeholder height={80} />
            </AccordionItem>
          </Accordion>
        );
      },
    },
    {
      label: 'Xsmall secondary Accordion without dividers',
      Example: () => {
        const [expanded1, setExpanded1] = useState(false);
        const [expanded2, setExpanded2] = useState(true);
        const [expanded3, setExpanded3] = useState(false);

        return (
          <Accordion size="xsmall" tone="secondary" dividers={false}>
            <AccordionItem
              label="Accordion item 1"
              expanded={expanded1}
              onToggle={setExpanded1}
            >
              <Placeholder height={80} />
            </AccordionItem>
            <AccordionItem
              label="Accordion item 2"
              expanded={expanded2}
              onToggle={setExpanded2}
            >
              <Placeholder height={80} />
            </AccordionItem>
            <AccordionItem
              label="Accordion item 3"
              expanded={expanded3}
              onToggle={setExpanded3}
            >
              <Placeholder height={80} />
            </AccordionItem>
          </Accordion>
        );
      },
    },
    {
      label: 'Accordion regular weight',
      Example: () => {
        const [expanded1, setExpanded1] = useState(false);
        const [expanded2, setExpanded2] = useState(true);
        const [expanded3, setExpanded3] = useState(false);

        return (
          <Accordion weight="regular">
            <AccordionItem
              label="Accordion item 1"
              expanded={expanded1}
              onToggle={setExpanded1}
            >
              <Placeholder height={80} />
            </AccordionItem>
            <AccordionItem
              label="Accordion item 2"
              expanded={expanded2}
              onToggle={setExpanded2}
            >
              <Placeholder height={80} />
            </AccordionItem>
            <AccordionItem
              label="Accordion item 3"
              expanded={expanded3}
              onToggle={setExpanded3}
            >
              <Placeholder height={80} />
            </AccordionItem>
          </Accordion>
        );
      },
    },
    {
      label: 'Default AccordionItem',
      Example: () => (
        <AccordionItem label="Label">
          <Text>Content</Text>
        </AccordionItem>
      ),
    },
    {
      label: 'AccordionItem with size and tone',
      Example: () => (
        <AccordionItem label="Label" size="small" tone="secondary">
          <Text size="small">Content</Text>
        </AccordionItem>
      ),
    },
    {
      label: 'AccordionItem with regular weight',
      Example: () => (
        <AccordionItem label="Label" weight="regular">
          <Text>Content</Text>
        </AccordionItem>
      ),
    },
    {
      label: 'AccordionItem with a badge',
      Example: () => (
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
    },
    {
      label: 'AccordionItem with an icon - should follow size',
      Example: () => (
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
    },
    {
      label: 'Virtual touch target',
      Example: ({ handler }) => (
        <Box
          background="surface"
          data={{ [debugTouchableAttrForDataProp]: '' }}
        >
          <AccordionItem label="Accordion item" onToggle={handler}>
            <Placeholder height={80} />
          </AccordionItem>
        </Box>
      ),
    },
    {
      label: 'AccordionItem with an icon - should follow tone',
      Example: () => (
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
    },
  ],
};
