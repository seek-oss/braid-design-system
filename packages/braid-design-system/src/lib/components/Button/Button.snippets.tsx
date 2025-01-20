import source from '@braid-design-system/source.macro';
import React from 'react';

import { Button } from '../../playroom/components';
import type { Snippets } from '../private/Snippets';

export const snippets: Snippets = [
  {
    name: 'Solid',
    code: source(<Button variant="solid">Button</Button>),
  },
  {
    name: 'Ghost',
    code: source(<Button variant="ghost">Button</Button>),
  },
  {
    name: 'Soft',
    code: source(<Button variant="soft">Button</Button>),
  },
  {
    name: 'Transparent',
    code: source(<Button variant="transparent">Button</Button>),
  },
  {
    name: 'Critical Solid',
    code: source(
      <Button tone="critical" variant="solid">
        Button
      </Button>,
    ),
  },
  {
    name: 'Critical Ghost',
    code: source(
      <Button tone="critical" variant="ghost">
        Button
      </Button>,
    ),
  },
  {
    name: 'Critical Soft',
    code: source(
      <Button tone="critical" variant="soft">
        Button
      </Button>,
    ),
  },
  {
    name: 'Critical Transparent',
    code: source(
      <Button tone="critical" variant="transparent">
        Button
      </Button>,
    ),
  },
  {
    name: 'BrandAccent Solid',
    code: source(
      <Button tone="brandAccent" variant="solid">
        Button
      </Button>,
    ),
  },
  {
    name: 'BrandAccent Ghost',
    code: source(
      <Button tone="brandAccent" variant="ghost">
        Button
      </Button>,
    ),
  },
  {
    name: 'BrandAccent Soft',
    code: source(
      <Button tone="brandAccent" variant="soft">
        Button
      </Button>,
    ),
  },
  {
    name: 'BrandAccent Transparent',
    code: source(
      <Button tone="brandAccent" variant="transparent">
        Button
      </Button>,
    ),
  },
  {
    name: 'Neutral Solid',
    code: source(
      <Button tone="neutral" variant="solid">
        Button
      </Button>,
    ),
  },
  {
    name: 'Neutral Ghost',
    code: source(
      <Button tone="neutral" variant="ghost">
        Button
      </Button>,
    ),
  },
  {
    name: 'Neutral Soft',
    code: source(
      <Button tone="neutral" variant="soft">
        Button
      </Button>,
    ),
  },
  {
    name: 'Neutral Transparent',
    code: source(
      <Button tone="neutral" variant="transparent">
        Button
      </Button>,
    ),
  },
  {
    name: 'Small Solid',
    code: source(
      <Button size="small" variant="solid">
        Button
      </Button>,
    ),
  },
  {
    name: 'Small Ghost',
    code: source(
      <Button size="small" variant="ghost">
        Button
      </Button>,
    ),
  },
  {
    name: 'Small Soft',
    code: source(
      <Button size="small" variant="soft">
        Button
      </Button>,
    ),
  },
  {
    name: 'Small Transparent',
    code: source(
      <Button size="small" variant="transparent">
        Button
      </Button>,
    ),
  },
];
