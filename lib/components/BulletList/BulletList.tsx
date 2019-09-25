import React, { ReactNode, createContext, Children } from 'react';
import { Box } from '../Box/Box';
import { UseTextProps } from '../../hooks/typography';
import { Space } from '../Box/useBoxStyles';

const defaultSize = 'standard';
const defaultSpace = 'xxsmall';
interface BulletListContext {
  size: UseTextProps['size'];
  space?: Space;
}
export const BulletListContext = createContext<BulletListContext>({
  size: defaultSize,
  space: defaultSpace,
});

export interface BulletListProps {
  children: ReactNode;
  size?: UseTextProps['size'];
  space?: Space;
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
