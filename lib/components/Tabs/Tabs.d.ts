import type { ResponsiveSpace } from '../../atoms/atoms';
import { DataAttributeMap } from '../private/buildDataAttributes';
import { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';
import { TabListContextValues } from './TabListContext';
export interface TabsProps {
    children: ReactNodeNoStrings;
    label: string;
    align?: 'left' | 'center';
    gutter?: ResponsiveSpace;
    reserveHitArea?: boolean;
    data?: DataAttributeMap;
    divider?: TabListContextValues['divider'];
}
export declare const Tabs: (props: TabsProps) => JSX.Element;
