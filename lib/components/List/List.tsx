import React, { Children } from 'react';
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

interface CharacterBulletProps {
  length?: number;
  children: string | number;
}

const CharacterBullet = ({ length = 1, children }: CharacterBulletProps) => {
  const styles = useStyles(styleRefs);

  return (
    <Box
      display="inlineBlock"
      className={[
        styles.minCharacterWidth[length - 1] ??
          styles.minCharacterWidth[styles.minCharacterWidth.length - 1],
        styles.trimGutter,
      ]}
    >
      {children}.
    </Box>
  );
};

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
  const lastNumberLength =
    type === 'number' ? (listItems.length + (start - 1)).toString().length : -1;

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
                        <CharacterBullet length={lastNumberLength}>
                          {resolvedIndex + 1}
                        </CharacterBullet>
                      );
                    }

                    if (type === 'alpha') {
                      return (
                        <CharacterBullet>
                          {numberToAlpha(resolvedIndex + 1)}
                        </CharacterBullet>
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
              <Box
                minWidth={0}
                width="full"
                paddingLeft={size === 'xsmall' ? 'xsmall' : 'small'}
              >
                {listItem}
              </Box>
            </Box>
          );
        })}
      </Stack>
    </DefaultTextPropsProvider>
  );
};
