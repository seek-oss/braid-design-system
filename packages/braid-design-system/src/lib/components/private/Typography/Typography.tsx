import React, { type ReactElement, type ReactNode } from 'react';
import { type BoxProps, Box } from '../../Box/Box';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../buildDataAttributes';
import { MaxLines } from '../MaxLines/MaxLines';
import type { UseIconProps } from '../../../hooks/useIcon';
import { alignToFlexAlign } from '../../../utils/align';
import dedent from 'dedent';
import { descenderCropFixForWebkitBox } from '../MaxLines/MaxLines.css';

export interface TypographyProps extends Pick<BoxProps, 'id' | 'component'> {
  children?: ReactNode;
  icon?: ReactElement<UseIconProps>;
  align?: BoxProps['textAlign'];
  /** @deprecated Use `maxLines={1}` instead. */
  truncate?: boolean;
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
  truncate = false,
  maxLines,
  icon,
  data,
  children,
  ...restProps
}: PrivateTypographyProps) => {
  const lines = truncate ? 1 : maxLines;
  const isTruncated = typeof lines === 'number';
  const contents = isTruncated ? (
    <MaxLines lines={lines}>{children}</MaxLines>
  ) : (
    children
  );

  if (process.env.NODE_ENV !== 'production') {
    if (truncate) {
      // eslint-disable-next-line no-console
      console.warn(
        dedent`
          The "truncate" prop has been deprecated and will be removed in a future version. Use "maxLines" instead.
             <Text
            %c-   truncate
            %c+   maxLines={1}
             %c/>
        `,
        'color: red',
        'color: green',
        'color: inherit',
      );
    }
  }

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
