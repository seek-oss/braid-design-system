import React from 'react';
import { IconButton, IconButtonProps } from '../IconButton';
import { IconClear } from '../..';

export type ClearButtonProps = Pick<IconButtonProps, 'onClick' | 'label'>;

export const ClearButton = ({ label = 'Clear', onClick }: ClearButtonProps) => {
  return (
    <IconButton label={label} onClick={onClick}>
      {iconProps => <IconClear {...iconProps} />}
    </IconButton>
  );
};
