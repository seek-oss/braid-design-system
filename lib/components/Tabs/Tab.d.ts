import { ReactNode, ReactElement } from 'react';
import { DataAttributeMap } from '../private/buildDataAttributes';
import { BadgeProps } from '../Badge/Badge';
export interface TabProps {
    children: ReactNode;
    item?: string;
    badge?: ReactElement<BadgeProps>;
    data?: DataAttributeMap;
}
export declare const Tab: ({ children, data, badge, item }: TabProps) => JSX.Element;
