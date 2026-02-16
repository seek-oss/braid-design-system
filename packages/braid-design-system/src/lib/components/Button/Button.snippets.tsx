import source from '@braid-design-system/source.macro';

import { Button } from '../../playroom/components';
import type { Snippets } from '../private/Snippets';

export const snippets: Snippets = [
  {
    description: 'Solid',
    code: source(<Button variant="solid">Button</Button>),
  },
  {
    description: 'Ghost',
    code: source(<Button variant="ghost">Button</Button>),
  },
  {
    description: 'Soft',
    code: source(<Button variant="soft">Button</Button>),
  },
  {
    description: 'Transparent',
    code: source(<Button variant="transparent">Button</Button>),
  },
  {
    description: 'Critical Solid',
    code: source(
      <Button tone="critical" variant="solid">
        Button
      </Button>,
    ),
  },
  {
    description: 'Critical Ghost',
    code: source(
      <Button tone="critical" variant="ghost">
        Button
      </Button>,
    ),
  },
  {
    description: 'Critical Soft',
    code: source(
      <Button tone="critical" variant="soft">
        Button
      </Button>,
    ),
  },
  {
    description: 'Critical Transparent',
    code: source(
      <Button tone="critical" variant="transparent">
        Button
      </Button>,
    ),
  },
  {
    description: 'BrandAccent Solid',
    code: source(
      <Button tone="brandAccent" variant="solid">
        Button
      </Button>,
    ),
  },
  {
    description: 'BrandAccent Ghost',
    code: source(
      <Button tone="brandAccent" variant="ghost">
        Button
      </Button>,
    ),
  },
  {
    description: 'BrandAccent Soft',
    code: source(
      <Button tone="brandAccent" variant="soft">
        Button
      </Button>,
    ),
  },
  {
    description: 'BrandAccent Transparent',
    code: source(
      <Button tone="brandAccent" variant="transparent">
        Button
      </Button>,
    ),
  },
  {
    description: 'Neutral Solid',
    code: source(
      <Button tone="neutral" variant="solid">
        Button
      </Button>,
    ),
  },
  {
    description: 'Neutral Ghost',
    code: source(
      <Button tone="neutral" variant="ghost">
        Button
      </Button>,
    ),
  },
  {
    description: 'Neutral Soft',
    code: source(
      <Button tone="neutral" variant="soft">
        Button
      </Button>,
    ),
  },
  {
    description: 'Neutral Transparent',
    code: source(
      <Button tone="neutral" variant="transparent">
        Button
      </Button>,
    ),
  },
  {
    description: 'Small Solid',
    code: source(
      <Button size="small" variant="solid">
        Button
      </Button>,
    ),
  },
  {
    description: 'Small Ghost',
    code: source(
      <Button size="small" variant="ghost">
        Button
      </Button>,
    ),
  },
  {
    description: 'Small Soft',
    code: source(
      <Button size="small" variant="soft">
        Button
      </Button>,
    ),
  },
  {
    description: 'Small Transparent',
    code: source(
      <Button size="small" variant="transparent">
        Button
      </Button>,
    ),
  },
];
