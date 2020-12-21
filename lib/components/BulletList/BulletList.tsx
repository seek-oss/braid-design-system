import React, { createContext, useContext, ReactNode } from 'react';
import assert from 'assert';
import dedent from 'dedent';
import { List, ListProps } from '../List/List';
import { Text } from '../Text/Text';

const BulletListContext = createContext(false);

const validTones = ['neutral', 'secondary'] as const;

export interface BulletListProps {
  space?: ListProps['space'];
  size?: ListProps['size'];
  tone?: typeof validTones[number];
  children: ListProps['children'];
}

/** @deprecated `BulletList` has been deprecated. Use [List](https://seek-oss.github.io/braid-design-system/components/List) instead. */
export const BulletList = ({
  space,
  size,
  tone,
  children,
}: BulletListProps) => {
  assert(!tone || validTones.includes(tone), `Invalid tone: ${tone}`);

  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.warn(
      dedent`
      The "BulletList" and "Bullet" components have been deprecated and will be removed in a future version. Use "List" instead.
      %c
      - <BulletList>
      -   <Bullet>...</Bullet>
      -   <Bullet>...</Bullet>
      -   <Bullet>...</Bullet>
      - </BulletList>
      %c
      + <List>
      +   <Text>...</Text>
      +   <Text>...</Text>
      +   <Text>...</Text>
      + </List>
    `,
      'color: red',
      'color: green',
    );
  }

  return (
    <BulletListContext.Provider value={true}>
      <List space={space} size={size} tone={tone}>
        {children}
      </List>
    </BulletListContext.Provider>
  );
};

export interface BulletProps {
  children: ReactNode;
}

/** @deprecated `Bullet` has been deprecated. Use [List](https://seek-oss.github.io/braid-design-system/components/List) instead. */
export const Bullet = ({ children }: BulletProps) => {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    if (!useContext(BulletListContext)) {
      // eslint-disable-next-line no-console
      console.warn(
        dedent`
        The "BulletList" and "Bullet" components have been deprecated and will be removed in a future version. Use "List" instead.
        %c
        - <BulletList>
        -   <Bullet>...</Bullet>
        -   <Bullet>...</Bullet>
        -   <Bullet>...</Bullet>
        - </BulletList>
        %c
        + <List>
        +   <Text>...</Text>
        +   <Text>...</Text>
        +   <Text>...</Text>
        + </List>
      `,
        'color: red',
        'color: green',
      );
    }
  }

  return <Text>{children}</Text>;
};
