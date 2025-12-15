import { useContext, type FC } from 'react';

import { type BoxProps, Box } from '../Box/Box';
import HeadingContext from '../Heading/HeadingContext';
import { TextContext } from '../Text/TextContext';
import buildDataAttributes, {
  type DataAttributeMap,
} from '../private/buildDataAttributes';

import * as styles from './HiddenVisually.css';

interface HiddenVisuallyProps {
  id?: string;
  children: BoxProps['children'];
  data?: DataAttributeMap;
}

export const HiddenVisually: FC<HiddenVisuallyProps> = ({
  id,
  data,
  children,
  ...restProps
}) => {
  const inText = Boolean(useContext(TextContext));
  const inHeading = Boolean(useContext(HeadingContext));

  const component = inText || inHeading ? 'span' : 'div';

  return (
    <Box
      component={component}
      id={id}
      position="absolute"
      overflow="hidden"
      className={styles.root}
      {...buildDataAttributes({ data, validateRestProps: restProps })}
    >
      {children}
    </Box>
  );
};
