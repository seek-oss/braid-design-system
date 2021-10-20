import React from 'react';
import { ComponentExample } from '../../../site/src/types';
import source from '../../utils/source.macro';
import { Button, Heading, Inline, IconSend } from '../';

export const galleryItems: ComponentExample[] = [
  {
    label: 'Default',
    background: 'surface',
    Example: () =>
      source(
        <Inline space="small">
          <Button>Submit</Button>
          <Button variant="ghost">Submit</Button>
          <Button variant="soft">Submit</Button>
          <Button variant="transparent">Submit</Button>
        </Inline>,
      ),
  },
  {
    label: 'Critical',
    background: 'surface',
    Example: () =>
      source(
        <Inline space="small">
          <Button tone="critical">Delete</Button>
          <Button tone="critical" variant="ghost">
            Delete
          </Button>
          <Button tone="critical" variant="soft">
            Delete
          </Button>
          <Button tone="critical" variant="transparent">
            Delete
          </Button>
        </Inline>,
      ),
  },
  {
    label: 'BrandAccent',
    background: 'surface',
    Example: () =>
      source(
        <Inline space="small">
          <Button tone="brandAccent">Search</Button>
          <Button tone="brandAccent" variant="ghost">
            Search
          </Button>
          <Button tone="brandAccent" variant="soft">
            Search
          </Button>
          <Button tone="brandAccent" variant="transparent">
            Search
          </Button>
        </Inline>,
      ),
  },
  {
    label: 'Neutral',
    background: 'surface',
    Example: () =>
      source(
        <Inline space="small">
          <Button tone="neutral">Search</Button>
          <Button tone="neutral" variant="ghost">
            Search
          </Button>
          <Button tone="neutral" variant="soft">
            Search
          </Button>
          <Button tone="neutral" variant="transparent">
            Search
          </Button>
        </Inline>,
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
    label: 'Small size',
    Example: () =>
      source(
        <Inline space="small">
          <Button size="small">Submit</Button>
        </Inline>,
      ),
  },
  {
    label: 'With vertical bleed',
    Example: () =>
      source(
        <Inline space="small" alignY="center">
          <Heading level="4">Heading</Heading>
          <Button bleedY>Button</Button>
          <Button bleedY size="small">
            Button
          </Button>
        </Inline>,
      ),
  },
];
