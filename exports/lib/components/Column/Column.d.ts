import { ReactNode } from 'react';
import { DataAttributeMap } from '../private/buildDataAttributes';
import * as styles from './Column.css';
export interface ColumnProps {
  children: ReactNode;
  width?: keyof typeof styles.width | 'content';
  data?: DataAttributeMap;
}
export declare const Column: ({
  children,
  data,
  width,
}: ColumnProps) => JSX.Element;
