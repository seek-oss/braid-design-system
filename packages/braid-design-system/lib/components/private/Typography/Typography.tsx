import React, { ReactElement, ReactNode } from 'react';
import { Box, BoxProps } from '../../Box/Box';
import buildDataAttributes, { DataAttributeMap } from '../buildDataAttributes';
import { Truncate } from '../Truncate/Truncate';
import type { UseIconProps } from '../../../hooks/useIcon';
import { alignToFlexAlign } from '../../../utils/align';

export interface TypographyProps extends Pick<BoxProps, 'id' | 'component'> {
  children?: ReactNode;
  icon?: ReactElement<UseIconProps>;
  align?: BoxProps['textAlign'];
  truncate?: boolean;
  data?: DataAttributeMap;
}
interface PrivateTypographyProps
  extends TypographyProps,
    Pick<BoxProps, 'className'> {}

export const Typography = ({
  id,
  component = 'span',
  className,
  align,
  truncate = false,
  icon,
  data,
  children,
  ...restProps
}: PrivateTypographyProps) => {
  const contents = truncate ? <Truncate>{children}</Truncate> : children;

  return (
    <Box
      id={id}
      display="block"
      component={component}
      textAlign={align}
      className={className}
      {...buildDataAttributes({ data, validateRestProps: restProps })}
    >
      {icon ? (
        <Box
          component="span"
          display="flex"
          justifyContent={alignToFlexAlign(align)}
        >
          <Box
            component="span"
            display="block"
            paddingRight="xsmall"
            flexGrow={0}
            flexShrink={0}
            minWidth={0}
            textAlign={align}
          >
            {icon}
          </Box>
          <Box component="span" display="block" minWidth={0}>
            {contents}
          </Box>
        </Box>
      ) : (
        contents
      )}
    </Box>
  );
};
