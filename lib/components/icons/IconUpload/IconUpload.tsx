import React from 'react';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconUploadSvg } from './IconUploadSvg';

export type IconUploadProps = UseIconProps;

export const IconUpload = (props: IconUploadProps) => {
  const iconProps = useIcon(props);

  return <IconUploadSvg {...iconProps} />;
};
