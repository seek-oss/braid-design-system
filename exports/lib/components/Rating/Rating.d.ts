import { TextProps } from '../Text/Text';
export interface RatingProps {
  rating: number;
  size?: TextProps['size'];
  showTextRating?: boolean;
  'aria-label'?: string;
  data?: TextProps['data'];
}
export declare const Rating: ({
  rating,
  size,
  showTextRating,
  'aria-label': ariaLabel,
  data,
}: RatingProps) => JSX.Element;
