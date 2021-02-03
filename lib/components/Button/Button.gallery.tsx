import React from 'react';
import { ComponentExample } from '../../../site/src/types';
import source from '../../utils/source.macro';
import { Button, Box, Inline, IconSend } from '../';

export const galleryItems: ComponentExample[] = [
  {
    label: 'Regular weight',
    Example: () =>
      source(
        <Inline space="small">
          <Button>Submit</Button>
        </Inline>,
      ),
  },
  {
    label: 'Strong weight',
    Example: () =>
      source(
        <Inline space="small">
          <Button weight="strong">Submit</Button>
        </Inline>,
      ),
  },
  {
    label: 'Weak weight',
    Example: () =>
      source(
        <Inline space="small">
          <Button weight="weak">Submit</Button>
        </Inline>,
      ),
  },
  {
    label: 'Critical Button',
    Example: () =>
      source(
        <Inline space="small">
          <Button tone="critical">Delete</Button>
        </Inline>,
      ),
  },
  {
    label: 'Weak Critical Button',
    Example: () =>
      source(
        <Inline space="small">
          <Button weight="weak" tone="critical">
            Delete
          </Button>
        </Inline>,
      ),
  },
  {
    label: 'Weak weight on dark background',
    Example: () =>
      source(
        <Box background="brand" padding="large" borderRadius="standard">
          <Inline space="small">
            <Button weight="weak">Weak Button</Button>
          </Inline>
        </Box>,
      ),
  },
  {
    label: 'With icon',
    Example: () =>
      source(
        <Inline space="small">
          <Button>
            <IconSend /> Send
          </Button>
        </Inline>,
      ),
  },
  {
    label: 'Loading state',
    Example: () =>
      source(
        <Inline space="small">
          <Button loading>Loading</Button>
        </Inline>,
      ),
  },
  {
    label: 'Small Button',
    Example: () =>
      source(
        <Inline space="small">
          <Button size="small">Submit</Button>
        </Inline>,
      ),
  },
];
