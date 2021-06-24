import { DividerProps } from '../Divider/Divider';
import { Space } from '../../atoms/atoms';
import { ReactNodeNoStrings } from '../private/ReactNodeNoStrings';
import { RequiredResponsiveValue } from '../../atoms/sprinkles.css';
import { DataAttributeMap } from '../private/buildDataAttributes';
export interface TilesProps {
    children: ReactNodeNoStrings;
    space: RequiredResponsiveValue<Space>;
    columns: RequiredResponsiveValue<1 | 2 | 3 | 4 | 5 | 6>;
    dividers?: boolean | DividerProps['weight'];
    data?: DataAttributeMap;
}
export declare const Tiles: ({ children, space, columns, dividers, data, }: TilesProps) => JSX.Element;
