import React from 'react';
import type { Snippets } from '../private/Snippets';
import { Divider } from '../../playroom/components';
import source from '@braid-design-system/source.macro';

export const snippets: Snippets = [
  { name: 'Regular', code: source(<Divider />) },
  { name: 'Strong', code: source(<Divider weight="strong" />) },
];
