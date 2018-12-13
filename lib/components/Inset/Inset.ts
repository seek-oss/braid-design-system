import React from 'react';
import Box from '../Box/Box';
import withTheme from '../private/withTheme';
import { SpacingVariants } from '../../themes/theme';

interface Props {
  padding: SpacingVariants;
}

const Inset: React.StatelessComponent<Props> = ({ padding, ...restProps }) => {
  return (
    <Box
      paddingTop={padding}
      paddingBottom={padding}
      paddingLeft={padding}
      paddingRight={padding}
      {...restProps}
    />
  );
};

export default withTheme(Inset);
