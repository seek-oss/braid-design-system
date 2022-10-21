import React from 'react';
import { Snippets } from '../private/Snippets';
import { Loader } from '../../playroom/components';
import source from '../../utils/source.macro';

export const snippets: Snippets = [
  { name: 'Standard', code: source(<Loader />) },
];
