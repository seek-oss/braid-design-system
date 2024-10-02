import React, { type ReactElement, type ReactNode } from 'react';
import { type BoxProps, Box } from '../../Box/Box';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../buildDataAttributes';
import { MaxLines } from '../MaxLines/MaxLines';
import type { UseIconProps } from '../../../hooks/useIcon';
import { alignToFlexAlign } from '../../../utils/align';
import { descenderCropFixForWebkitBox } from '../MaxLines/MaxLines.css';

export interface TypographyProps extends Pick<BoxProps, 'id' | 'component'> {
  children?: ReactNode;
  icon?: ReactElement<UseIconProps>;
  align?: BoxProps['textAlign'];
  maxLines?: number;
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
  maxLines,
  icon,
  data,
  children,
  ...restProps
}: PrivateTypographyProps) => {
  const isTruncated = typeof maxLines === 'number';
  const contents = isTruncated ? (
    <MaxLines lines={maxLines}>{children}</MaxLines>
  ) : (
    children
  );

  return (
    <Box
      id={id}
      display="block"
      component={component}
      textAlign={align}
      className={[
        className,
        isTruncated ? descenderCropFixForWebkitBox : undefined,
      ]}
      minWidth={isTruncated ? 0 : undefined}
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
