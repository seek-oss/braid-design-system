import { ReactElement } from 'react';
import { renderBackgroundProvider } from './BackgroundContext';
import { useBoxStyles, UseBoxStylesProps } from './useBoxStyles';

export interface BoxRendererProps extends UseBoxStylesProps {
  children: (className: string) => ReactElement | null;
}

export const BoxRenderer = ({ children, ...props }: BoxRendererProps) => {
  const boxStyles = useBoxStyles(props);
  const element = children(boxStyles);

  return renderBackgroundProvider(props.background, element);
};
