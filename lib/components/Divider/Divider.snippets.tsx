import React from 'react';
import { Snippets } from '../private/Snippets';
import { Divider } from '../../playroom/components';

export const snippets: Snippets = [
  { name: 'Regular', code: <Divider /> },
  { name: 'Strong', code: <Divider weight="strong" /> },
];
