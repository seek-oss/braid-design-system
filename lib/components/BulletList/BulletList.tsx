import React, { ReactNode, createContext, Children } from 'react';
import { Box } from '../Box/Box';
import { UseTextProps } from '../../hooks/typography';
import { SpaceY } from '../Box/useBoxStyles';

const defaultSize = 'standard';
const defaultSpace = 'xxsmall';
interface BulletListContext {
  size: UseTextProps['size'];
  space?: SpaceY;
}
export const BulletListContext = createContext<BulletListContext>({
  size: defaultSize,
  space: defaultSpace,
});

export interface BulletListProps {
  children: ReactNode;
  size?: UseTextProps['size'];
  space?: SpaceY;
}

export const BulletList = ({
  children,
  size = defaultSize,
  space = defaultSpace,
}: BulletListProps) => {
  const bullets = Children.toArray(children);

  return (
    <Box component="ul">
      {bullets.map((child, index) => (
        <BulletListContext.Provider
          value={{
            size,
            space: index !== bullets.length - 1 ? space : undefined,
          }}
        >
          {child}
        </BulletListContext.Provider>
      ))}
    </Box>
  );
};
