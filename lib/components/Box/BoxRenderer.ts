import { ReactElement } from 'react';
import classNames from 'classnames';
import { renderBackgroundProvider } from './BackgroundContext';
import { atoms, Atoms } from '../../atoms/atoms';

export interface BoxRendererProps extends Omit<Atoms, 'reset'> {
  component?: Atoms['reset'];
  className?: Parameters<typeof classNames>[0];
  children: (className: string) => ReactElement | null;
}

export const BoxRenderer = ({
  children,
  component = 'div',
  className,
  ...props
}: BoxRendererProps) => {
  const atomicClasses = atoms({ reset: component, ...props });
  const element = children(classNames(className, atomicClasses));

  return renderBackgroundProvider(props.background, element);
};
