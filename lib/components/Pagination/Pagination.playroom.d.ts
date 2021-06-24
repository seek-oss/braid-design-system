import { Optional } from 'utility-types';
import { StateProp } from '../../playroom/playroomState';
import { PaginationProps } from './Pagination';
declare type PlayroomPaginationProps = StateProp & Optional<PaginationProps, 'label' | 'linkProps' | 'page' | 'total'>;
export declare const Pagination: ({ page, total, linkProps, label, ...restProps }: PlayroomPaginationProps) => JSX.Element;
export {};
