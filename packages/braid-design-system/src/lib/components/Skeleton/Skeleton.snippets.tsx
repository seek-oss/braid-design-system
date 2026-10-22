import source from '@braid-design-system/source.macro';

import {
  Badge,
  Box,
  Card,
  Column,
  Columns,
  Inline,
  Skeleton,
  Stack,
} from '../../playroom/components';
import type { Snippets } from '../private/Snippets';

export const snippets: Snippets = [
  {
    description: 'Text',
    code: source(<Skeleton type="text" />),
  },
  {
    description: 'Text with icon',
    code: source(<Skeleton type="text" icon width="medium" />),
  },
  {
    description: 'Heading',
    code: source(<Skeleton type="heading" level="2" width="large" />),
  },
  {
    description: 'Button',
    code: source(<Skeleton type="button" width="small" />),
  },
  {
    description: 'Small button',
    code: source(<Skeleton type="button" size="small" width="small" />),
  },
  {
    description: 'Rectangle',
    code: source(<Skeleton type="rectangle" />),
  },
  {
    description: 'Paragraph',
    code: source(<Skeleton type="text" lines={3} />),
  },
  {
    description: 'List row',
    code: source(
      <Stack space="xsmall">
        <Skeleton type="text" size="small" width="medium" />
        <Skeleton type="text" size="xsmall" width="small" />
      </Stack>,
    ),
  },
  {
    description: 'Form',
    code: source(
      <Card>
        <Stack space="large">
          <Stack space="small">
            <Skeleton type="text" size="small" width="xsmall" />
            <Skeleton type="button" />
          </Stack>
          <Stack space="small">
            <Skeleton type="text" size="small" width="small" />
            <Skeleton type="button" />
          </Stack>
          <Inline space="small">
            <Skeleton type="button" width="small" />
            <Skeleton type="button" size="small" width="small" />
          </Inline>
        </Stack>
      </Card>,
    ),
  },
  {
    description: 'Job card',
    code: source(
      <Card>
        <Stack space="large">
          <Columns space="small">
            <Column>
              <Stack space="small">
                <Box position="relative" display="flex" maxWidth="content">
                  <Box opacity={0}>
                    <Badge tone="positive">New</Badge>
                  </Box>
                  <Box
                    position="absolute"
                    inset={0}
                    borderRadius="standard"
                    overflow="hidden"
                  >
                    <Skeleton type="rectangle" height="full" />
                  </Box>
                </Box>
                <Skeleton type="heading" level="4" width="large" />
                <Inline space="small" alignY="center">
                  <Skeleton type="text" width="large" />
                  <Skeleton type="text" width="small" />
                </Inline>
              </Stack>
            </Column>
            <Column width="content">
              <Box width="touchable" height="touchable">
                <Skeleton type="rectangle" height="full" />
              </Box>
            </Column>
          </Columns>
          <Stack space="small">
            <Skeleton type="text" icon width="medium" />
            <Skeleton type="text" icon width="large" />
            <Skeleton type="text" icon width="small" />
          </Stack>
          <Skeleton type="text" lines={2} />
          <Skeleton type="text" size="xsmall" width="small" />
        </Stack>
      </Card>,
    ),
  },
  {
    description: 'Delayed region',
    code: source(
      <Stack space="medium">
        <Skeleton type="heading" level="3" width="large" delayVisibility />
        <Skeleton type="text" lines={2} delayVisibility />
      </Stack>,
    ),
  },
];
