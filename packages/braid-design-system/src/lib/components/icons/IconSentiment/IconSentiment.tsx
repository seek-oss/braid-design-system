import type React from 'react';
import { Box } from '../../Box/Box';
import { IconContainer, type IconContainerProps } from '../IconContainer';
import { IconSentimentSvg } from './IconSentimentSvg';
import { IconSentimentNegativeSvg } from './IconSentimentNegativeSvg';
import { IconSentimentPositiveSvg } from './IconSentimentPositiveSvg';

type Feeling = 'positive' | 'negative' | 'neutral';

export type IconSentimentProps = IconContainerProps & {
  feeling?: Feeling;
};

const feelingToIcon: Record<Feeling, React.ComponentType> = {
  positive: IconSentimentPositiveSvg,
  negative: IconSentimentNegativeSvg,
  neutral: IconSentimentSvg,
};

export const IconSentiment = ({
  feeling = 'neutral',
  ...props
}: IconSentimentProps) => (
  <IconContainer {...props}>
    {(svgProps) => (
      <Box
        component={feelingToIcon[feeling] || feelingToIcon.neutral}
        {...svgProps}
      />
    )}
  </IconContainer>
);
