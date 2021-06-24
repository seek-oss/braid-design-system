import { UseIconProps } from '../../../hooks/useIcon';
export declare type IconChevronProps = UseIconProps & {
  direction?: 'up' | 'down' | 'left' | 'right';
};
export declare const IconChevron: ({
  direction,
  ...props
}: IconChevronProps) => JSX.Element;
