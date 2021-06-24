import { DataAttributeMap } from '../private/buildDataAttributes';
import * as styles from './Loader.css';
interface LoaderProps {
    size?: keyof typeof styles.size;
    'aria-label'?: string;
    delayVisibility?: boolean;
    data?: DataAttributeMap;
}
export declare const Loader: ({ size, "aria-label": ariaLabel, delayVisibility, data, }: LoaderProps) => JSX.Element;
export {};
