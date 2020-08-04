import React, { Children, Fragment } from 'react';
import { useStyles } from 'sku/react-treat';
import { Text, TextProps } from '../Text/Text';
import { Stack, StackProps } from '../Stack/Stack';
import { Box } from '../Box/Box';
import flattenChildren from 'react-keyed-flatten-children';
import { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';
import {
  DefaultTextPropsProvider,
  useDefaultTextProps,
} from '../private/defaultTextProps';
import { useLineHeightContainer } from '../../hooks/useLineHeightContainer/useLineHeightContainer';
import * as styleRefs from './List.treat';

function numberToAlpha(inputNumber: number) {
  let s = '';
  let currentNumber = inputNumber;

  while (currentNumber > 0) {
    const t = (currentNumber - 1) % 26;
    s = String.fromCharCode(97 + t) + s;
    currentNumber = ((currentNumber - t) / 26) | 0;
  }

  return s;
}

export interface ListProps {
  children: StackProps['children'];
  size?: TextProps['size'];
  space?: StackProps['space'];
  tone?: TextProps['tone'];
  type?: 'bullet' | 'number' | 'alpha';
  start?: number;
}

export const List = ({
  children,
  size: sizeProp,
  tone: toneProp,
  space = 'medium',
  type = 'bullet',
  start = 1,
}: ListProps) => {
  const styles = useStyles(styleRefs);
  const { size, tone } = useDefaultTextProps({
    size: sizeProp,
    tone: toneProp,
  });
  const listItems = flattenChildren(children) as ReactNodeNoStrings[];
  const lineHeightContainerStyles = useLineHeightContainer(size);

  return (
    <DefaultTextPropsProvider size={size} tone={tone}>
      <Stack component={type === 'bullet' ? 'ul' : 'ol'} space={space}>
        {Children.map(listItems, (listItem, index) => {
          const resolvedIndex = index + (start - 1);

          return (
            <Box display="flex">
              <Text component="div" size={size} tone={tone}>
                <Box
                  display="flex"
                  alignItems={
                    type !== 'number' && type !== 'alpha' ? 'center' : undefined
                  }
                  className={lineHeightContainerStyles}
                  userSelect="none"
                  aria-hidden
                >
                  {(() => {
                    if (type === 'number') {
                      return (
                        <Fragment>
                          {resolvedIndex + 1}.
                          {listItems.length > 9 && resolvedIndex < 9
                            ? '\u2007'
                            : ''}
                        </Fragment>
                      );
                    }

                    if (type === 'alpha') {
                      return (
                        <Fragment>{numberToAlpha(resolvedIndex + 1)}.</Fragment>
                      );
                    }

                    return (
                      <Box
                        borderRadius="full"
                        className={[styles.currentColor, styles.size[size]]}
                      />
                    );
                  })()}
                </Box>
              </Text>
              <Box paddingLeft={size === 'xsmall' ? 'xsmall' : 'small'}>
                {listItem}
              </Box>
            </Box>
          );
        })}
      </Stack>
    </DefaultTextPropsProvider>
  );
};
