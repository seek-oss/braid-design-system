import React from 'react';
import {
  type TagSelectorProps,
  TagSelector as BraidTagSelector,
} from '../TagSelector/TagSelector';

export const TagSelector = ({
  options,
  ariaLabel,
  ...restProps
}: TagSelectorProps) => (
  <BraidTagSelector options={options} ariaLabel={ariaLabel} {...restProps} />
);
