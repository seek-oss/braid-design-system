import * as styles from './Divider.css';
export interface DividerProps {
  weight?: keyof typeof styles.weight;
}
export declare const Divider: ({ weight }: DividerProps) => JSX.Element;
