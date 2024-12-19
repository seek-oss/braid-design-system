import { createContext, useContext, useMemo, type ReactNode } from 'react';
import type { BadgeProps } from './Badge';

interface DefaultBadgeProps {
  bleedY: BadgeProps['bleedY'];
}

const DefaultBadgePropsContext = createContext<DefaultBadgeProps>({
  bleedY: undefined,
});

interface DefaultBadgePropsProviderProps extends DefaultBadgeProps {
  children: ReactNode;
}

export const DefaultBadgePropsProvider = ({
  bleedY,
  children,
}: DefaultBadgePropsProviderProps) => {
  const defaultBadgeProps = useMemo(
    () => ({
      bleedY,
    }),
    [bleedY],
  );

  return (
    <DefaultBadgePropsContext.Provider value={defaultBadgeProps}>
      {children}
    </DefaultBadgePropsContext.Provider>
  );
};

export const useDefaultBadgeProps = ({
  bleedY: bleedYProp,
}: DefaultBadgeProps) => {
  const { bleedY } = useContext(DefaultBadgePropsContext);

  return {
    bleedY: bleedYProp ?? bleedY ?? false,
  };
};
