import { LinkProps } from '../Link/Link';
import { DataAttributeMap } from '../private/buildDataAttributes';
export interface PaginationProps {
  page: number;
  total: number;
  linkProps: ({
    page,
    type,
  }: {
    page: number;
    type: 'next' | 'previous' | 'pageNumber';
  }) => LinkProps;
  label: string;
  pageLabel?: (page: number) => string;
  nextLabel?: string;
  previousLabel?: string;
  data?: DataAttributeMap;
}
export declare const Pagination: ({
  page,
  total,
  linkProps,
  label,
  pageLabel,
  nextLabel,
  previousLabel,
  data,
}: PaginationProps) => JSX.Element;
