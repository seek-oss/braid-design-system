import type { ComponentType, FC } from 'react';

import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';

import { IconSentimentNegativeSvg } from './IconSentimentNegativeSvg';
import { IconSentimentNeutralSvg } from './IconSentimentNeutralSvg';
import { IconSentimentPositiveSvg } from './IconSentimentPositiveSvg';

type Feeling = 'positive' | 'negative' | 'neutral';

export type IconSentimentProps = IconContainerProps & {
  feeling?: Feeling;
};

const feelingToIcon: Record<Feeling, ComponentType> = {
  positive: IconSentimentPositiveSvg,
  negative: IconSentimentNegativeSvg,
  neutral: IconSentimentNeutralSvg,
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
