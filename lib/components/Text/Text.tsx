import React, { ReactNode, useContext } from 'react';
import { useStyles } from 'sku/react-treat';
import classnames from 'classnames';
import TextContext from './TextContext';
import { Box, BoxProps } from '../Box/Box';
import { useText, UseTextProps } from '../../hooks/typography';
import * as styleRefs from './Text.treat';

export interface TextProps extends Pick<BoxProps, 'component'> {
  id?: string;
  children?: ReactNode;
  size?: UseTextProps['size'];
  tone?: UseTextProps['tone'];
  weight?: UseTextProps['weight'];
  baseline?: UseTextProps['baseline'];
}

export const Text = ({
  id,
  component = 'span',
  size,
  tone,
  weight,
  baseline = true,
  children,
}: TextProps) => {
  const styles = useStyles(styleRefs);
  const isListItem = typeof component === 'string' && /^li$/i.test(component);
  const textStyles = useText({ weight, size, baseline, tone });

  if (process.env.NODE_ENV !== 'production') {
    const inText = useContext(TextContext);

    if (inText) {
      throw new Error(
        'Text components should not be nested within each other.',
      );
    }
  }

  return (
    <TextContext.Provider value={true}>
      <Box
        id={id}
        display={!isListItem ? 'block' : undefined}
        component={component}
        className={classnames(textStyles, isListItem && styles.listItem)}
      >
        {children}
      </Box>
    </TextContext.Provider>
  );
};
