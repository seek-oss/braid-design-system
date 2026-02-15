import source from '@braid-design-system/source.macro';

import {
  Dialog,
  Box,
  Stack,
  Inline,
  Button,
  IconMail,
  Placeholder,
} from '../../playroom/components';
import type { Snippets } from '../private/Snippets';

export const snippets: Snippets = [
  {
    description: 'Standard',
    code: source(
      <Dialog title="Dialog Heading" open={true}>
        <Placeholder width={250} height={100} />
      </Dialog>,
    ),
  },
  {
    description: 'With illustration',
    code: source(
      <Dialog
        title="Illustrated Dialog"
        open={true}
        illustration={
          <Box style={{ height: 100, width: 100 }}>
            <IconMail size="fill" />
          </Box>
        }
      >
        <Stack space="xlarge" align="center">
          <Placeholder width="100%" height={100} />
          <Inline space="small">
            <Button>Got it</Button>
            <Button variant="transparent">Cancel</Button>
          </Inline>
        </Stack>
      </Dialog>,
    ),
  },
  {
    description: 'Xsmall',
    code: source(
      <Dialog title="Dialog Heading" width="xsmall" open={true}>
        <Placeholder width="100%" height={100} />
      </Dialog>,
    ),
  },
  {
    description: 'Small',
    code: source(
      <Dialog title="Dialog Heading" width="small" open={true}>
        <Placeholder width="100%" height={100} />
      </Dialog>,
    ),
  },
  {
    description: 'Medium',
    code: source(
      <Dialog title="Dialog Heading" width="medium" open={true}>
        <Placeholder width="100%" height={100} />
      </Dialog>,
    ),
  },
  {
    description: 'Large',
    code: source(
      <Dialog title="Dialog Heading" width="large" open={true}>
        <Placeholder width="100%" height={100} />
      </Dialog>,
    ),
  },
];
