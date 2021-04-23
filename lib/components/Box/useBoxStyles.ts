import classNames from 'classnames';
import { ElementType } from 'react';
import * as resetStyles from '../../reset/reset.css';
import { atoms } from './../../atoms/atomsFn';

type AtomProps = Parameters<typeof atoms>[0];

export interface UseBoxStylesProps extends AtomProps {
  component: ElementType | null;
  className?: Parameters<typeof classNames>[0];
}

export const useBoxStyles = ({
  component,
  className,
  ...rest
}: UseBoxStylesProps) =>
  classNames(
    atoms(rest),
    resetStyles.base,
    resetStyles.element[component as keyof typeof resetStyles.element],
    className,
  );
