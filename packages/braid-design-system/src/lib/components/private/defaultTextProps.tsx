import React, {
  type ReactNode,
  createContext,
  useContext,
  useMemo,
} from 'react';
import type { TextStyleProps } from '../../css/typography';
import type { TextProps } from '../Text/Text';

interface DefaultTextProps {
  tone?: TextStyleProps['tone'];
  weight?: TextStyleProps['weight'];
  size?: TextStyleProps['size'];
  maxLines?: TextProps['maxLines'];
}

const DefaultTextPropsContext = createContext<DefaultTextProps>({
  tone: undefined,
  weight: undefined,
  size: undefined,
  maxLines: undefined,
});

interface DefaultTextPropsProviderProps extends DefaultTextProps {
  children: ReactNode;
}

export const DefaultTextPropsProvider = ({
  size,
  weight,
  tone,
  maxLines,
  children,
}: DefaultTextPropsProviderProps) => {
  const defaultTextProps = useMemo(
    () => ({
      size,
      weight,
      tone,
      maxLines,
    }),
    [size, weight, tone, maxLines],
  );

  return (
    <DefaultTextPropsContext.Provider value={defaultTextProps}>
      {children}
    </DefaultTextPropsContext.Provider>
  );
};

export const useDefaultTextProps = ({
  size: sizeProp,
  weight: weightProp,
  tone: toneProp,
  maxLines: maxLinesProp,
}: DefaultTextProps) => {
  const { size, weight, tone, maxLines } = useContext(DefaultTextPropsContext);

  return {
    size: sizeProp ?? size ?? 'standard',
    weight: weightProp ?? weight ?? 'regular',
    tone: toneProp ?? tone ?? 'neutral',
    maxLines: maxLinesProp ?? maxLines ?? undefined,
  };
};
