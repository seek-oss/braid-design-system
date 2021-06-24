import { ReactNode } from 'react';
import { TextProps } from '../Text/Text';
import { StackProps } from '../Stack/Stack';
declare type ListTypeCharacter = {
    type?: 'bullet' | 'number' | 'alpha' | 'roman';
    icon?: never;
};
declare type ListTypeIcon = {
    type: 'icon';
    icon: ReactNode;
};
export declare type ListProps = {
    children: StackProps['children'];
    size?: TextProps['size'];
    space?: StackProps['space'];
    tone?: TextProps['tone'];
    start?: number;
    data?: StackProps['data'];
} & (ListTypeIcon | ListTypeCharacter);
export declare const List: ({ children, size: sizeProp, tone: toneProp, space, type, start, data, ...restProps }: ListProps) => JSX.Element;
export {};
