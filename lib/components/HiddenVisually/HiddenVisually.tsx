import React, { useContext } from 'react';
import { useStyles } from 'sku/react-treat';
import { Box, BoxProps } from '../Box/Box';
import { TextContext } from '../Text/TextContext';
import HeadingContext from '../Heading/HeadingContext';
import buildDataAttributes, {
  DataAttributeMap,
} from '../private/buildDataAttributes';
import * as styleRefs from './HiddenVisually.treat';

interface HiddenVisuallyProps {
  id?: string;
  children: BoxProps['children'];
  data?: DataAttributeMap;
}

export const HiddenVisually = ({ id, data, children }: HiddenVisuallyProps) => {
  const styles = useStyles(styleRefs);
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
      {...(data ? buildDataAttributes(data) : undefined)}
    >
      {children}
    </Box>
  );
};
