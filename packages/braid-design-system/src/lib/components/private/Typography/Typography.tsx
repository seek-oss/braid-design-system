import type { ReactElement, ReactNode } from 'react';

import type { UseIconProps } from '../../../hooks/useIcon';
import { alignToFlexAlign } from '../../../utils/align';
import { type BoxProps, Box } from '../../Box/Box';
import { MaxLines } from '../MaxLines/MaxLines';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../buildDataAttributes';
import { iconSlotSpace } from '../iconSlotSpace';

import { descenderCropFixForWebkitBox } from '../MaxLines/MaxLines.css';

export interface TypographyProps extends Pick<BoxProps, 'id' | 'component'> {
  children?: ReactNode;
  icon?: ReactElement<UseIconProps> | null;
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
            paddingRight={iconSlotSpace}
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
