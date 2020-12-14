import React from 'react';
import { ComponentExample } from '../../../site/src/types';
import source from '../../utils/source.macro';
import { Button, Box, Inline } from '../';

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
    label: 'Loading state',
    Example: () =>
      source(
        <Inline space="small">
          <Button loading>Loading</Button>
        </Inline>,
      ),
  },
];
