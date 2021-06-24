import { ReactNode } from 'react';
import { ListProps } from '../List/List';
declare const validTones: readonly ["neutral", "secondary"];
export interface BulletListProps {
    space?: ListProps['space'];
    size?: ListProps['size'];
    tone?: typeof validTones[number];
    children: ListProps['children'];
}
/** @deprecated `BulletList` has been deprecated. Use [List](https://seek-oss.github.io/braid-design-system/components/List) instead. */
export declare const BulletList: ({ space, size, tone, children, }: BulletListProps) => JSX.Element;
export interface BulletProps {
    children: ReactNode;
}
/** @deprecated `Bullet` has been deprecated. Use [List](https://seek-oss.github.io/braid-design-system/components/List) instead. */
export declare const Bullet: ({ children }: BulletProps) => JSX.Element;
export {};
