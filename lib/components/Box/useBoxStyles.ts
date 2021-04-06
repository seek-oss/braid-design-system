import { boxStyles, BoxStylesProps } from './boxStyles';
import { ElementType } from 'react';
import * as resetStyles from '../../reset/reset.css';

export interface UseBoxStylesProps extends BoxStylesProps {
  component: ElementType | null;
}

export const useBoxStyles = ({ component, ...rest }: UseBoxStylesProps) =>
  boxStyles({
    ...rest,
    className: [
      resetStyles.element[component as keyof typeof resetStyles.element],
      rest.className,
    ],
  });
