import React, { useState } from 'react';
import { ComponentScreenshot } from '../../../../../site/src/types';
import {
  AccordionItem,
  Accordion,
  Badge,
  Text,
  IconPromote,
} from '../../components';
import { Placeholder } from '../../playroom/components';
import { Box } from '../Box/Box';
import { Stack } from '../Stack/Stack';

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'Default Accordion',
      Example: ({ id }) => {
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
    },
    {
      label: 'Default Accordion without dividers',
      Example: ({ id }) => {
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
    },
    {
      label: 'Default Accordion with custom space',
      Example: ({ id }) => {
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
    },
    {
      label: 'Standard secondary Accordion',
      Example: ({ id }) => {
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
    },
    {
      label: 'Standard secondary Accordion without dividers',
      Example: ({ id }) => {
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
    },
    {
      label: 'Small secondary Accordion',
      Example: ({ id }) => {
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
    },
    {
      label: 'Small secondary Accordion without dividers',
      Example: ({ id }) => {
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
    },
    {
      label: 'Xsmall secondary Accordion',
      Example: ({ id }) => {
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
    },
    {
      label: 'Xsmall secondary Accordion without dividers',
      Example: ({ id }) => {
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
    },
    {
      label: 'Default AccordionItem',
      Example: ({ id }) => (
        <AccordionItem label="Label" id={id}>
          <Text>Content</Text>
        </AccordionItem>
      ),
    },
    {
      label: 'AccordionItem with size and tone',
      Example: ({ id }) => (
        <AccordionItem label="Label" id={id} size="small" tone="secondary">
          <Text size="small">Content</Text>
        </AccordionItem>
      ),
    },
    {
      label: 'AccordionItem with a badge',
      Example: ({ id }) => (
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
    },
    {
      label: 'AccordionItem with an icon - should follow size',
      Example: ({ id }) => (
        <Box paddingY="medium">
          <Stack space="medium" dividers>
            <Box background="surface">
              <AccordionItem
                label="Label"
                size="xsmall"
                id={`${id}_1`}
                icon={<IconPromote />}
              >
                <Text size="small">Content</Text>
              </AccordionItem>
            </Box>
            <Box background="surface">
              <AccordionItem
                label="Label"
                size="small"
                id={`${id}_2`}
                icon={<IconPromote />}
              >
                <Text size="small">Content</Text>
              </AccordionItem>
            </Box>
            <Box background="surface">
              <AccordionItem
                label="Label"
                size="standard"
                id={`${id}_3`}
                icon={<IconPromote />}
              >
                <Text size="small">Content</Text>
              </AccordionItem>
            </Box>
            <Box background="surface">
              <AccordionItem
                label="Label"
                size="large"
                id={`${id}_4`}
                icon={<IconPromote />}
              >
                <Text size="small">Content</Text>
              </AccordionItem>
            </Box>
          </Stack>
        </Box>
      ),
    },
    {
      label: 'AccordionItem with an icon - should follow tone',
      Example: ({ id }) => (
        <Box paddingY="medium">
          <Stack space="medium" dividers>
            <Box background="surface">
              <AccordionItem
                label="Label"
                size="xsmall"
                tone="secondary"
                id={`${id}_1`}
                icon={<IconPromote />}
              >
                <Text size="small">Content</Text>
              </AccordionItem>
            </Box>
            <Box background="surface">
              <AccordionItem
                label="Label"
                size="small"
                tone="secondary"
                id={`${id}_2`}
                icon={<IconPromote />}
              >
                <Text size="small">Content</Text>
              </AccordionItem>
            </Box>
            <Box background="surface">
              <AccordionItem
                label="Label"
                size="standard"
                tone="secondary"
                id={`${id}_3`}
                icon={<IconPromote />}
              >
                <Text size="small">Content</Text>
              </AccordionItem>
            </Box>
            <Box background="surface">
              <AccordionItem
                label="Label"
                size="large"
                tone="secondary"
                id={`${id}_4`}
                icon={<IconPromote />}
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
