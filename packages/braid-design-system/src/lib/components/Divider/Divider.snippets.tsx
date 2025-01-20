import source from '@braid-design-system/source.macro';
import React from 'react';

import { Divider } from '../../playroom/components';
import type { Snippets } from '../private/Snippets';

export const snippets: Snippets = [
  { name: 'Regular', code: source(<Divider />) },
  { name: 'Strong', code: source(<Divider weight="strong" />) },
];
