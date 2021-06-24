import React from 'react';
import source from '../../utils/source.macro';
import { Snippets } from '../private/Snippets';
import {
  Dialog,
  Box,
  Stack,
  Inline,
  Button,
  IconMail,
  Placeholder,
} from '../../playroom/components';

export const snippets: Snippets = [
  {
    name: 'Standard',
    code: source(
      <Dialog title="Dialog Heading" open={true}>
        <Placeholder width={250} height={100} />
      </Dialog>,
    ),
  },
  {
    name: 'With illustration',
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
    name: 'Xsmall',
    code: source(
      <Dialog title="Dialog Heading" width="xsmall" open={true}>
        <Placeholder width="100%" height={100} />
      </Dialog>,
    ),
  },
  {
    name: 'Small',
    code: source(
      <Dialog title="Dialog Heading" width="small" open={true}>
        <Placeholder width="100%" height={100} />
      </Dialog>,
    ),
  },
  {
    name: 'Medium',
    code: source(
      <Dialog title="Dialog Heading" width="medium" open={true}>
        <Placeholder width="100%" height={100} />
      </Dialog>,
    ),
  },
  {
    name: 'Large',
    code: source(
      <Dialog title="Dialog Heading" width="large" open={true}>
        <Placeholder width="100%" height={100} />
      </Dialog>,
    ),
  },
];
