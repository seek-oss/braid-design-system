import React from 'react';
import {
  type TagSelectorProps,
  TagSelector as BraidTagSelector,
} from '../TagSelector/TagSelector';

export const TagSelector = ({
  tags,
  ariaLabel,
  ...restProps
}: TagSelectorProps) => (
  <BraidTagSelector tags={tags} ariaLabel={ariaLabel} {...restProps} />
);
