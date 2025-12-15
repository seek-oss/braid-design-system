import type { ComponentType, FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconSentimentNegativeSvg } from './IconSentimentNegativeSvg';
import { IconSentimentPositiveSvg } from './IconSentimentPositiveSvg';
import { IconSentimentSvg } from './IconSentimentSvg';

type Feeling = 'positive' | 'negative' | 'neutral';

export type IconSentimentProps = IconContainerProps & {
  feeling?: Feeling;
};

const feelingToIcon: Record<Feeling, ComponentType> = {
  positive: IconSentimentPositiveSvg,
  negative: IconSentimentNegativeSvg,
  neutral: IconSentimentSvg,
};

export const IconSentiment: FC<IconSentimentProps> = ({
  feeling = 'neutral',
  ...props
}) => (
  <IconContainer {...props}>
    {(svgProps) => (
      <Box
        component={feelingToIcon[feeling] || feelingToIcon.neutral}
        {...svgProps}
      />
    )}
  </IconContainer>
);
