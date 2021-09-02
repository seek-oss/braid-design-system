import React from 'react';
import { createContext, useContext, ReactNode, useMemo } from 'react';
import { UseTextProps } from '../../hooks/typography';

interface DefaultTextProps {
  tone?: NonNullable<UseTextProps['tone']>;
  weight?: NonNullable<UseTextProps['weight']>;
  size?: NonNullable<UseTextProps['size']>;
}

const DefaultTextPropsContext = createContext<DefaultTextProps>({
  tone: undefined,
  weight: undefined,
  size: undefined,
});

interface DefaultTextPropsProviderProps extends DefaultTextProps {
  children: ReactNode;
}

export const DefaultTextPropsProvider = ({
  size,
  weight,
  tone,
  children,
}: DefaultTextPropsProviderProps) => {
  const defaultTextProps = useMemo(
    () => ({
      size,
      weight,
      tone,
    }),
    [size, weight, tone],
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
}: DefaultTextProps) => {
  const { size, weight, tone } = useContext(DefaultTextPropsContext);

  return {
    size: sizeProp ?? size ?? 'standard',
    weight: weightProp ?? weight ?? 'regular',
    tone: toneProp ?? tone ?? 'neutral',
  };
};
