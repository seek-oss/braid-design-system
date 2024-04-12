import React from 'react';
import {
  type TagSelectorProps,
  TagSelector as BraidTagSelector,
} from '../TagSelector/TagSelector';

export const TagSelector = ({ ...restProps }: TagSelectorProps) => (
  <BraidTagSelector {...restProps} />
);
