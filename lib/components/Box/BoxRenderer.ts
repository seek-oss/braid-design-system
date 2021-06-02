import { ReactElement } from 'react';
import { renderBackgroundProvider } from './BackgroundContext';
import { atoms, Atoms } from '../../atoms/atoms';

export interface BoxRendererProps extends Omit<Atoms, 'reset'> {
  component?: Atoms['reset'];
  children: (className: string) => ReactElement | null;
}

export const BoxRenderer = ({
  children,
  component = 'div',
  ...props
}: BoxRendererProps) => {
  const element = children(atoms({ reset: component, ...props }));

  return renderBackgroundProvider(props.background, element);
};
