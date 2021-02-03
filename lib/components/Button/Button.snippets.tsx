import React from 'react';
import source from '../../utils/source.macro';
import { Snippets } from '../private/Snippets';
import { Button } from '../../playroom/components';

export const snippets: Snippets = [
  {
    name: 'Regular',
    code: source(<Button>Submit</Button>),
  },
  {
    name: 'Strong',
    code: source(<Button weight="strong">Submit</Button>),
  },
  {
    name: 'Weak',
    code: source(<Button weight="weak">Submit</Button>),
  },
  {
    name: 'Critical',
    code: source(<Button tone="critical">Button</Button>),
  },
  {
    name: 'Critical Weak',
    code: source(
      <Button weight="weak" tone="critical">
        Button
      </Button>,
    ),
  },
  {
    name: 'Regular (Small)',
    code: source(<Button size="small">Submit</Button>),
  },
  {
    name: 'Strong (Small)',
    code: source(
      <Button size="small" weight="strong">
        Submit
      </Button>,
    ),
  },
  {
    name: 'Weak (Small)',
    code: source(
      <Button size="small" weight="weak">
        Submit
      </Button>,
    ),
  },
];
