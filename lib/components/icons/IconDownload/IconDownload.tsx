import React from 'react';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconDownloadSvg } from './IconDownloadSvg';

export type IconDownloadProps = UseIconProps;

export const IconDownload = (props: IconDownloadProps) => {
  const iconProps = useIcon(props);

  return <IconDownloadSvg {...iconProps} />;
};
