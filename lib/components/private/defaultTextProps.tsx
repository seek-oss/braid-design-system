import React from 'react';
import { createContext, useContext, ReactNode, useMemo } from 'react';
import { UseTextProps } from '../../hooks/typography';

interface DefaultTextProps {
  tone?: NonNullable<UseTextProps['tone']>;
  size?: NonNullable<UseTextProps['size']>;
}

const DefaultTextPropsContext = createContext<DefaultTextProps>({
  tone: undefined,
  size: undefined,
});

interface DefaultTextPropsProviderProps extends DefaultTextProps {
  children: ReactNode;
}

export const DefaultTextPropsProvider = ({
  size,
  tone,
  children,
}: DefaultTextPropsProviderProps) => {
  const defaultTextProps = useMemo(() => ({ size, tone }), [size, tone]);

  return (
    <DefaultTextPropsContext.Provider value={defaultTextProps}>
      {children}
    </DefaultTextPropsContext.Provider>
  );
};

export const useDefaultTextProps = ({
  size: sizeProp,
  tone: toneProp,
}: DefaultTextProps) => {
  const { size, tone } = useContext(DefaultTextPropsContext);

  return {
    size: sizeProp ?? size ?? 'standard',
    tone: toneProp ?? tone ?? 'neutral',
  };
};
