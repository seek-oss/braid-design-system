import type { ComponentProps, FC } from 'react';

import { ScrollContainer as BraidScrollContainer } from './ScrollContainer';

export const ScrollContainer: FC<
  ComponentProps<typeof BraidScrollContainer>
> = ({ ...restProps }) => <BraidScrollContainer {...restProps} />;
