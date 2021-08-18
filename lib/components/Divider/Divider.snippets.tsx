import React from 'react';
import { Snippets } from '../private/Snippets';
import { Divider } from '../../playroom/components';
import source from '../../utils/source.macro';

export const snippets: Snippets = [
  { name: 'Regular', code: source(<Divider />) },
  { name: 'Strong', code: source(<Divider weight="strong" />) },
];
