import { ReactElement } from 'react';
import { renderBackgroundProvider } from './BackgroundContext';
import { boxStyles, BoxStylesProps } from './boxStyles';

export interface BoxRendererProps extends BoxStylesProps {
  children: (className: string) => ReactElement | null;
}

export const BoxRenderer = ({ children, ...props }: BoxRendererProps) => {
  const element = children(boxStyles(props));

  return renderBackgroundProvider(props.background, element);
};
