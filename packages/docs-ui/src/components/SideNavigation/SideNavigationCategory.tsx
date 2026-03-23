import { Divider, Stack } from 'braid-design-system';
import { type FC, type ReactNode, Children, useMemo } from 'react';

import {
  type SideNavigationCategoryContextValue,
  SideNavigationCategoryContext,
} from './SideNavigationCategoryContext';

export interface SideNavigationCategoryProps {
  children: ReactNode;
  dividers?: boolean;
  size?: SideNavigationCategoryContextValue['size'];
  tone?: SideNavigationCategoryContextValue['tone'];
  weight?: SideNavigationCategoryContextValue['weight'];
}

export const SideNavigationCategory: FC<SideNavigationCategoryProps> = ({
  children,
  size = 'large',
  tone,
  weight,
  dividers = true,
}) => {
  const contextValue = useMemo(
    () => ({ size, tone, weight }),
    [size, tone, weight],
  );

  return (
    <SideNavigationCategoryContext.Provider value={contextValue}>
      <Stack space="medium">
        {!dividers ? (
          <>{children}</>
        ) : (
          <>
            <Divider />
            {Children.map(children, (child, index) => (
              <>
                {index > 0 ? <Divider /> : null}
                {child}
              </>
            ))}
            <Divider />
          </>
        )}
      </Stack>
    </SideNavigationCategoryContext.Provider>
  );
};
