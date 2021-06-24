import { OptionalTitle } from '../../components/icons/SVGTypes';
import { BoxProps } from '../../components/Box/Box';
import { UseTextProps } from '../typography';
import { DataAttributeMap } from '../../components/private/buildDataAttributes';
import * as styles from './icon.css';
declare type IconSize = NonNullable<UseTextProps['size']> | 'fill';
export interface IconSizeProps {
    size?: Exclude<IconSize, 'fill'>;
}
export declare const iconSize: ({ size }?: IconSizeProps) => string;
export interface IconContainerSizeProps {
    size?: Exclude<IconSize, 'fill'>;
}
export declare const iconContainerSize: (size?: Exclude<IconSize, 'fill'>) => string;
export declare type UseIconProps = {
    size?: IconSize;
    tone?: UseTextProps['tone'];
    alignY?: 'uppercase' | 'lowercase';
    data?: DataAttributeMap;
} & OptionalTitle;
declare type PrivateIconProps = {
    verticalCorrection?: {
        lowercase: keyof typeof styles.alignY.lowercase;
        uppercase: keyof typeof styles.alignY.uppercase;
    };
};
declare const _default: ({ size, tone, alignY, data, ...titleProps }: UseIconProps, { verticalCorrection }?: PrivateIconProps) => BoxProps;
export default _default;
