import React, { ReactNode } from 'react';
import { Box, BoxProps } from '../../Box/Box';
import buildDataAttributes, { DataAttributeMap } from '../buildDataAttributes';
import { Truncate } from '../Truncate/Truncate';

export interface TypographyProps extends Pick<BoxProps, 'id' | 'component'> {
  children?: ReactNode;
  align?: BoxProps['textAlign'];
  truncate?: boolean;
  data?: DataAttributeMap;
}
interface PrivateTypography
  extends TypographyProps,
    Pick<BoxProps, 'className'> {}

export const Typography = ({
  id,
  component = 'span',
  className,
  align,
  truncate = false,
  data,
  children,
}: PrivateTypography) => (
  <Box
    id={id}
    display="block"
    component={component}
    textAlign={align}
    className={className}
    {...(data ? buildDataAttributes(data) : undefined)}
  >
    {truncate ? <Truncate>{children}</Truncate> : children}
  </Box>
);
