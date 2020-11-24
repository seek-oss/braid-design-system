import React from 'react';
import source from '../../utils/source.macro';
import { Snippets } from '../private/Snippets';
import { Button } from '../../playroom/components';

export const snippets: Snippets = [
  {
    name: 'Standard',
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
];
