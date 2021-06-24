import { UseIconProps } from '../../../hooks/useIcon';
export declare type IconBookmarkProps = UseIconProps & {
  active?: boolean;
};
export declare const IconBookmark: ({
  active,
  ...props
}: IconBookmarkProps) => JSX.Element;
