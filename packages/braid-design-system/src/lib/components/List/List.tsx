import { Children, type FC, type ReactNode } from 'react';

import flattenChildren from '../../utils/flattenChildren';
import { Box } from '../Box/Box';
import { type StackProps, Stack } from '../Stack/Stack';
import { type TextProps, Text } from '../Text/Text';
import type { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';
import {
  DefaultTextPropsProvider,
  useDefaultTextProps,
} from '../private/defaultTextProps';

import * as styles from './List.css';
import { lineHeightContainer } from '../../css/lineHeightContainer.css';

function numberToAlpha(inputNumber: number) {
  let returnValue = '';
  let counter = inputNumber;

  while (counter > 0) {
    const t = (counter - 1) % 26;
    returnValue = String.fromCharCode(97 + t) + returnValue;
    counter = ((counter - t) / 26) | 0;
  }

  return returnValue;
}

const romanNumerals = {
  m: 1000,
  cm: 900,
  d: 500,
  cd: 400,
  c: 100,
  xc: 90,
  l: 50,
  xl: 40,
  x: 10,
  ix: 9,
  v: 5,
  iv: 4,
  i: 1,
} as const;
function numberToRomanNumerals(inputNumber: number) {
  let returnValue = '';
  let counter = inputNumber;

  (Object.keys(romanNumerals) as Array<keyof typeof romanNumerals>).forEach(
    (romanNumeral) => {
      const value = romanNumerals[romanNumeral];

      while (counter >= value) {
        returnValue += romanNumeral;
        counter -= value;
      }
    },
  );

  return returnValue;
}

interface CharacterBulletProps {
  length?: number;
  children: string | number;
}

const CharacterBullet = ({ length = 1, children }: CharacterBulletProps) => (
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

interface ListTypeCharacter {
  type?: 'bullet' | 'number' | 'alpha' | 'roman';
  icon?: never;
}

interface ListTypeIcon {
  type: 'icon';
  icon: ReactNode;
}

export type ListProps = {
  children: StackProps['children'];
  size?: TextProps['size'];
  space?: StackProps['space'];
  tone?: TextProps['tone'];
  start?: number;
  data?: StackProps['data'];
} & (ListTypeIcon | ListTypeCharacter);

export const List: FC<ListProps> = ({
  children,
  size: sizeProp,
  tone: toneProp,
  space: spaceProp,
  type = 'bullet',
  start = 1,
  data,
  ...restProps
}) => {
  const { size, tone } = useDefaultTextProps({
    size: sizeProp,
    tone: toneProp,
  });

  const defaultSpace =
    size === 'xsmall' || size === 'small' ? 'xsmall' : 'small';
  const space = spaceProp || defaultSpace;

  const listItems = flattenChildren(children) as ReactNodeNoStrings[];
  const lastNumberLength =
    type === 'number' ? (listItems.length + (start - 1)).toString().length : -1;

  return (
    <DefaultTextPropsProvider size={size} tone={tone}>
      <Stack
        component={/^(bullet|icon)$/.test(type) ? 'ul' : 'ol'}
        space={space}
        align="left"
        data={data}
      >
        {Children.map(listItems, (listItem, index) => {
          const resolvedIndex = index + (start - 1);

          return (
            <Box component="li" display="flex">
              <Text component="div" size={size} tone={tone}>
                <Box
                  display="flex"
                  alignItems={
                    /^(bullet|icon)$/.test(type) ? 'center' : undefined
                  }
                  className={lineHeightContainer[size]}
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

                    if (type === 'roman') {
                      return (
                        <CharacterBullet length={2}>
                          {numberToRomanNumerals(resolvedIndex + 1)}
                        </CharacterBullet>
                      );
                    }

                    if (type === 'icon' && 'icon' in restProps) {
                      return restProps.icon;
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
