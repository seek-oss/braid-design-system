import { ReactElement } from 'react';
import clsx, { ClassValue } from 'clsx';
import { renderBackgroundProvider } from './BackgroundContext';
import { atoms, Atoms } from '../../css/atoms/atoms';

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
