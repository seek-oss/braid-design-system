import type { ReactElement } from 'react';
import type { ClassValue } from 'clsx';
import clsx from 'clsx';
import { renderBackgroundProvider } from './BackgroundContext';
import type { Atoms } from '../../css/atoms/atoms';
import { atoms } from '../../css/atoms/atoms';

export interface BoxRendererProps extends Omit<Atoms, 'reset'> {
  component?: Atoms['reset'];
  className?: ClassValue;
  children: (className: string) => ReactElement | null;
}

export const BoxRenderer = ({
  children,
  component = 'div',
  className,
  ...props
}: BoxRendererProps) => {
  const atomicClasses = atoms({ reset: component, ...props });
  const element = children(clsx(className, atomicClasses));

  return renderBackgroundProvider(props.background, element);
};
